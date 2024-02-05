import { NavBar } from "./Components/Nav/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Routes/Home";
import { About } from "./Routes/About";
import { Contact } from "./Routes/Contact";

export default function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}
