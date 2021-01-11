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
        <transition name="fade">
          <router-view/>
        </transition>
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
    },
    sideNavItems() {
      return [
        { icon: 'mdi-comment-text', title: 'Posts', link: '/posts' },
        { icon: 'mdi-lock-open', title: 'Sign In', link: '/signin' },
        { icon: 'mdi-pencil', title: 'Sign Up', link: '/signup' },
      ]
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  },
  data: () => ({
    sideNav: false
  }),
};
</script>
