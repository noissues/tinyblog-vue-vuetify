<template>
  <v-form ref="form" lazy-validation>
    <v-card class="mx-auto" tile>
      <v-card-title v-if="currentBlog">编辑博客</v-card-title>
      <v-card-title v-else>新建博客</v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          v-model="blog.title"
          :rules="[(v) => !!v || '请填写标题']"
          label="标题"
          required
        ></v-text-field>
        <v-text-field
          outlined
          v-model="blog.description"
          :rules="[(v) => !!v || '请填写简介']"
          label="简介"
          required
        ></v-text-field>

        <v-textarea
          outlined
          label="内容"
          v-model="blog.content"
          :rules="[(v) => !!v || '请填写内容']"
          required
        ></v-textarea>
      </v-card-text>

      <v-divider class="mt-2"></v-divider>

      <v-card-actions>
        <div v-if="currentBlog">
          <v-btn @click="updateBlog" color="primary" small class="mr-2">
            更新
          </v-btn>

          <v-btn @click="deleteBlog" color="error" small class="mr-2">
            删除
          </v-btn>
          <v-btn small @click="back">取消</v-btn>
        </div>
        <div v-else>
          <v-btn @click="addBlog" color="primary" small class="mr-3">
            提交
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-form>
</template>


<script>
import BlogService from "../services/BlogService";

export default {
  name: "BlogEditor",

  props: ["currentBlog"],

  data() {
    return {
      blog: {
        id: null,
        title: "",
        description: "",
        content: "",
      },

      message: "",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },

    updateBlog() {
      BlogService.updateBlog(this.blog.id, this.blog)
        .then((response) => {
          console.log(response.data);
          this.$emit("updated", "🎉博客更新成功!");
        })
        .catch((e) => {
          console.log(e);
        });
    },

    addBlog() {
      var data = {
        title: this.blog.title,
        description: this.blog.description,
        content: this.blog.content,
      };

      BlogService.addBlog(data)
        .then((response) => {
          console.log(response.data);

          let data = {};
          data.id = response.data.id;
          data.message = "🎉博客创建成功!";
          this.$emit("added", data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteBlog() {
      BlogService.deleteBlog(this.blog.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "blogs" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    if (this.currentBlog) {
      this.blog.id = this.currentBlog.id;
      this.blog.title = this.currentBlog.title;
      this.blog.description = this.currentBlog.description;
      this.blog.content = this.currentBlog.content;
    }
  },
};
</script>