const SERVER = {
  host: "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon", // HOST DEL SERVIDOR
  puerto: "", // PUERTO DEL SERVIDOR
  sufijo: "",
  url: function (endpoint) {
    // FUNCION QUE RETORNA LA URL CON EL ENDPOINT ENVIADA COMO PARAMETRO
    return `${this.host}${this.sufijo}${endpoint}`;
  },
  consulta: function (ruta, parametros = null, method = "POST") {
    const opciones = {};
    const endpoint = this.url(ruta);
    const headers = {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    };
    opciones.method = method;
    opciones.headers = headers;
    opciones.body = parametros === null ? false : JSON.stringify(parametros);
    if (!opciones.body) delete opciones.body;
    return fetch(endpoint, opciones)
      .then((res) => {
        let result = {};
        result.data = res.ok
          ? res.json()
          : {
              error: true,
              estado: res.status || "00",
              mensaje: res.statusText || "Ocurrió un error",
            };
        result.status = res.status;
        return result;
         /* return res.ok
            ? res.json()
            : Promise.reject({
                error: true,
                estado: res.status || "00",
                mensaje: res.statusText || "Ocurrió un error",
              });*/
      }
       
      )
      .catch((err) => {
        return Promise.reject({
          error: true,
          estado: err.status || "00",
          mensaje: err.statusText || "Ocurrió un error",
        });
      });
  },
};

export default SERVER;
