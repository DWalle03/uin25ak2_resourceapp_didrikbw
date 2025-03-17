import "./App.css";
import Layout from "./Components/Layout";
import PageTitle from "./Components/PageTitle";
import Resources from "./Components/Resources";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <Layout>
        {/* Layout komponent som wrapper rutene */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Resources /> {/* Komponent som viser Resources */}
                <Navigate to="/HTML" />
                {/* Sporer tilbake til "/html" altså "Home" */}
              </>
            }
          />
          <Route
            path=":category"
            element={
              <>
                <Resources /> <PageTitle />{" "}
                {/* Komponent som viser PageTitle */}
              </>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
