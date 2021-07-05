<template>
  <div class="pb-5 mt-2 min-height bg-clair">
    <Header/>

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

 <!-- le footer mérite un components -->

     <!-- Footer -->
    <footer class="text-center text-lg-start text-muted">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center m-5 p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span> Nos réseaux sociaux pour rester en contact :</span>
        </div>
        <div>
          <a href="https://www.facebook.com" class="me-4 text-reset pl-5">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" class="me-4 text-reset pl-5">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.https://www.instagram.com/?hl=fr" class="me-4 text-reset pl-5">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" class="me-4 text-reset pl-5">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-building"></i> Groupomania
              </h6>
              <p>
                Entreprise spécialisé dans la grande distribution, nous sommes riches de plus de 600 colaborateurs.
                Notre mentra est de l'éxigence et une grande qualité des conditions de travail.
              </p>
            </div>

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> 3 Place Arthur Chaussy, Melun,
                77000, France
              </p>
              <p><i class="fas fa-phone me-3"></i> +(33) 01 34 57 67 88</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://groupomania.com/">
          Groupomania Corp</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
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
.fifty-width {
  width: 50%
}

.min-height {
  min-height: 100%;
}

.bg-clair {
  background-color: rgba(157, 192, 202, 0.849);
}
</style>