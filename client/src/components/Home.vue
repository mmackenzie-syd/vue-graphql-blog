<template>
  <v-container v-if="posts.length > 0">
    <v-flex xs12>
      <v-carousel v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>


<script>
// @ is an alias to /src

import { gql } from 'apollo-boost';

export default {
  name: 'Home',

  // arrow function does not work in es6 object property methods (at least not with this compiler)
  // http://es6-features.org/#MethodProperties
  created: function() {
    this.handleGetCarouselPosts();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  methods: {
    handleGetCarouselPosts() {
      this.$store.dispatch('getPosts');
    }
  }
}
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 22px;
}

</style>
