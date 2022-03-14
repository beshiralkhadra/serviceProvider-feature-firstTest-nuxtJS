<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
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
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      height="150"
      prominent
      src="../assets/img/doctors.jpg"
    >
      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4"> Provider Dashboard </v-toolbar-title>
        </v-row>
        <v-row>
          <LiveDateTime/>
           </v-row>
      </v-container>
    </v-app-bar>
  

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-col cols="12">
          <v-row class="justify-center align-center">
            <h1>{{ testparam }}</h1>
            <ProviderTable />
          </v-row>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProviderTable from "../../components/tables/ProviderTable.vue";
import LiveDateTime from "../../components/LiveDateTime.vue";

export default {
  layout: "providrDashboardLayout",
  mounted() {
    this.testparam = this.$route.params.ProviderDashboard;
  },
  data: () => ({
    testparam: null,
    cards: ["Today", "Yesterday"],
    drawer: null,
    admins: [
      { title: "Management", icon: "mdi-account-multiple-outline", link: "/" },
      { title: "Settings", icon: "mdi-cog-outline", link: "/" },
    ],
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
  components: { ProviderTable, LiveDateTime },
};
</script>
<style scoped>
.mdi {
  color: #01b1c5 !important;
}
.v-navigation-drawer__content {
  overflow-x: visible;
}
</style>
