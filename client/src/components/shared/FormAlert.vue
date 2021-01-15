<template>
  <v-alert type="error" :value="true" dismissible transition="scale-transition">
    <h3>{{message}}</h3>
  </v-alert>

</template>


<script>
// @ is an alias to /src

export default {
  props: ['message']
}
</script>

<style>


</style>
