<script setup>

import { ref,reactive } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const titleClass = ref("estilo")

const mensaje = ref("Hola Mundo")
mensaje.value = "Hola cris"

const contador = reactive({ cuenta: 0 })
contador.cuenta = 69

function incrementar() {
  contador.cuenta++
}
</script>

<template>
    <h1>{{ mensaje }}</h1>
    <h1 :class="titleClass">Hazme Rojo</h1>
    <p>Cuenta es : {{ contador.cuenta }}</p>
    <button @click="incrementar">Cuenta is: {{ contador.cuenta }}</button>

</template>

<style scoped>
.estilo{
  color:red;
}
</style>
