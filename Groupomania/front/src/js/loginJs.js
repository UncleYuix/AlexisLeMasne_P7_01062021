export default {
    data() {
      return {
        email: "",
        password: "",
        messageConnection: null,
        userId: "",
      };
    },
    methods: {
      connection(e) {
        e.preventDefault();
        this.$axios
          .post("/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            sessionStorage.setItem("token", response.data.token),
              localStorage.setItem(
                "name",
                response.data.user.firstName + "_" + response.data.user.lastName
              ),
              (this.messageConnection = response.data.message),
              (this.$axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.token),
              setTimeout(
                function() {
                  this.$router.push({ name: "Posts" });
                }.bind(this),
                2000
              );
          })
          .catch((error) => {
            if (error.response.status === 429) {
              this.messageConnection = error.response.data;
            } else {
              this.messageConnection = "Invalid username!";
            }
          });
      },
    },
    mounted() {
      sessionStorage.removeItem("token");
      localStorage.removeItem("name");
    },
  };