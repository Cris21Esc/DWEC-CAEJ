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

  update(id, data) {
    return http.put(`/aficiones/${id}`, data);
  }
  postUsuario(clave){
    return http.post("/Usuarios",clave);
  }

  getUsuarios(){
    return http.get(`/usuarios`);
  }
  
  findByUsuario(clave){
    return http.get(`/usuarios/?clave=${clave}`);
  }

  

}

export default new servicioAficiones();
