<template>
  <v-app style="background-color: rgb(244, 245, 245)">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({}),
  methods: {},
};
</script>
