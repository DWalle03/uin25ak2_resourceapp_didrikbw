import { Link } from "react-router-dom";
import { resources } from "../../Arbeidskrav 2/ressurser";
import "../assets/styles/nav.scss";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="html" className="navButtons">
          HTML
        </Link>
        <Link to="css" className="navButtons">
          CSS
        </Link>
        <Link to="javascript" className="navButtons">
          Javascript
        </Link>
        <Link to="react" className="navButtons">
          React
        </Link>
        <Link to="sanity" className="navButtons">
          Sanity and headless CMS
        </Link>
      </nav>
    </header>
  );
}
