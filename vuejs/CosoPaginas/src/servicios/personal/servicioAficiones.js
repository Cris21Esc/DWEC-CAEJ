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
}

export default new servicioAficiones();
