import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersona } from "./api";
import { Button, Container, Form } from "react-bootstrap";
import { OpenAI } from "langchain";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

// const model = new OpenAI({
//   openAIApiKey: import.meta.env.VITE_OPENAI_API,
//   temperature: 0.5,
// });
const apiKey = import.meta.env.VITE_OPENAI_API;

const Persona = () => {
  const model = new OpenAI({ openAIApiKey: apiKey, temperature: 0.5 });
  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory: memory });
  const [persona, setPersona] = useState();
  const [message, setMessage] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function init() {
      const pers = await getPersona(id);

      setPersona((prev) => pers[0]);
    }

    init();
  }, []);

  useEffect(() => {
    if (persona == null || persona == undefined) return;
    async function initChat() {
      const setup = await chain.call({
        input: `You are a persona bot, which takes on a persona. Your name is ${persona.name}BOT. Here is some information about your persona: ${persona.description}. Introduce yourself your name only.`,
      });
      console.log(setup);
      setMessage((prev) => setup.response);
    }
    initChat();
  }, [persona]);

  // const handleClick = async () => {
  //   const res = await chain.call("Tell me a haiku about programming");
  //   console.log(res);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.chatMessage.value;
    const res = await chain.call({ input: message });
    console.log(res);
    setMessage((prev) => res.response);
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{persona && persona.name}</h1>
      <Container style={{ height: "400px", width: "200px" }}>
        {message}
      </Container>

      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group controlId="chatMessage">
          <Form.Label>Chat:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Talk to your persona"
            rows={3}
            style={{ width: "300px", height: "100px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      {/* <Button onClick={() => handleClick()}>Click me</Button> */}
    </Container>
  );
};

export default Persona;
