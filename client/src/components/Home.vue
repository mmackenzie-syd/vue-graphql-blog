<template>
  <v-container>
    <h1>Home</h1>
    <ApolloQuery :query="getPostsQuery">
      <template slot-scope="{ result: { loading, error, data }}">
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error! {{error.message}}</div>
        <ul v-for="post in data.getPosts" :key="post._id">
          <li >
            {{post.title}}
            {{post.imageUrl}}
            {{post.description}}
          </li>
          <li>{{post.likes}}</li>
        </ul>
      </template>
    </ApolloQuery>
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
      getPostsQuery: gql`
        query {
            getPosts {
                _id
                title
                imageUrl
                description
                likes
            }
        }`
    }
  },

}
</script>
