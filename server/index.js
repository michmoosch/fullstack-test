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

  res.send(text);
});

app.post("/post", async (req, res) => {
  // const description = req.body.body;
  // const name = req.body.name;
  // const embed = await getEmbedding(description);
  // console.log(embed);
  // const obj = JSON.stringify({
  //   emb
  // })
  // res.json(`{"msg": ${embed}}`);
  // res.json(embed);
});

app.post("/embedify", async (req, res) => {
  const description = req.body.body;
  const embed = await getEmbedding(description);
  console.log(embed);
  const obj = JSON.stringify({
    embed: embed,
  });

  res.json(obj);
  // res.json(embed);
});

app.listen("3001", () => {});

async function insert(name, embedding) {}

async function getEmbedding(string) {
  console.log(string);
  const response = await openai.createEmbedding({
    input: string,
    model: "text-embedding-ada-002",
  });

  const embedding = response.data.data[0].embedding;

  return embedding;
}

// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: prompt }],
// });
// const text = completion.data.choices[0].message.content;

// app.post("/post", async (req, res) => {
//   const prompt = req.body.body;
//   const response = await openai.createEmbedding({
//     input: prompt,
//     model: "text-embedding-ada-002",
//   });

//   const embedding = response.data.data[0].embedding;

//   console.log(embedding);

// res.json(`{"msg": "${embedding}"}`);
//   res.json(embedding);
// });
