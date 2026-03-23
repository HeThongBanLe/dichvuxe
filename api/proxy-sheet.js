export default async function handler(req, res) {
  // Chỉ cho phép gửi dữ liệu lên (POST)
  if (req.method !== 'POST') return res.status(405).send('Cấm vào');

  const REAL_URL = process.env.GOOGLE_SHEET_URL;

  try {
    const response = await fetch(REAL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Lỗi kết nối Google Sheet" });
  }
}