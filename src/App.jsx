import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Resources from "./Components/Resources";
import Nav from "./Components/Nav";
import Pagetitle from "./Components/PageTitle";
import { BrowserRouter as Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("html");

  return (
    <Layout>
      <Pagetitle />
      <Routes>
        <Route path="/html" element={<Resources category={"html"} />} />
        <Route path="/css" element={<Resources category={"css"} />} />
        <Route
          path="/javascript"
          element={<Resources category={"javascript"} />}
        />
        <Route path="/react" element={<Resources category={"react"} />} />
        <Route path="/sanity" element={<Resources category={"sanity"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
