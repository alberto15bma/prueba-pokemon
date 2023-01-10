import { ERROR_CAMPO_IMAGEN, ERROR_CAMPO_NOMBRE } from "./mensajes";

export const validarFrm = (obj) => {
  if(obj.name.length < 4) {
    alert(ERROR_CAMPO_NOMBRE);
    return false;
  }
  if (!validarURL(obj.image)) {
      alert(ERROR_CAMPO_IMAGEN);
      return false;
  }
  return true;
}


function validarURL(strUrl) {
  try {
    new URL(strUrl);
    return true;
  } catch (err) {
    return false;
  }
}