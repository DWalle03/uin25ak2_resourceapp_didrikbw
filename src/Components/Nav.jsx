import { NavLink } from "react-router";
import { resources } from "../../Arbeidskrav 2/ressurser";
import "../assets/styles/nav.scss";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          {/* Mapper ut Resources, henter med resource og sender med en key={index} */}
          {resources.map((resource, index) => (
            <li key={index}>
              {/* Bruker NavLink som en kobling til de andre sidene */}
              <NavLink to={`/${resource.category}`} className="navLink">
                {resource.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
