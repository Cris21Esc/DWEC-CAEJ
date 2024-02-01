<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones";
import { ref, onMounted } from "vue";

// #############################################################
// ################ VARIABLES A UTILIZAR

let aficiones = ref(null)
let imagenUrl = ref("https://phantom-marca.unidadeditorial.es/3a77955e216ac29d0098cb1b5fc5e8fb/resize/828/f/jpg/assets/multimedia/imagenes/2024/01/27/17063840534486.jpg")

// #############################################################
// ################ FUNCIONES DE GESTIÓN DE SERVIVIOS

function obtenerAficiones() {
  servicioAficiones
    .getAll()
    .then((response) => {
      aficiones.value = response.data;
      console.log(aficiones.value)
    })
    .catch((error) => {
      console.log(error);
    });


}
function mostrarInfo(aficion) {
  console.log(aficion.url)
  imagenUrl.value = aficion.url
}

function borrarAficion(aficion) {

  if (confirm("Desea Borrar la aficion")) {

    //PASO 2 : Enviar petición axios de borrado(DELETE)
    servicioAficiones
      .delete(aficion.id)
      .then((response) => {
        //PASO 1 : Borrar elemento del array

        aficiones.value = aficiones.value.filter(
          (e) => e.id !== aficion.id
        )
        alert("Elemento borrado correctamente")
      })
      .catch((error) => {
        alert("Problema de conexión");
      });


  }

}

// #############################################################
// ################ MONTADO DEL COMPONENTE
onMounted(() => {
  obtenerAficiones();
});
</script>
<template>
  <h2>Lista de aficiones</h2>
  <ul>
    <li v-for="(aficion, id) in aficiones" :key="id" @dblclick="mostrarInfo(aficion)">
      <span class="li-nombre"> {{ aficion.nombre }} </span>
      <span class="li-descripcion"> {{ aficion.descripcion }} </span>

      <button @click="borrarAficion(aficion)"> X </button>

    </li>
  </ul>
  <form>
    <label>Nombre
      <input type="text">
    </label><br>
    <label>Descripcion
      <input type="text">
    </label><br>Imagen
    <label>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg" />
    </label><br>
  </form>
  <img :src="imagenUrl" />
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

ul {
  list-style-type: none;
}

ul li {
  background-position: 0px 5px;
  background-repeat: no-repeat;
  padding-left: 20px;
}

ul li span.li-nombre {
  display: block;
  width: 30%;
  float: left;
  background-color: lightslategray;
  text-align: center;
}

ul li span.li-descripcion {
  display: block;
  width: 60%;
  float: left;
  text-align: right;
  background-color: lightgray;
  margin-bottom: 1vh;
}

@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC");

h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 5vw;
  background-color: lightblue;
  margin: 3vh;
}

ul::after {
  content: "";
  clear: both;
  display: table;
}

button {
  padding: 0.375rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: black;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

button:hover,
button:active,
button:focus {
  color: #fff;
  background-color: black;
}
</style>