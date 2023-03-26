import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Card, Row, Form } from "react-bootstrap";
import "./App.css";

const url = "http://localhost:3001";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    console.log("Fetching");
    const msg = await fetch(url + "/");
    const newData = await msg.json();
    setData((prev) => newData);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Container>
        {data}
        <Button onClick={getData} className="btn">
          Get
        </Button>
      </Container>
    </div>
  );
}

export default App;
