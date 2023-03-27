import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Card, Row, Form } from "react-bootstrap";
import "./App.css";

const url = "http://localhost:3001";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const msg = await fetch("/api/get");
    const newData = await msg.json();
    console.log(newData.msg);
    setData((prev) => newData);
  };

  const postData = async () => {
    const resp = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "Write me a haiku about the wind",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const msg = await resp.json();
    setData((prev) => msg);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Container>
        {data}
        <Button onClick={getData} className="btn">
          Get
        </Button>
        <Button onClick={postData} className="btn">
          Post
        </Button>
      </Container>
    </div>
  );
}

export default App;
