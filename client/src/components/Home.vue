<template>
  <v-container>
    <h1>Home</h1>
    <div v-if="$apollo.loading">Loading...</div>
    <ul v-for="post in posts" :key="post._id">
      <li >
        {{post.title}}
        {{post.imageUrl}}
        {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
            getPosts {
                _id
                title
                imageUrl
                description
                likes
            }
        }`,
      result({ data, loading, networkStatus }) {
        if (!loading) {
          this.posts = data.getPosts;
          console.log("[networkStatus]", networkStatus);
        }
      },
      error(err) {
        console.error('[ERROR!!]', err);
      }
    }
  }
}
</script>
