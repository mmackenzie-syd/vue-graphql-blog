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
          label="Password"
          type="password"
          required
      ></v-text-field>
      <v-btn
          class="mr-4 mb-3"
          color="accent"
          :loading="loading"
          :disabled="!valid"
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
    ...mapGetters(['error', 'loading']),
  },
  methods: {
    handleSigupUser() {

    }
  }
}

</script>

<style>
</style>
