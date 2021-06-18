import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/view/Home.view';
import About from '@/view/About.view';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    }, {
        name: 'About',
        path: '/About',
        component: 'About'
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
}
)