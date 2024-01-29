<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones"
import { onMounted, ref } from "vue";

    let aficiones = ref(null);

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
</script>
<template>
    <div>
        <ul>
            <li v-for="(aficion,id) in aficiones" :key="id">
                {{ aficion.nombre }}
                <img :src="aficion.url">
            </li>
        </ul>
    </div>
</template>