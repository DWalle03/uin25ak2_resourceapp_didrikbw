import "../assets/styles/layout.scss";

export default function Layout() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button id="HTML">HTML</button>
          </li>
          <li>
            <button id="CSS">CSS</button>
          </li>
          <li>
            <button id="JavaScript">Javascript</button>
          </li>
          <li>
            <button id="React">React</button>
          </li>
          <li>
            <button id="Sanity">Sanity and headless CMS</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
