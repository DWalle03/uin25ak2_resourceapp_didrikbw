import { Link } from "react-router-dom";
import { resources } from "../../Arbeidskrav 2/ressurser";
import "../assets/styles/nav.scss";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="HTML" className="navButtons">
          HTML
        </Link>
        <Link to="CSS" className="navButtons">
          CSS
        </Link>
        <Link to="Javascript" className="navButtons">
          Javascript
        </Link>
        <Link to="React" className="navButtons">
          React
        </Link>
        <Link to="Sanity" className="navButtons">
          Sanity and headless CMS
        </Link>
      </nav>
    </header>
  );
}
