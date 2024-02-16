<script setup>
import { ref, onMounted ,reactive } from "vue";
import VueCryptojs from 'crypto-js';
import servicioAficiones from "../servicios/personal/servicioAficiones";

//Importar
import { useRouter } from "vue-router";

// Utilizamos enrutamiento
const rutas = useRouter()

let usuario = ref("");
let contrasenia = ref("");

//Funcion de Iniciar

function iniciar() {

    if (usuario !== "" && contrasenia !== "") {


        servicioAficiones.findByUsuario(window.btoa(usuario.value))
            .then((response) => {

                if (response.data.length === 0) {
                    alert("el usuario no existe")
                    localStorage.setItem("usuario", null)
                }
                else {
                    localStorage.setItem("usuario", usuario.value)

                    //Recargar Página
                    //Opción 1:  
                    //location.reload();

                    //Opción 2: 
                    rutas.go();


                }
                // console.log(response.data.length)
                //     alert("usuario correcto")

            })
            .catch((error) => {
                alert("usuario incorrecto")
                //console.log(error);
            })

    }
}
</script>

<template>
 <form action="">
        <!-- Nombre -->
        <label for=""> Usuario:
            <br>
            <input type="text" v-model="usuario" placeholder="MarIa_97">
        </label>

        <br>
        <br>
        <!-- Contraseña de 6 o más caracteres-->
        <label> Contraseña
            <br>
            <input type="password" v-model="contrasenia" pattern=".{6,}" placeholder="jl_78Y2_JG">
        </label>
        <br><br>
        <button @click.prevent="iniciar()">Iniciar</button>

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