import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import Resources from "./Components/Resources";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/html" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;
