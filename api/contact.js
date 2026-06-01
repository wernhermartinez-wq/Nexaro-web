export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    await fetch('https://agentes-n8n.rcsmc9.easypanel.host/webhook/nexaro-contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Error' });
  }
}
