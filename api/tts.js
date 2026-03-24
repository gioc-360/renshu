const ALLOWED_ORIGIN = 'https://gioc-360.github.io';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const { text, voice } = body;

  if (!text) {
    return res.status(400).json({ error: 'Missing text field' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'tts-1-hd',
        input: text,
        voice: voice || 'nova',
        speed: 0.90,
        response_format: 'mp3',
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenAI TTS error:', err);
      return res.status(502).json({ error: 'TTS failed', detail: err });
    }

    const arrayBuffer = await response.arrayBuffer();
    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', arrayBuffer.byteLength);
    return res.status(200).send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('TTS error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
};
