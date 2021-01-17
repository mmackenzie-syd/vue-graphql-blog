<template>
  <div>
    <h1>Add Post</h1>
    <v-form
        v-model="valid"
        lazy-validation
        ref="form"
        @submit.prevent="handleAddPost"
    >
      <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Post Title"
          type="text"
          required
      />

      <v-text-field
          v-model="imageUrl"
          :rules="imageRules"
          label="Image Url"
          type="text"
          required
      />
      <div>
        <img :src="imageUrl" height="500px" />
      </div>

      <v-select
          v-model="categories"
          :items="['Art', 'Education', 'Travel', 'Photography', 'Technology']"
          multiple
          label="Categories"
          :rules="categoriesRules"
      />

      <v-textarea
          v-model="description"
          :rules="descRules"
          label="Description"
          required
      />

      <v-btn
          class="mr-4 mb-3"
          color="accent"
          :loading="loading"
          :disabled="!valid || loading"
          type="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src


import {mapGetters} from "vuex";

export default {
  name: 'AddPost',
  data() {
    return {
      valid: true,
      title: '',
      imageUrl: '',
      categories: [],
      description: '',
      titleRules: [
        title => !!title || 'Title is required',
        title => title.length < 20 || 'Title must have less than 20 characters'
      ],
      imageRules: [
        image => !!image || 'Image is required'
      ],
      categoriesRules: [
        categories => categories.length >= 1 || 'At least one category is required'
      ],
      descRules: [
        desc => !!desc || 'Description is required',
        desc => desc.length < 200 || 'Description must have less than 200 characters',
      ],
    }
  },
  methods: {
    computed: {
      ...mapGetters(['user', 'loading'])
    },
    handleAddPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('addPost', {
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description,
          creatorId: this.user._id
        });
        this.$router.push('/');
      }
    }
  }
}
</script>
