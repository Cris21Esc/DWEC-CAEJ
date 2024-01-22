<script setup>
import { ref, computed, watch } from 'vue'

let largo = ref(0);
let alto = ref(0);
let ancho = ref(0);

function limpiar(){
  largo.value = 0;
  alto.value = 0;
  ancho.value = 0;
}

const perimetro = computed(() => (2*largo.value) + (2*alto.value));
const area = computed(() => largo.value * ancho.value);
const volumen = computed(() => ancho.value * largo.value * alto.value);

watch(alto,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    alto.value = antiguoValor;
  }
});
watch(ancho,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    ancho.value = antiguoValor;
  }
});
watch(largo,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    largo.value = antiguoValor;
  }
});

</script>
 <template>
  <header>Calculo del Area y el Perímetro</header>
    <form>
      <label>Largo
        <input v-model="largo"></label>
      <label>Altura
        <input v-model="alto">
      </label>
      <label>Ancho
        <input v-model="ancho">
      </label>
    </form>
    <p> Area : {{ area }}</p>
    <p> Perimetro: {{ perimetro }}</p>
    <p> Volumen: {{ volumen }}</p>
 </template>
