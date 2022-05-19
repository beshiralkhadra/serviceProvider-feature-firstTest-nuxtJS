<template>
  <v-container fluid style="padding: 0">
    <v-app-bar width="100%" height="60vh" class="teal lighten-5" elevation="1">
      <v-row class="d-flex justify-space-around">
        <!-- <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="30"
          max-width="50"
          class="rounded-circle"
          src="https://picsum.photos/id/11/500/300"
        ></v-img> -->
        <p style="font-weight: 600">
          <span style="color: #80cbc4">Agents</span
          ><span style="color: #35b5ac">On</span
          ><span style="color: #248585">Cloud</span>
        </p>
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/" class="nuxtLink">Home</nuxt-link>
          </li>
        </ul>

        <v-btn class="teal white--text" @click="registerBtn"> Register </v-btn>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    registerBtn() {
      this.$router.push("/addnewprovider/addprovider");
    },
  },
};
</script>

<style scoped>
.nav-list {
  list-style: none;
  font-size: 1.2rem;
}
.nav-item a {
  text-decoration: none;
}
.nav-item a:hover {
  border-bottom: 1px #1980e6 solid;
  color: #1a7de1;
}
.nuxtLink {
  text-decoration: none;
  color: #248585;
}
</style>
