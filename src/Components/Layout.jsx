import "../assets/styles/layout.scss";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {/* Refererer til Nav komponentet som viser ressursene ifra ressurser.js fila */}
      <main>{children}</main>
    </>
  );
}
