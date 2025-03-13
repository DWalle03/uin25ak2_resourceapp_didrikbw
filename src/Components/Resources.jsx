import "../assets/styles/layout.scss";
import "../assets/styles/resources.scss";
import { resources } from "../../Arbeidskrav 2/ressurser";
import { useParams } from "react-router";

export default function Resources() {
  // Bruker useParams() for å hente ut parameterne
  const { category } = useParams();

  // Bruker .filter() for å filtrere gjennom resources for at kategoriene skal være lik som den som har blitt trykket på
  const filterResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section>
      {/* Filtrerer ut Resources og mapper ut resource */}
      {filterResources.map((resource, index) => (
        <article key={index}>
          <ul>
            {/* Mapper ut sources fra resource og legger med url og title, target="_blank" sørger for at lenken åpnes i en ny fane */}
            {resource.sources.map((source, idx) => (
              <li key={idx}>
                <a href={source.url} target="_blank">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
