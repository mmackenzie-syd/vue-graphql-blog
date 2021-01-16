<template>
  <div>
    <h1>Welcome Back</h1>
    <div v-if="error">
      <form-alert :message="error"></form-alert>
    </div>
    <v-form
        v-model="valid"
        lazy-validation
        ref="form"
        @submit.prevent="handleSiginUser"
    >
      <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Name"
          type="text"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
          :rules="passwordRules"
      ></v-text-field>
      <v-btn
          class="mr-4"
          color="accent"
          :loading="loading"
          :disabled="!valid"
          type="submit"
      >
        signin
      </v-btn>

      <h3>
        Don't have an account?
        <router-link to="/signup">Signup</router-link>
      </h3>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';

export default {
  name: 'Signin',
  data: function() {
      return {
        username: '',
        password: '',
        valid: true,
        usernameRules: [
            username => !!username || 'Username is required',
            username => username.length < 10 || 'Username must have less than ten characters',
        ],
        passwordRules: [
          password => !!password || 'Password is required',
          password => password.length > 3 || 'Password must have four or more characters',
        ]
      }
  },
  computed: {
    ...mapGetters(['error', 'user', 'loading']),
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

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

