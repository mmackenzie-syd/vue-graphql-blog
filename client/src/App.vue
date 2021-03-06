<template>
  <v-app style="background: #e3e3ee">
    <!-- Side Nav Bar -->
    <v-navigation-drawer
        app
        temporary
        fixed
        v-model="sideNav"
    >
      <v-toolbar color="accent" dark flat>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
            ripple
          v-for="item in sideNavItems"
          :key="item.link"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{item.title}}
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" @click="handleSignoutUser">
          <v-list-item-action>
            <v-icon>{{'mdi-logout-variant'}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Signout
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Nav Bar -->
      <v-app-bar fixed color="primary" dark app>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
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
        <v-toolbar-items>
          <v-btn
              text
              class="hidden-xs-only"
              v-for="item in horizontalNavItems"
              key="item.title"
              :to="item.link"
          >
            <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
          <v-btn v-if="user" text to="/profile">
            <v-icon class="hidden-sm-only" left>{{'mdi-account-box'}}</v-icon>
            <v-badge right color="blue darken-2">
              <span slot="badge">1</span>
              Profile
            </v-badge>
          </v-btn>
          <v-btn text v-if="user" @click="handleSignoutUser">
            <v-icon class="hidden-sm-only" left>{{'mdi-logout-variant'}}</v-icon>
            Signout
          </v-btn>
        </v-toolbar-items>

      </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view/>
        </transition>

        <v-snackbar
            v-model="authSnackbar"
            color="success"
            bottom
            left
            :timeout="5000"
        >
          <v-icon class="mr-3">mdi-check-circle</v-icon>
          <h3>You are now signed in</h3>
          <v-bar dark flat @click="authSnackbar=false">Close</v-bar>
        </v-snackbar>

        <v-snackbar
            v-if="authError"
            v-model="authErrorSnackbar"
            color="info"
            bottom
            left
            :timeout="5000"
        >
          <v-icon class="mr-3">mdi-cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-bar dark flat to="/signin">Signin</v-bar>
        </v-snackbar>

      </v-container>
    </v-main>
  </v-app>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>

<script>

import { mapGetters } from 'vuex';


export default {
  name: 'App',
  components: {},
  computed: {
    ...mapGetters(['authError', 'user']),
    horizontalNavItems() {
      let items = [
        { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' },
        { icon: 'mdi-lock-open', title: 'Sign In', link: '/signin' },
        { icon: 'mdi-pencil', title: 'Sign Up', link: '/signup' },
      ];
      if (this.user) {
        items = [
          { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' }
        ];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' },
        { icon: 'mdi-lock-open', title: 'Sign In', link: '/signin' },
        { icon: 'mdi-pencil', title: 'Sign Up', link: '/signup' },
      ];
      if (this.user) {
        items = [
          { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' },
          { icon: 'mdi-star-circle', title: 'Create Post', link: '/post/add' },
          { icon: 'mdi-account-box', title: 'Profile', link: '/profile' }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  },
  data: () => ({
    sideNav: false,
    authSnackbar: false,
    authError: null,
    authErrorSnackbar: false
  }),
  watch: {
    user(newValue, oldValue) {
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    }
  }
};
</script>
