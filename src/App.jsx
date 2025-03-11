import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Layout>
  );
}

export default App;
