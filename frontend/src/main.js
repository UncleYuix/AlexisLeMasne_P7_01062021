import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ça c'est nouveau
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



 // not recommanded ? window.axios = require('axios'); 

createApp(App).use(router).mount("#app"); // ça c'est nouveau avant y'avait pas le .use(router)




