<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones";
import { ref, onMounted ,reactive } from "vue";

// #############################################################
// ################ VARIABLES A UTILIZAR

let aficiones = ref(null)
let imagenUrl = ref("https://phantom-marca.unidadeditorial.es/3a77955e216ac29d0098cb1b5fc5e8fb/resize/828/f/jpg/assets/multimedia/imagenes/2024/01/27/17063840534486.jpg")

let id = ref("");
let filtro = ref("");
let descripcion = ref("");

let nuevaAficion=reactive({
    nombre:"",
    descripcion:"",
    url:""
})

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
function limpiar(){
    nuevaAficion.nombre="";
    nuevaAficion.descripcion="";
    nuevaAficion.url="";
}

function crearElemento(){
    if(nuevaAficion.nombre!==""&&nuevaAficion.descripcion!==""){ 
      servicioAficiones
        .post(nuevaAficion)
        .then(res=>{
             //aficiones.value.push(JSON.parse(res));
            alert(`Elemento ${nuevaAficion.nombre} añadido`);
            obtenerAficiones();
            limpiar();
            console.log(nuevaAficion)
        })
        .catch(error=>{
            alert(`Error añadiendo elemetno ${error}`);
        }) 

    }else alert("El nombre y la descripcion no puede estar vacío");
}

function buscar(){
  if(filtro.value == ""){
    alert("valor en blanco");
    return false;
  }

  console.log(filtro.value);
  servicioAficiones
    .findByNombre(filtro.value)
    .then(response => {  
      console.log(response.data);
      aficiones.value = response.data;    
    })
    .catch((error) => {
      console.log(error);
    });
}

  function actualizar(){
    alert("Pendiente de implementar");
  }


// #############################################################
// ################ MONTADO DEL COMPONENTE
onMounted(() => {
  obtenerAficiones();
});
</script>
<template>
  <h2>Lista de aficiones</h2>
  <form>
    <h1>Nombre</h1>
    <input type="text" v-model="filtro">
    <button @click.prevent="buscar">Buscar</button>
  </form>
  <form>
    <h1>Actualizar</h1>
    <input type="text" v-model="id">
    <input type="text" v-model="descripcion">
    <button @click.prevent="actualizar"></button>
  </form>
  <ul>
    <li v-for="(aficion, id) in aficiones" :key="id" @dblclick="mostrarInfo(aficion)">
      <span class="li-nombre"> {{ aficion.nombre }} </span>
      <span class="li-descripcion"> {{ aficion.descripcion }} </span>

      <button @click="borrarAficion(aficion)"> X </button>


    </li>
  </ul>
  <img :src="imagenUrl" />
  <form>
    Nombre <input type="text" v-model="nuevaAficion.nombre"><br />
    Descripción <input type="text" v-model="nuevaAficion.descripcion"><br />
    Url (opcional)<input type="text" v-model="nuevaAficion.url"><br />
    <button @click.prevent="crearElemento">Añadir</button> 
  </form>
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