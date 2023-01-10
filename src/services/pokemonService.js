import SERVER from "../sistema/server";

/**
 * Metodo que obtiene todos los pokemons
 *
 * @author Alberto Arias
 * @version 1.0
 * @since 09/01/2023
 */
const getPokomons = async () => {
  let res = [];
  try {
    res = await SERVER.consulta("?idAuthor=1", null, "GET");
  } catch (error) {
    res = [];
  }
  return res.data;
};
/**
 * Metodo que consulta por pokemon
 *
 * @author Alberto Arias
 * @version 1.0
 * @since 09/01/2023
 */
const getPokomon = async (id) => {
  let res = null;
  try {
    res = await SERVER.consulta(`/${id}`, null, "GET");
    if (res.success === false) return null;
  } catch (error) {
    res = null;
  }
  return res.data;
};
/**
 * Metodo que crea un pokemon
 *
 * @author Alberto Arias
 * @version 1.0
 * @since 09/01/2023
 */
const crearPokemon = async (obj) => {
 // obj.idAuthor = obj.id_author;
  let res = null;
  try {
    res = await SERVER.consulta("?idAuthor=1", obj, "POST");
    if (res.success === false) return null;
  } catch (error) {
    res = null;
  }
  return res.data;
};
/**
 * Metodo que edita un pokemon
 *
 * @author Alberto Arias
 * @version 1.0
 * @since 09/01/2023
 */
const editarPokemon = async (obj) => {
  //obj.idAuthor = obj.id_author;
  let res = null;
  try {
    res = await SERVER.consulta(`/${obj.id}`, obj, "PUT");
    if (res.success === false) return null;
  } catch (error) {
    res = null;
  }
  return res.data;
};
/**
 * Metodo que elimina un pokemon
 *
 * @author Alberto Arias
 * @version 1.0
 * @since 09/01/2023
 */
const eliminarPokemon = async (id) => {
  let res = null;
  try {
    res = await SERVER.consulta(`/${id}`, null, "DELETE");
    if (res.status === 200) return {};
  } catch (error) {
    res = null;
  }
  return res;
};

export {
  getPokomons,
  getPokomon,
  crearPokemon,
  editarPokemon,
  eliminarPokemon,
};
