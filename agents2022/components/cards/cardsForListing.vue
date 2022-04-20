<template>
  <div v-if="getAllHours.length > 0">
    <v-card
      class="card-provider-style fluid ma-4 pa-6 blue darken-1 elevation-12"
      v-on:click="movingToProviderProfileBtn"
    >
      <!-- <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
          style="height: 100%"
        ></div>
      </v-expand-transition> -->
      <v-row class="flex-column align-center" no-gutters>
        <!-- <v-card-text> -->
        <p class="text-categories text-h3">
          {{ showAllProviders.firstName }}
          <!-- {{ showAllProviders.uuid }} -->
        </p>
        <p class="text-categories text-h6">{{ showAllProviders.major }}</p>
        <p class="text-categories text-h6">
          {{ getServicesRelatedToProvider }}
        </p>
        <!-- {{ showAllProviders }} -->
        <v-row v-for="(service, i) in allServices" :key="i">
          <!-- {{ service.providerId }} -->
          <!-- {{ service.providerId }} -->
          <!-- {{ showAllProviders.uuid }} -->
          <!-- <v-row> -->
          <p
            class="text-categories font-weight-bold"
            v-if="service.providerId == showAllProviders.id"
          >
            service :
            <span class="font-weight-regular">{{ service.service_name }}</span>
          </p>
          <!-- </v-row> -->
        </v-row>

        <!-- <p class="text-categories text-h6">{{ filteredMenuItems }}</p>
      <p class="text-categories text-h6">{{ allServices }}</p> -->
        <v-row class="workingHours-card">
          <span class="pr-3 font-weight-bold" style="color: white">
            Sunday</span
          >
          <span style="color: white" class="pr-6">
            <!-- {{ getAllHours }} -->

            <!-- {{ index_of_array }}+"/..//././. " -->
            {{ getAllHours[index_of_array].sunday.from }}--{{
              getAllHours[index_of_array].sunday.to
            }}
          </span>

          <span class="pr-3 font-weight-bold" style="color: white">
            Monday</span
          >
          <span style="color: white">
            {{ getAllHours[index_of_array].monday.from }}--{{
              getAllHours[index_of_array].monday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="mr-3 font-weight-bold" style="color: white">
            Tuesday</span
          >
          <span style="color: white" class="mr-6">
            {{ getAllHours[index_of_array].tuesday.from }}--{{
              getAllHours[index_of_array].tuesday.to
            }}</span
          >

          <span class="pr-3 font-weight-bold" style="color: white">
            Wednesday</span
          >
          <span style="color: white">
            {{ getAllHours[index_of_array].wednesday.from }}--{{
              getAllHours[index_of_array].wednesday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="mr-3 font-weight-bold" style="color: white">
            Thursday</span
          >
          <span style="color: white" class="pr-6">
            {{ getAllHours[index_of_array].thursday.from }}--{{
              getAllHours[index_of_array].thursday.to
            }}</span
          >

          <span class="pr-3 font-weight-bold" style="color: white">
            Friday</span
          >
          <span style="color: white">
            {{ getAllHours[index_of_array].friday.from }}--{{
              getAllHours[index_of_array].friday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="pr-3 font-weight-bold" style="color: white">
            Saturday</span
          >
          <span style="color: white">
            {{ getAllHours[index_of_array].saturday.from }}--{{
              getAllHours[index_of_array].saturday.to
            }}</span
          >
        </v-row>
        <!-- </v-card-text> -->
        <!-- <v-card-actions>
        <v-btn
          class="categories-listing-Btn mt-5 rounded-0 rounded-white"
          v-on:click="movingToProviderProfileBtn"
          style="border: 0.7px white solid"
        >
          Read Profile</v-btn
        >
      </v-card-actions> -->
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    showAllProviders: {
      type: Object,
    },
    index_of_array: {
      type: Number,
    },
  },
  data: () => ({
    index: -1,
    allServices: [],
    show: true,
  }),
  methods: {
    ...mapActions(["getProviderServices"]),

    movingToProviderProfileBtn: function () {
      this.$router.push(
        "/providerfullscreen/" +
          this.showAllProviders.id +
          "--" +
          this.showAllProviders.firstName +
          "--" +
          this.showAllProviders.phone +
          "--" +
          this.showAllProviders.age +
          "--" +
          this.showAllProviders.education +
          "--" +
          this.showAllProviders.major +
          "--" +
          this.showAllProviders.minor
      );
    },
  },
  async mounted() {
    await this.$store.dispatch("getProviderWorkingHours"),
      //   this.$store.dispatch("getProviderServices");
      this.getProviderServices();
  },
  computed: {
    ...mapGetters(["getAllHours", "getAllServicesWithProviders"]),
    getServicesRelatedToProvider: function () {
      let arr1 = this.$store.getters.listingProvidersWithResponse;
      let arr2 = this.getAllServicesWithProviders;
      let res = [];
      res = arr1.map((el) => {
        return el.id;
      });
      let res2 = [];
      res = res.forEach((el) => {
        arr2?.map((element) => {
          if (element.providerId == el) {
            res2.push(
              (res.providerId = {
                service_name: element.service_name,
                providerId: element.providerId,
              })
            );
          }
        });
        this.allServices = res2;
      });
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.text-categories {
  color: white !important;
}
.categories-listing-Btn {
  padding: 2em !important;
  /* border-bottom: 10px white bold !important; */
  color: white !important;
  background: transparent !important;
}

.workingHours-card {
  padding: 0.7em;

  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
.card-provider-style {
  /* width: 90%; */
  height: 100%;
}
.card-provider-style:hover {
  transform: scale(1.02);
  transition: 0.2s;
}
</style>
