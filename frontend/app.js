const app = Vue.createApp({
    data() {
        return {
            showLogin: true,
         }
    },
    methods: {
        toggleShowLogin() {
            console.log('Le petit test de consol'),
        this.showLogin = !this.showLogin
        }
    }

})

app.mount('#app')