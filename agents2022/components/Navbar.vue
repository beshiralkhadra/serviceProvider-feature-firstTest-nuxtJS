<template>
  <v-container fluid class="fluid" style="padding: 0">
    <v-app-bar elevation="1">
      <v-row class="d-flex justify-space-between">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="30"
          max-width="50"
          class="rounded-circle"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/" class="nuxtLink">Home</nuxt-link>
          </li>
        </ul>

        <v-btn class="success darken-2 white--text" @click="registerBtn">
          Register
        </v-btn>
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
.nav-list{
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
}
</style>
