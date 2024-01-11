import { Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";

export default function App() {
  return (
    <>
      <h1>Mapeo</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}
