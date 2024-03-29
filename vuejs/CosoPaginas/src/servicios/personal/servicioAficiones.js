import http from "./http-axios";

class servicioAficiones {
  getAll() {
    return http.get("/aficiones");
  }
  get(id) {
    return http.get(`/aficiones/${id}`);
  }

  delete(id) {
    return http.delete(`/aficiones/${id}`);
  }

  post(data){
    return http.post(`/aficiones`,data)
  }
  findByNombre(nombre) {
    return http.get(`/aficiones?nombre=${nombre}`);
  }
  update(id,cambios){
    return http.put(`/aficiones/${id}`,cambios)
  }
  findByGeneral(busqueda){
    console.log(http.get(`/aficiones/${busqueda}`));
  }
}

export default new servicioAficiones();
