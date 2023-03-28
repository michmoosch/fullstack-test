const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const { Configuration, OpenAIApi } = require("openai");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "mysql_db",
  user: "MYSQL_USER",
  password: "MYSQL_PASSWORD",
  database: "uploadme",
});

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

app.get("/getPersonas", async (req, res) => {
  const SelectQuery = "SELECT * FROM personas";
  db.query(SelectQuery, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.post("/getPersona", async (req, res) => {
  const id = parseInt(req.body.id);
  const Select = "SELECT * FROM personas WHERE id = ?";
  db.query(Select, id, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
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

app.post("/insert", async (req, res) => {
  const description = req.body.body;
  const name = req.body.name;
  console.log(name);
  console.log(description);
  const insertQuery = "INSERT INTO personas (name, description) VALUES (?, ?)";
  db.query(insertQuery, [name, description], (err, result) => {
    res.json(JSON.stringify(result));
  });
});

app.listen("3001", () => {});

// async function insert(name, embedding) {}

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
