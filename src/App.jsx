import { useState } from "react";
import "./App.css";
import Layout from "../Components/Layout";
import Resources from "/Components/Resources";

function App() {
  const [count, setCount] = useState(0);

  return <Layout></Layout>;
}

export default App;
