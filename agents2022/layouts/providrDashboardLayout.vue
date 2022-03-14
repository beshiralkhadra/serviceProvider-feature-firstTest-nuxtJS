<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-card class="pa-4" height="150" color="primary" dark>
        <v-avatar size="70">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="white--text font-weight-bold text-subtitle-1">
          Beshir Alkhadra
        </div>
        <div class="white--text text-subtitle-2">Beshir@gmail.com</div>
      </v-card>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      app
      color="primary"
      dark
      height="150"
      prominent
      src="../assets/img/doctors.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Create", icon: "mdi-plus-outline", link: "/" },
      {
        title: "Read",
        icon: "mdi-file-outline",
        link: "/addnewprovider/addprovider",
      },
      { title: "Update", icon: "mdi-update", link: "/auth/login" },
      { title: "Delete", icon: "mdi-delete", link: "/" },
    ],
  }),
};
</script>
<style>
.mdi {
  color: #01b1c5 !important;
}
</style>
