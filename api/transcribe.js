const ALLOWED_ORIGIN = 'https://gioc-360.github.io';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contentType = req.headers['content-type'] || 'audio/webm';
    const audioBuffer = await readRawBody(req);

    if (audioBuffer.length === 0) {
      Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
      return res.status(400).json({ error: 'Empty audio body' });
    }

    // Determine file extension from content type
    const ext = contentType.includes('mp4') ? 'mp4'
      : contentType.includes('webm') ? 'webm'
      : contentType.includes('ogg') ? 'ogg'
      : 'webm';

    // Build multipart form data for OpenAI Whisper API
    const boundary = '----WhisperBoundary' + Date.now();

    const preamble = [
      `--${boundary}\r\nContent-Disposition: form-data; name="model"\r\n\r\nwhisper-1\r\n`,
      `--${boundary}\r\nContent-Disposition: form-data; name="language"\r\n\r\nja\r\n`,
      `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="audio.${ext}"\r\nContent-Type: ${contentType}\r\n\r\n`,
    ].join('');

    const ending = `\r\n--${boundary}--\r\n`;

    const formBody = Buffer.concat([
      Buffer.from(preamble),
      audioBuffer,
      Buffer.from(ending),
    ]);

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      body: formBody,
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Whisper API error:', err);
      Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
      return res.status(502).json({ error: 'Transcription failed', detail: err });
    }

    const data = await response.json();

    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(200).json({ text: data.text || '' });

  } catch (err) {
    console.error('Transcribe error:', err);
    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(500).json({ error: 'Internal error' });
  }
}

// Disable Vercel's default body parser so we get raw audio bytes
module.exports = handler;
module.exports.config = {
  api: { bodyParser: false },
};
