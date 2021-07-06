<template>
  <div class="pb-5 mt-2 min-height bg-clair">
    <Header/>

   <div class="jumbotron text-center"
      style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/89.jpg');
    height: 35vh"></div>

        <aside class="border border-dark rounded-sm text-center">
          <h1>
            Structurons notre collectif vers un avenir co-construit et
            bienveillant
          </h1>
          <p class="display-6 p-4"> <em>
            le forum est soumis à modération, contactez l'administrateur en cas de
            problèmes ou situation ne respectant </em>
            <router-link to="/rules"> les règles </router-link>
          </p>
        </aside>


    <div class="container bg-info">
      <PostWall v-for="post in posts"
            :key="post.id"
            :postId="post.id"
            :image="post.imageUrl"
            :title="post.title"
            :date="post.date"
            :postUserId="post.userId"
            :role="role"
            :userId="userId"
            @post-deleted="updatePosts"
            >
      </PostWall>
    </div>

 <!-- le footer mérite un component -->
<Footer/>

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      userId: Number,
      role: ""
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
        this.role= response.data.user[0].role
        this.userId= response.data.user[0].id
        this.$axios
          .get('/posts')
          .then(responses => {
            this.posts = responses.data.post
          })
      })    
  },
  methods: {
    updatePosts() {
      setTimeout(function () { 
        this.$axios
        .get('/posts')
        .then(response => this.posts = response.data.post)
       }.bind(this), 150)    
    }
  }
}
</script>

<style scoped lang="scss">
// .fifty-width {
//   width: 50%
// }

// .min-height {
//   min-height: 100%;
// }

.bg-clair {
  background-color: rgba(157, 192, 202, 0.849);
}
</style>