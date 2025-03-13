import "./App.css";
import Layout from "./Components/Layout";
import Resources from "./Components/Resources";
import Pagetitle from "./Components/PageTitle";
import PageTitle from "./Components/PageTitle";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <Pagetitle /> {/* Komponent som viser PageTitle */}
      <Layout>
        {/* Layout komponent som wrapper rutene */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Resources /> {/* Komponent som viser Resources */}
                <Navigate to="/html" />
                {/* Sporer tilbake til "/html" altså "Home" */}
              </>
            }
          />
          <Route
            path=":category"
            element={
              <>
                <Resources /> <PageTitle />
              </>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
