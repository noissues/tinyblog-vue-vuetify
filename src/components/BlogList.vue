<template>
  <v-card class="mx-auto mt-3" style="max-width: 960px" tile>
    <v-card-title>博客列表</v-card-title>

    <!-- 列表展示 -->
    <v-col v-for="(item, i) in blogs" :key="i" cols="12" class="py-1">
      <v-card outlined @click="editBlog(item.id)">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <!-- 标题 -->
            <v-card-title
              class="subtitle-1 font-weight-black"
              v-text="item.title"
            ></v-card-title>

            <!-- 描述 -->
            <v-card-subtitle
              class="grey--text"
              v-text="item.description"
            ></v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-card>
</template>

<script>
import BlogService from "../services/BlogService";
export default {
  props: ["searchParam"],
  name: "BlogList",
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    getAllBlogs() {
      BlogService.getAllBlogs()
        .then((response) => {
          this.blogs = response.data.map(this.getDisplayBlog);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editBlog(id) {
      this.$router.push({ path: `/edit/${id}` });
    },

    // 界面展示转换
    getDisplayBlog(blog) {
      return {
        id: blog.id,
        title:
          blog.title.length > 30
            ? blog.title.substr(0, 30) + "..."
            : blog.title,
        description:
          blog.description.length > 30
            ? blog.description.substr(0, 30) + "..."
            : blog.description,
      };
    },
  },
  mounted() {
    this.getAllBlogs();
  },
};
</script>

<style>
.list {
  max-width: 960px;
}
</style>