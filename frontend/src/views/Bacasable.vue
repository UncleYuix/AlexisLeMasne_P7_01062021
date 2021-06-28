<template>
  <div id="appli">
    <ul>
      <li v-for="post in posts" :key="post.post">{{ post }}</li>
      <p> plop </p>
    </ul>
  </div>
</template>

