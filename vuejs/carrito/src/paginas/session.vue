<script setup>
import { ref, onMounted ,reactive } from "vue";
import VueCryptojs from 'crypto-js';
import servicioAficiones from "../servicios/personal/servicioAficiones";

let nombre=ref("");

let pass=ref("");

function guardar(){

  localStorage.setItem('nombre',nombre.value);

  if (pass.value) {
    let hash = VueCryptojs.SHA256(pass.value).toString();
    console.log(hash);
  } else {
    console.error("La contraseña no puede ser nula o indefinida");
  }
  let userhash= VueCryptojs.SHA256(nombre.value).toString();
  console.log(userhash);

}

function acceder(){
  usuario.value
  pass.value
  let token=""; //ENCRIPTA USUARIO Y PASSWORD es un token unico de usuario y contraseña

  servicioAficiones.getUsuarios(token).then
  //Si existe en personal, localstorage
}


</script>

<template>
  <h2>Inicio de sesion</h2>
  <form>
   
    <input type="text" name="nombre" v-model="nombre">
    <input type="password" name="pass" v-model="pass">

    <button @click.prevent="guardar()">log in</button> 
  </form>

</template>

<style>
  h2 {
    text-align: center;
    color: #333;
  }

  form {
    max-width: 300px;
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    background-color:darkred;
    color: white;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: darkseagreen;

    
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>