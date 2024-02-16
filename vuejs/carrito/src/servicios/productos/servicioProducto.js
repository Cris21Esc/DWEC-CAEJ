import http from "./http-axios";

class servicioProducto {
  getAll() {
    return http.get("/productos");
  }

  get(id) {
    return http.get(`/productos/${id}`);
  }

  create(data) {
    return http.post("/productos", data);
  }

  update(id, data) {
    return http.put(`/productos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/productos/${id}`);
  }

  /*
    Buscar los producto con el nombre completo especificado
  */
  findByNombre(nombre) {
    return http.get(`/productos?nombre=${nombre}`);
  }
  /*
    Buscar un producto si contiene el texto en alguno de los campos
  */
  findByGeneral(texto) {
    return http.get(`/productos?q=${texto}`);
  }
}

export default new servicioProducto();
