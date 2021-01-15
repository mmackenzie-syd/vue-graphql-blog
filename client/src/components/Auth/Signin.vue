<template>
  <div>
    <h1>Welcome Back</h1>
    <div v-if="error">
      <form-alert :message="error"></form-alert>
    </div>
    <form @submit.prevent="handleSiginUser">
      <v-text-field
          v-model="username"
          label="Name"
          type="text"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
      ></v-text-field>
      <v-btn
          class="mr-4"
          type="submit"
          color="accent"
      >
        signin
      </v-btn>
      <h3>
        Don't have an account?
        <router-link to="/signup">Signup</router-link>
      </h3>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';

export default {
  name: 'Signin',
  data: {
    username: '',
    password: ''
  },
  computed: {
    ...mapGetters(['error', 'user']),
  },
  watch: {
    user: function(value) {
      console.log('value', value)
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    handleSiginUser() {
      this.$store.dispatch('signinUser', {
        username: this.username,
        password: this.password
      })
    }
  }
}

</script>
