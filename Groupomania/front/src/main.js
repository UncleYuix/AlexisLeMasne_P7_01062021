import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";



// Déclaration globales de composants
import MessageRouter from "./components/MessageRouter.vue";
import FormInput from "./components/FormInput.vue";
import FormInputSettings from "./components/FormInputSettings.vue";
import Header from './components/Header.vue'
import PostWall from './components/PostWall.vue'
import Commentaries from './components/Commentaries.vue'
import Footer from './components/Footer.vue'



axios.defaults.baseURL = "http://localhost:3000/api/";
const token = sessionStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
// Permet d'accéder globalement à axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

// Permet d'enregistrer un composant globalement
Vue.component("MessageRouter", MessageRouter);
Vue.component("FormInput", FormInput);
Vue.component("FormInputSettings", FormInputSettings);
Vue.component("Header", Header);
Vue.component("PostWall", PostWall);
Vue.component("Commentaries", Commentaries);
Vue.component("Footer", Footer);



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
