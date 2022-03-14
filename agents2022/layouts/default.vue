<template>
  <v-app >
<TheHeader/>  <!-- <v-app-bar app></v-app-bar> -->
        <Nuxt />
<!-- <Footer /> -->
  
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
    name: "DefaultLayout",
    components: { TheHeader }
}
</script>
<style >
 html
 {
   font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 }
</style>
