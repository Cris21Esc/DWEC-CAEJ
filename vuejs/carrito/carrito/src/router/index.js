import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import session from "@/paginas/session.vue";


const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        {   path: '/', 
            name:'inicio',
            component: paginaInicio,
            beforeEnter:(to, from,next)=>{
                let usuario=localStorage.getItem('usuario');
                if(usuario!==null){
                    next();

                }else{
                    next('/session')
                }
            }
       
       
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar,
            beforeEnter:(to, from,next)=>{
                let usuario=localStorage.getItem('usuario');
                if(usuario!==null){
                    next();

                }else{
                    next('/session')
                }
            }
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