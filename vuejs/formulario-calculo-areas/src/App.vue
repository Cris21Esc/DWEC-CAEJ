<script setup>
import { ref, computed, watch } from 'vue'

let base = ref("");
let altura = ref("");

function limpiar(){
  base.value = "";
  altura.value = "";
}

const area = computed(() => base.value * altura.value);
const perimetro = computed(() => (2*base.value) + (2*altura.value));

</script>
 <template>
  <header>Calculo del Area y el Perímetro</header>
    <form>
      <label>Base
        <input v-model="base"></label>
      <label>Altura
        <input v-model="altura">
      </label>
    </form>
    <p> Area : {{ area }}</p>
    <p> Perimetro: {{ perimetro }}</p>
 </template>
