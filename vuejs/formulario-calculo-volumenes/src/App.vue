<script setup>
import { ref, computed, watch, reactive } from 'vue'

let largo = ref(0);
let alto = ref(0);
let ancho = ref(0);

function limpiar(){
  largo.value = 0;
  alto.value = 0;
  ancho.value = 0;
}

const mensaje = reactive({
mensaje_alto: "",
mensaje_ancho: "",
mensaje_largo: ""
});

let mostrar = false;

const perimetro = computed(() =>{
  if(largo.value != 0){
    mostrar=true;
  }else{
    mostrar = false;
  }
  return (2*largo.value) + (2*alto.value);
});
const area = computed(() =>{
  if(area.value != 0){
    mostrar=true;
  }else{
    mostrar = false;
  }
  return largo.value * ancho.value;
});
const volumen = computed(() => {  
  if(ancho.value != 0){
    mostrar=true;
  }else{
    mostrar = false;
  }
  return ancho.value * largo.value * alto.value;
});

watch(alto,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    alto.value = antiguoValor;
    mensaje.mensaje_alto = `${nuevoValor} No es un numero`;
  }
});
watch(ancho,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    ancho.value = antiguoValor;
    mensaje.mensaje_ancho = `${nuevoValor} No es un numero`;
  }
});
watch(largo,(nuevoValor,antiguoValor)=>{
  if(isNaN(nuevoValor)){
    largo.value = antiguoValor;
    mensaje.mensaje_largo = `${nuevoValor} No es un numero`;
  }
});

</script>
 <template>
  <header>Calculo del Area y el Perímetro</header>
    <form>
      <label>Largo
        <input v-model="largo"></label>
        <span style="color: red;"> {{ mensaje.mensaje_largo }}</span>
      <label>Altura
        <input v-model="alto">
        <span style="color: red;"> {{ mensaje.mensaje_alto }}</span>
      </label>
      <label>Ancho
        <input v-model="ancho">
        <span style="color: red;"> {{ mensaje.mensaje_ancho }}</span>
      </label>
    </form>
    <div v-show="mostrar">
      <p> Area : {{ area }}</p>
      <p> Perimetro: {{ perimetro }}</p>
      <p> Volumen: {{ volumen }}</p>
    </div>    
 </template>
