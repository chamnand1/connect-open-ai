const express = require("express");
const OpenAI = require("openai");
require('dotenv').config();

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint: POST /matching
// Body: { "name": "John", "birthdate": "1990-07-21" }
app.post('/matching', async (req, res) => {
  const { name, birthdate, gender } = req.body;

  if (!name || !birthdate || !gender) {
    return res.status(400).json({ error: 'Name, birthdate and gender are required.' });
  }

  const prompt = `
เลือกเครื่องประดับที่เหมาะสมกับคุณ "${name}" โดยอ้างอิงจากวันเกิด "${birthdate}" เพศ "${gender}"
ซึ่งอาจพูดถึงบุคลิกตามราศีหรือสิ่งที่เป็นมงคลในชีวิต
ใช้ภาษาที่อบอุ่น สุภาพ และจริงใจ ความยาวไม่เกิน 150 คำ ในรูปแบบ JSON format { message: "..."}.
`;

  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
        {
            role: "system",
            content: prompt,
        },
        ],
        response_format: { type: "json_object" },
    });

    const raw = completion.choices[0].message.content.trim();
    const parsed = JSON.parse(raw);
    res.json(parsed);
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate message.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
