import { testConnection } from "./components/api";
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  // const [test, setTest] = useState("Failed")
  // useEffect(async () => {
  //   const msg = await testConnection();
  //   console.log(msg)
  //   setTest(prev => msg)
  // }, [])

  return (
    <div style={{height: "100px", width: "100px"}}><button onClick={testConnection}></button></div>
  );
}

export default App;
