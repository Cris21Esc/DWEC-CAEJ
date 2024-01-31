<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones"
import { onMounted, ref } from "vue";

    let aficiones = ref(null);
    let imagenCambio = ref("https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D")

    function obtenerAficiones(){
        servicioAficiones
        .getAll()
        .then((response) => {
            console.log(response.data)
            aficiones.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onMounted(()=> obtenerAficiones());

    function funcionAficion(aficion){
        console.log(aficion.nombre);
        imagenCambio.value = aficion.url;
    }
</script>
<template>
    <div>
        <ul>
            <li v-for="(aficion,id) in aficiones" :key="id">
                <span @click="funcionAficion(aficion)">{{ aficion.nombre }}</span>
            </li>
        </ul>
        <img  :src="imagenCambio">
    </div>
</template>