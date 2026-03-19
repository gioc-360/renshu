const SYSTEM_PROMPT = `You evaluate Japanese language responses in a conversational scene.

Context: A Japanese language learner is practicing a specific social scenario. You receive what the conversation partner said, what the learner was prompted to do, and what they actually typed.

Your job: Determine if their response is socially appropriate for the situation.

Evaluation criteria (in order of priority):
1. REGISTER: Is the formality level correct? The expected register is provided. Using です/ます in a casual context, or using casual forms in a polite context, is a register error — even if the grammar is correct.
2. RELEVANCE: Does the response address what was said? A grammatically perfect sentence that ignores the conversational prompt is wrong.
3. NATURALNESS: Would a native speaker find this response natural in this situation? It does not need to match the accept-list exactly — creative responses that fit the context are acceptable.

An accept-list of known-good responses is provided as reference. Responses matching the accept-list should always be rated GOOD. Responses not on the list may still be acceptable if they fit the context and register.

Rating guide:
- GOOD: Response is appropriate, correct register, natural. Includes accept-list matches and creative responses that fit.
- HARD: Response is understandable and partially appropriate, but has a register issue, is awkward, or only loosely fits the context.
- AGAIN: Response is wrong, incomprehensible, completely off-topic, or empty.

Return JSON with exactly these fields:
{
  "acceptable": boolean,
  "rating": "AGAIN" | "HARD" | "GOOD",
  "feedback": "One sentence. What they did well or what to fix. Be specific and brief.",
  "registerError": "If there's a register mismatch, explain it in one sentence. Otherwise null."
}

Rules:
- ALWAYS return valid JSON with all four fields.
- feedback must be one sentence, max 20 words. No generic praise. Be specific to what they typed.
- registerError is null when register is correct, a string when it's wrong.
- When in doubt between GOOD and HARD, lean GOOD. The learner is practicing — reward attempts that work.
- If the normalized input is empty, rate AGAIN with feedback about not responding.`;

const ALLOWED_ORIGIN = 'https://gioc-360.github.io';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function buildUserMessage({ line, lineEn, prompt, register, best, accepts, userInput, normalized, closeFeedback }) {
  let msg = `Scene register: ${register}

Partner said: ${line}
(English: ${lineEn})

Prompt: ${prompt}

Learner typed: ${userInput}
Normalized (kana): ${normalized}

Best response: ${best}
Accept-list: ${JSON.stringify(accepts)}`;

  if (closeFeedback && closeFeedback.length > 0) {
    msg += `\nKnown register errors: ${JSON.stringify(closeFeedback)}`;
  }

  return msg;
}

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel auto-parses JSON, but handle string body as fallback
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const { line, lineEn, prompt, register, best, accepts, userInput, normalized, closeFeedback } = body;

  if (!line || !prompt || normalized === undefined) {
    return res.status(400).json({ error: 'Missing required fields', received: Object.keys(body) });
  }

  const userMessage = buildUserMessage({ line, lineEn, prompt, register, best, accepts, userInput, normalized, closeFeedback });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.1,
        max_tokens: 200,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenAI error:', err);
      return res.status(502).json({ error: 'AI evaluation failed', detail: err });
    }

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);

    const evaluation = {
      acceptable: !!result.acceptable,
      rating: ['AGAIN', 'HARD', 'GOOD'].includes(result.rating) ? result.rating : 'AGAIN',
      feedback: result.feedback || '',
      registerError: result.registerError || null,
    };

    Object.entries(corsHeaders()).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(200).json(evaluation);

  } catch (err) {
    console.error('Evaluate error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
