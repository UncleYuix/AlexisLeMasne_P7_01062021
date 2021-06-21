import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // ça c'est nouveau

createApp(App).use(router).mount("#app"); // ça c'est nouveau avant y'avait pas le .use(router)
