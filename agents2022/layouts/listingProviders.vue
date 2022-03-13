<template>
  <v-app >
   <Navbar/>
  <!-- <v-app-bar app></v-app-bar> -->
        <Nuxt />
<TheFooter/>  
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
import Navbar from "../components/Navbar.vue";
import TheFooter from "../components/TheFooter.vue";
// import Navbar from "../components/header/Navbar.vue"
// import Footer from "../components/footer/Footer.vue";
export default {
    name: "DefaultLayout",
    components: { Navbar, TheFooter }
}
</script>
<style >
 html
 {
font-family: monospace;
 }
</style>
