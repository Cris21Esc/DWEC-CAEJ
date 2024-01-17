<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}

// give each todo a unique id
let id = 0

var dni = ref('');
var text = ref('');
const todos = ref([
  { id: id++, dni: "012345674A", text: 'Paco' },
  { id: id++, dni: "987654321B", text: 'Pepe' },
  { id: id++, dni: "564621322X", text: 'Perro' },
  { id: id++, dni: "564621322X", text: 'Sanxe' }
]);

function addTodo() {
  if(dni.value !== "" && text.value !== ""){
    todos.value.push({ id: id++, dni: dni.value, text: text.value})
    dni.value = "";
    text.value = "";
  }else{
    alert("Debes completar todos los valores");
  }
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
function cleanTodo(){
  todos = ref([]);
}

import Inicio from './components/Inicio.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Inicio msg="Página de Inicio" />
    </div>
  </header>  
                        
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <form @submit.prevent="addTodo">
    <label>Dni
      <input v-model="dni">
    </label>
    <label>Nombre
      <input v-model="text">
    </label>    

    <button>Add Todo</button>  
  </form>
  <button @click="cleanTodo">Borrar Inputs</button>  
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

</template>
<style scoped>
input{
  display: block;
}
</style>

<!--<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>-->
