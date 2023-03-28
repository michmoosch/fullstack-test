import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={container}>
      <Link to="/">Home </Link>
      <Link to="/personas">Personas </Link>
    </div>
  );
};

const container = {
  height: "12vh",
  minHeight: "75px",
  width: "100%",
  minWidth: "100vw",
  display: "flex",
  flexDirection: "row",
};

export default Navbar;
