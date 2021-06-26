<template>
  <v-app>
      <Drawer />
      <AppBar />   
    <v-main>
      <v-container fill-height fluid class="px-10 py-10">        
       <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { AppBar,   Drawer, Footer } from "./components/core";

export default {
  name: "App",

  components: {
    AppBar,
    Drawer,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
