import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import session from "@/paginas/session.vue";


const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        {   path: '/', 
            name:'inicio',
            component: paginaInicio
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar
        },
        {   path: '/session', 
        name:'session',
        component: session
    }, 
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;