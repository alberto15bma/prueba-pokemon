import { useRoutes } from "react-router-dom";
import FormularioPokemon from "../components/FormularioPokemon";

const Rutas = () => {
  let routes = useRoutes([
    { path: "agregar",    element: <FormularioPokemon /> },
    { path: "editar/:id", element: <FormularioPokemon /> },
  ]);
  return routes;
};

export default Rutas;