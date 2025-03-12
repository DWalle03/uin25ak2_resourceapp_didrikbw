import "../assets/styles/layout.scss";
import "../assets/styles/resources.scss";
import "../assets/styles/nav.scss";
import Nav from "./Nav";
import Resources from "./Resources";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Resources />
      </main>
    </>
  );
}
