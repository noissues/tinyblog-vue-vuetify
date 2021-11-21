<template>
  <div v-if="currentBlog" class="edit-form mt-3 mx-auto">
    <BlogEditor v-bind:currentBlog="currentBlog" @updated="updateBlogHandler" />

    <v-snackbar v-model="snackbar" :timeout="timeout" top>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";
import BlogEditor from "./BlogEditor";

export default {
  name: "EditBlog",

  components: {
    BlogEditor,
  },
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      currentBlog: null,
      message: "",
    };
  },
  methods: {
    updateBlogHandler(message) {
      this.snackbar = true;
      this.message = message;
    },
    getBlog(id) {
      BlogService.getBlogById(id)
        .then((response) => {
          this.currentBlog = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getBlog(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 960px;
  margin: auto;
}
</style>