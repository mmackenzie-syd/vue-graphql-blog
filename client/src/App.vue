<template>
  <v-app>
    <!-- Horizontal nav-bar -->
      <v-app-bar fixed color="primary" dark app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <!-- app title -->
        <v-toolbar-title class="hidden-xs-only">
          <router-link to="/" tag="span" style="cursor: pointer">
            VueShare
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Search Input -->
        <v-text-field
            flex
            placeholder="Search Posts"
            single-line
            hide-details
            color="accent"
        >
          <v-icon slot="prepend">
            mdi-magnify
          </v-icon>
        </v-text-field>
        <v-spacer></v-spacer>

        <!-- Horizontal Navbar Links -->
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
              text
              v-for="item in horizontalNavItems"
              key="item.title"
              :to="item.link"
          >
            <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>

      </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
</style>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' },
        { icon: 'mdi-lock-open', title: 'Sign In', link: '/signin' },
        { icon: 'mdi-pencil', title: 'Sign Up', link: '/signup' },
      ]
    }
  },

  data: () => ({
    //
  }),
};
</script>
