# 💎 Accessory Matching API (Personalized with ChatGPT)

A Node.js API that uses **OpenAI GPT-4o** to generate personalized jewelry/accessory suggestions based on **name**, **birthdate**, and **gender**.

---

## 🚀 Features

- Accepts user **name**, **birthdate**, and **gender**
- Generates a matching message with **cultural and astrological context**
- Returns response in **JSON format**: `{ "message": "..." }`
- Uses **OpenAI GPT-4o-mini** with structured JSON response
- Lightweight and easy to extend

---

## 📦 Installation

```bash
git clone https://github.com/chamnand1/connect-open-ai.git
cd connect-open-ai
npm install
```

### 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
PORT=3000
```

---

## ▶️ Run the Server

```bash
node index.js
# or with nodemon:
# npx nodemon index.js
```

The server will start on: `http://localhost:3000`

---

## 📮 API Endpoint

### `POST /matching`

**Request Body:**

```json
{
  "name": "สมชาย",
  "birthdate": "1980-05-14",
  "gender": "male"
}
```

**Example Response:**

```json
{
    "message": "สวัสดีคุณสมชาย! ตามวันเกิดของคุณในวันที่ 14 พฤษภาคม 1980 คุณอยู่ในราศีพฤษภ ซึ่งมีความมั่นคงและความอดทนเป็นเอกลักษณ์ ขอแนะนำให้คุณเลือกเครื่องประดับที่ช่วยเสริมพลังให้กับบุคลิกของคุณ เช่น แหวนเงิน หรือสร้อยคอที่ทำจากหินอาเกต สีเขียว เพื่อเพิ่มความสงบและความโชคดีในชีวิตประจำวัน อีกทั้งเครื่องประดับที่ทำจากวัสดุธรรมชาติ เช่น เครื่องประดับไม้ หรือหนัง จะช่วยให้คุณรู้สึกเชื่อมโยงกับธรรมชาติอย่างแท้จริง ลองเลือกบางชิ้นที่ตรงกับสไตล์ของคุณเพื่อสะท้อนถึงความแข็งแกร่งและความพิเศษของคุณนะครับ ขอให้คุณมีความสุขและโชคดีในเส้นทางชีวิต!"
}
```

---

## 🧰 Tech Stack

- Node.js + Express.js
- [OpenAI Node SDK](https://www.npmjs.com/package/openai)
- GPT-4o-mini model with `response_format: json_object`
- `dotenv` for managing environment variables

---

## 💡 Potential Use Cases

- Personal gift or accessory recommendations
- LINE bot that suggests lucky items or birthday matches
- Horoscope-based product filters for e-commerce
- Personalized report generation (extendable to PDF or messaging APIs)

---

## 🛡️ Notes

- Make sure your `OPENAI_API_KEY` is kept private.
- OpenAI billing is based on usage — monitor your quota and model cost.
- Adjust `model` in the code if you have access to more advanced models like `gpt-4`.

---