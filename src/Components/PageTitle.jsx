import { useParams } from "react-router";
import { resources } from "../../Arbeidskrav 2/ressurser";
import { Helmet } from "react-helmet";

export default function PageTitle() {
  // Bruker useParams() for å hente ut parameterne
  const { category } = useParams();

  // Bruker .filter() for å filtrere gjennom resources for at kategoriene skal være lik som den som har blitt trykket på
  const filterResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <>
      {/* Bruker filterResource.map for å hente ut title string fra ressurser.js */}
      {filterResource.map((title, index) => (
        <Helmet key={index}>
          <title>{title.category}</title>
        </Helmet>
      ))}
    </>
  );
  {
    /* Importerte react-Helmet for å ikke få error i konsollen etter å sette PageTitle inn i app.jsx */
  }
}
