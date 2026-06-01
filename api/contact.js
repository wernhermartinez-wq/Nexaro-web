export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch {}
  }

  try {
    const r = await fetch('https://agentes-n8n.rcsmc9.easypanel.host/webhook/nexaro-contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const text = await r.text();
    res.status(200).json({ ok: true, n8n: text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
