import { useEffect, useState } from "react";
import { getPersonas } from "./api";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const PersonaList = () => {
  const [personas, setPersonas] = useState([]);

  const handleClick = async () => {
    const resp = await getPersonas();
    setPersonas((prev) => resp);
  };
  useEffect(() => {
    console.log(personas);
  }, [personas]);

  return (
    <Container>
      <div style={{ height: "250px", width: "400px" }}>
        {personas.length > 0 ? (
          personas.map((persona) => {
            return (
              <h2
                style={{
                  height: "75px",
                  width: "200px",
                  color: "white",
                }}
                key={persona.id}
              >
                <Link to={`/personas/${persona.id}`}>{persona.name}</Link>
              </h2>
            );
          })
        ) : (
          <div>No Personas</div>
        )}
      </div>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        List personas
      </Button>
    </Container>
  );
};

export default PersonaList;
