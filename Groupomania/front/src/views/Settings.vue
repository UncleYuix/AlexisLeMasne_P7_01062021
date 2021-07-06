<template>
  <div class="big-height pb-5">
    <Header/>

    <div class="text-light container bg-info">
      <div class="row">

<!-- Partie gauche de la vue account settings -->
        <Navigator isActive="1"></Navigator>


        <!-- Partie droite de la vue account settings -->
        <div class="col-9 p-3 d-flex flex-column">
          <!-- Le titre -->
          <div class="w-100">
            <h2 class="mr-auto"><u>Mon compte :</u></h2>
            <hr/>
          </div>

          <!-- Tout ce qui est relatif à la modification de données personnelles -->
          <div class="right-side">
            <form class="form-user">
              <p> Votre Prenom:</p>
              <p><span>{{ userFirstName }}</span></p>
              <FormInputSettings idLinked="FirstName" 
                                v-model="firstName"
                                placeholder="Votre nouveau prenom">

              </FormInputSettings>

              <p> Votre nom:</p>
              <p><span>{{ userLastName }}</span></p>
              <FormInputSettings idLinked="LastName" 
                                v-model="lastName"
                                placeholder="Votre nouveau nom">
              </FormInputSettings>

              <p>Votre email:</p>
              <p><span>{{ userEmail }}</span></p>
              <FormInputSettings idLinked="Email" 
                                v-model="email"
                                placeholder="votre nouvel email"
                                patternLinked="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}">
              </FormInputSettings>

              <p>Votre mot de passe:</p>   
              <FormInputSettings idLinked="Password" 
                                v-model="password"
                                placeholder="Votre nouveau password"
                                required
                                patternLinked="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
              </FormInputSettings>
 
              <FormInputSettings idLinked="Password2" 
                                v-model="password2"
                                placeholder="Confirmation du password"
                                required>
              </FormInputSettings>
            </form>

            <div class="m-auto">
              <div class="d-flex flex-column align-items-center">
                <label for="confirmUpdate"> confirmation password </label>
                <input class="mb-2" 
                       placeholder="Votre password" 
                       required 
                       v-model="actualPassword"
                       type="password"/>
                <button class="btn btn-dark mb-3 mx-auto"
                        @click="uploadUser">
                  Confirmer
                </button>
              </div>

              <p v-if="message!==''"
                class="text-danger">
                {{ message }}
              </p>

              <p v-if="messageOk!==''"
                class="text-success">
                {{ messageOk }}
              </p>
            </div>
          </div>

          <!-- Ici c'est la suppression du compte -->
          <hr/>
          <div class="mx-auto my-2">
            <button v-if="messageDelete===''"
                    class="btn btn-dark mb-4"
                    @click="deleteUser">
              Supprimer mon compte
            </button>

            <p class="auto bold">
              Toutes vos données (messages, photos, commentaires, informations seront supprimées)
            </p>
            <p class=mx-auto> Conformement à la réglementation en vigueur.
              </p>

            <p v-if="messageDelete!==''"
                class="text-success">
                {{ messageDelete }}
              </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      actualPassword: "",
      password: "",
      password2: "",
      userId: Number,
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      message:"",
      messageOk: "",
      messageDelete: ""
    }
  },
  created() {
    if (sessionStorage.getItem('token')===null) {
      this.$router.push({ name: 'Login' })
    }
  },
  mounted() {
    this.$axios
      .get(`auth/profile/${sessionStorage.getItem('token')}`)
      .then(response => {
        this.userId= response.data.user[0].id
        this.userFirstName= response.data.user[0].firstName,
        this.userLastName= response.data.user[0].lastName,
        this.userEmail= response.data.user[0].email
      })
  },
  methods: {
    uploadUser() {
      this.message= ""
      this.messageOk= ""
      if (this.actualPassword === "") {
        this.message= "Entrez votre nouveau mot de passe"
      }
      if (this.firstName==="" && this.lastName==="" && this.email==="" && this.password==="" && this.password2==="") {
        this.message= "Pas de Changement!"
      }
      if (this.password !== this.password2) {
          this.message = "Indiquez le password nouveau "
        }
      else {
        if (this.firstName==="") this.firstName= this.userFirstName
        if (this.lastName==="") this.lastName= this.userLastName
        if (this.email==="") this.email= this.userEmail
        if (this.password==="") this.password = this.actualPassword
        this.$axios
        .post('/auth/login', {
          email: this.email,
          password: this.actualPassword
        })
        .then(() => {
          this.$axios  
            .put(`/auth/profile/${this.userId}`, {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
            })
            .then(() => {
              this.$axios
                .get(`/auth/profile/${sessionStorage.getItem('token')}`)
                .then(response => {
                  this.userId= response.data.user[0].id,
                  this.userFirstName= response.data.user[0].firstName,
                  this.userLastName= response.data.user[0].lastName,
                  this.userEmail= response.data.user[0].email,
                  this.messageOk= "Changement effectué!",
                  this.password="",
                  localStorage.setItem('name', this.firstName + '_' + this.lastName)
                })
            })
            .catch(error => {
              this.message= error.response.data.message
            })
        })
        .catch(() => {
          this.message= "Password erroné"
        })
      }
    },
    deleteUser() {
      this.$axios
        .delete(`/auth/profile/${this.userId}`)
        .then(response => {
          this.messageDelete= response.data.message
          this.$router.push({ name: 'Signup' })
        })
    }
  },
  destroyed() {
    this.userFirstName= "",
    this.userLastName= "",
    this.userEmail= "",
    this.password= ""
  }
}
</script>

<style scoped lang="scss">


h2 {
  font-size: 20px;
  font-weight: 700;
}

hr {
  width: 100%;
  border-top: 1px solid rgb(97%, 98%, 98%);
}

ul {
  list-style-type: none;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
}

p {
  margin-bottom: 5px;
}

span {
  color: greenyellow;
  font-weight: 600;
}

input {
  font-size: 16px;
}
.sixty-width {
  width:60%
}

.right-side {
  display: flex;
  flex-direction: row;
  text-align: left
}

.form-user {
  width: 60%;
  display: flex;
  flex-direction: column;
}

@media all and (max-width: 750px) {
  form>p {
    font-size: 14px;
    font-weight: 600
  }

  .right-side {
    display: flex;
    flex-direction: column
  }

  .form-user {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>