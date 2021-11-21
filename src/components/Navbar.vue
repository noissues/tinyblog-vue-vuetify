<template>
  <v-app-bar app color="white" class="d-flex justify-center">
    <div class="d-flex" style="width: 960px">
      <!-- LOGO -->
      <v-toolbar-title class="mr-2 headline grey--text text--darken-1">
        <span class="font-weight-light">Tiny</span>
        <span>Blog</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- 搜索框 -->
      <v-text-field
        v-model="searchParam"
        class="mr-4"
        style="max-width: 450px"
        dense
        flat
        hide-no-data
        hide-details
        label="搜索博客"
        append-icon="mdi-magnify"
        @click:append="searchByParam"
        solo-inverted
      ></v-text-field>

      <!-- 导航链接 -->
      <v-btn to="/blogs" text>
        <span class="subtitle-1 grey--text text--darken-2">首页</span>
      </v-btn>
      <v-btn to="/add" text>
        <span class="subtitle-1 grey--text text--darken-2">写文章</span>
      </v-btn>
      <v-btn @click="goToGitHub" text>
        <v-icon class="grey--text text--darken-2"> mdi-github </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      searchParam: "",
    };
  },

  methods: {
    searchByParam() {
    },
    goToGitHub() {
        window.location.href ="https://gitee.com/noissues/tinyblog-vue-vuetify.git";
    },
  },
};
</script>

<style>
.navitem {
  width: 960px;
}
</style>