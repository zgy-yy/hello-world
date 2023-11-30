import {createRouter, createWebHashHistory} from "vue-router";
import EcmaScript from "../views/EcmaScript.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: EcmaScript
        }
    ]
})

export default router
