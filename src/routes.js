
import Home from './components/home/Home.vue'
import Busca from './components/busca/Busca.vue'
import Erro404 from './components/erro/Erro404.vue'

export const routes =[
    { path: '', name: 'home', component: Home },
    { path: '/busca/:id', name: 'busca', component: Busca },
    { path: '/erro404', name: 'erro404', component: Erro404 }
];