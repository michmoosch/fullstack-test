const express = require("express");
const cors = require("cors");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.OPENAI_API;
const API_ORG = process.env.OPENAI_ORG;

const config = new Configuration({
  organization: API_ORG,
  apiKey: API_KEY,
});

const openai = new OpenAIApi(config);

app.get("/get", async (req, res) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Write me a haiku about programming" }],
  });
  const text = completion.data.choices[0].message.content;

  res.json(`{'msg': '${text}'}`);
});

app.post("/post", async (req, res) => {
  const prompt = req.body.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const text = completion.data.choices[0].message.content;
  res.json(`{'msg': '${text}'}`);
});

app.listen("3001", () => {});
