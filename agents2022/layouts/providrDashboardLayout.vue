<template>
  <v-app id="inspire">
    <template>
      <v-card>
        <v-toolbar class="d-flex align-center justify-center teal" dark flat>
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

          <!-- <v-toolbar-title>Your Dashboard</v-toolbar-title> -->

          <!-- <v-spacer></v-spacer> -->

          <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn> -->

          <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="white"></v-tabs-slider>

              <v-tab to="/"> Profile </v-tab>
              <v-tab-item value="search">
                <AddProvider />
              </v-tab-item>
              <v-tab to="/providerfullscreen/appointmentstable"
                >Appointments</v-tab
              >
              <v-tab to="/addnewprovider/addprovider"> Gallery </v-tab>
              <v-tab-item value="search">
                <AddProvider />
              </v-tab-item>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items2" :key="item">
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
    <!-- <v-app-bar
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
    </v-app-bar> -->

    <v-main>
      <!--  -->
    </v-main>
    <Nuxt />
  </v-app>
</template>

<script>
import AddProvider from "../pages/addNewProvider/AddProvider.vue";
import _ProviderDashboard from "../pages/providerfullscreen/_ProviderDashboard.vue";
export default {
  data: () => ({
    drawer: null,
    tab: null,
    items2: ["web", "shopping", "videos", "images", "news"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  components: { AddProvider, _ProviderDashboard },
};
</script>
<style>
.mdi {
  color: #01b1c5 !important;
}
</style>
