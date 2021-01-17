<template>
  <v-card
      class="px-5 py-5 mx-auto my-12"
      max-width="550"
      color="secondary"
  >
    <h1>Get Started Here</h1>
    <div v-if="error">
      <form-alert :message="error"></form-alert>
    </div>
    <v-form
        v-model="valid"
        lazy-validation
        ref="form"
        @submit.prevent="handleSigupUser"
    >
      <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Name"
          type="text"
          required
      ></v-text-field>
      <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
      ></v-text-field>
      <v-text-field
          v-model="confirmation"
          :rules="passwordRules"
          label="Confirm Password"
          type="password"
          required
      ></v-text-field>
      <v-btn
          class="mr-4 mb-3"
          color="accent"
          :loading="loading"
          :disabled="!valid || loading"
          type="submit"
      >
        signup
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';

export default {
  name: 'Signup',
  data: function() {
    return {
      username: '',
      password: '',
      confirmation: '',
      email: '',
      valid: true,
      usernameRules: [
        username => !!username || 'Username is required',
        username => username.length < 10 || 'Username must have less than ten characters',
      ],
      emailRules: [
        email => !!email || 'Email is required',
          email => /.@+./.test(email) || 'Email must be valid'
      ],
      passwordRules: [
        password => !!password || 'Password is required',
        password => password.length > 3 || 'Password must have four or more characters',
        confirmation => confirmation === this.password || ' Passwords must match'
      ]
    }
  },
  computed: {
    ...mapGetters(['error', 'loading']),
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
    handleSigupUser() {
      if (this.$refs.form.validate) {
        this.$store.dispatch('signupUser', {
          username: this.username,
          password: this.password,
          email: this.email
        })
      }
    }
  }
}

</script>

<style>
</style>
