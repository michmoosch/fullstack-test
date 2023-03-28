import { useEffect, useState } from "react";
import { getEmbed, insert } from "./components/api";
import axios from "axios";
import {
  Button,
  Container,
  Card,
  Row,
  Form,
  FormControl,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const msg = await fetch("/api/get");
    const newData = await msg.text();
    setData((prev) => newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.avatarName.value;
    const description = e.target.personaDescription.value;
    const obj = await insert(name, description);
    console.log(obj);
  };

  useEffect(() => {}, []);

  return (
    <Container style={shell}>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={form}
      >
        <Form.Group style={group} controlId="avatarName">
          <Form.Label>Name your persona</Form.Label>
          <Form.Control type="text" placeholder="Your name or something" />
        </Form.Group>
        <Form.Group style={group} controlId="personaDescription">
          <Form.Label>Describe your persona:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Use as many details as you can"
            rows={3}
            style={{ width: "300px", height: "100px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Generate Persona
        </Button>
      </Form>
      {/* <Button onClick={getData} className="btn">
      Get
    </Button>
    <Button onClick={postData} className="btn">
      Post
    </Button> */}
    </Container>
  );
}

export default App;

const shell = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const form = {
  height: "50vh",
  width: "50vh",
};

const group = {
  height: "200px",
  width: "100%",
};

// const postData = async () => {
//   const resp = await fetch("/api/post", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "Write me a haiku about the wind",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   const msg = await resp.json();
//   const j = JSON.parse(msg);
//   console.log(j);

//   // setData((prev) => msg);
// };
