import { useParams } from "react-router";
import { resources } from "../../Arbeidskrav 2/ressurser";

export default function PageTitle() {
  // Bruker useParams() for å hente ut parameterne
  const { category } = useParams();

  // Bruker .filter() for å filtrere gjennom resources for at kategoriene skal være lik som den som har blitt trykket på
  const filterResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <>
      {filterResources.map((resource, index) => (
        <head key={index}>
          <title>{resource.category}</title>
        </head>
      ))}
    </>
  );
}
