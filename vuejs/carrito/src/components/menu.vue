<script setup>
import { RouterLink} from 'vue-router';
import { onMounted, ref } from 'vue';

const props = defineProps({
    "titulo":String,
    "links":Array,
})
const user = localStorage.getItem('nombre');

const nombre=ref("");

onMounted(()=>{
    nombre.value=`${user}`;
})


</script>

<template>
    <!-- <h1> {{ titulo }}</h1> -->
    <p id="user" name="user">{{ nombre }}</p>
    <nav>
        <RouterLink
         v-for="enlace in props.links"
         :key="enlace"
         :to="{ name: enlace }">
           <span class="enlace-menu"> {{ enlace }} </span>
        </RouterLink>        
    </nav>
</template>

<style scoped>

span.enlace-menu{
    display:inline-block;
    width:33%;
    padding:5px 10px;
    background-color:#000;
    border:1px solid #000;
    text-align:center;
    color:#fff;    
}
span.enlace-menu:hover{
    background-color:#fff;
    color:#000;
}
nav{
    margin-bottom: 2vh;
}
.user{
    float: right;
}

</style>