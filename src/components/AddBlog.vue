<template>
  <div class="submit-form mt-3 mx-auto">
    <div v-if="!submitted">
      <BlogEditor @added="addBlogHandler" />
    </div>
    <div v-else>
      <v-card class="mx-auto">
        <v-card-title> 🎉博客创建成功! </v-card-title>

        <v-card-subtitle>
          请选择查看已提交的博客还是继续创建博客
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="primary" @click="editBlog">查看已提交博客</v-btn>
          <v-btn color="success" @click="addBlog">继续创建</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import BlogEditor from "./BlogEditor";

export default {
  name: "AddBlog",

  components: {
    BlogEditor,
  },

  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    addBlogHandler(data) {
      this.submitted = true;
      this.id = data.id; // 新创建的博客 id
    },

    addBlog() {
      this.submitted = false;
    },

    editBlog() {
      this.$router.push({ path: `/edit/${this.id}` });
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 960px;
  margin: auto;
}
</style>