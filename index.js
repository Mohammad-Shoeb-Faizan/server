const express = require("express");
const cors = require("cors");
const { encrypt, decrypt } = require("text-encryption-service");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/encrypt", (req, res) => {
  const { text, shift } = req.body;
  const encryptedText = encrypt(text, shift);
  res.json({ encryptedText });
});

app.post("/decrypt", (req, res) => {
  const { encryptedText, shift } = req.body;
  const decryptedText = decrypt(encryptedText, shift);
  res.json({ decryptedText });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
