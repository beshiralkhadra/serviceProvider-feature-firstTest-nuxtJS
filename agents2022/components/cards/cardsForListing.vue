<template>
  <v-card width="400" height="550" class="ma-4 pa-6 blue darken-1 elevation-12">
    <v-row class="flex-column align-center" no-gutters>
      <div class="">
        <!-- {{ getAllHours }} -->
      </div>
      <!-- <v-card-text> -->
      <p class="text-categories text-h3">{{ showAllProviders.firstName }}</p>
      <p class="text-categories text-h6">{{ showAllProviders.major }}</p>
      <p class="text-categories text-h6">{{ showAllProviders.id }}</p>
      <p class="text-categories text-h6">{{ getServicesRelatedToProvider }}</p>
      <p class="text-categories text-h6">{{ allServices }}</p>

      <!-- <p class="text-categories text-h6">{{ filteredMenuItems }}</p>
      <p class="text-categories text-h6">{{ allServices }}</p> -->
      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Sunday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].sunday.from }}--{{
            getAllHours[index_of_array].sunday.to
          }}
        </span>
      </v-row>

      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Monday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].monday.from }}--{{
            getAllHours[index_of_array].monday.to
          }}</span
        >
      </v-row>
      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Tuesday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].tuesday.from }}--{{
            getAllHours[index_of_array].tuesday.to
          }}</span
        >
      </v-row>

      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Wednesday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].wednesday.from }}--{{
            getAllHours[index_of_array].wednesday.to
          }}</span
        >
      </v-row>
      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Thursday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].thursday.from }}--{{
            getAllHours[index_of_array].thursday.to
          }}</span
        >
      </v-row>
      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Friday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].friday.from }}--{{
            getAllHours[index_of_array].friday.to
          }}</span
        >
      </v-row>
      <v-row class="workingHours-card">
        <span class="pr-7" style="color: white"> Saturday</span>
        <span style="color: white">
          {{ getAllHours[index_of_array].saturday.from }}--{{
            getAllHours[index_of_array].saturday.to
          }}</span
        >
      </v-row>
      <!-- </v-card-text> -->
      <v-card-actions>
        <v-btn
          class="categories-listing-Btn mt-5 rounded-0 rounded-white"
          v-on:click="movingToProviderProfileBtn"
          style="border: 0.7px white solid"
        >
          Read Profile</v-btn
        >
      </v-card-actions>
    </v-row>
  </v-card>
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
  }),
  methods: {
    ...mapActions(["getProviderWorkingHours", "getProviderServices"]),

    movingToProviderProfileBtn: function () {
      this.$router.push("/providerfullscreen/" + this.showAllProviders.id);
    },
  },
  mounted() {
    // this.$store.dispatch("getProviderWorkingHours"),
    //   this.$store.dispatch("getProviderServices");
    this.getProviderWorkingHours(), this.getProviderServices();
  },
  computed: {
    ...mapGetters(["getAllHours", "getAllServicesWithProviders"]),
    getServicesRelatedToProvider: function () {
      let arr1 = this.$store.getters.listingProvidersWithResponse;
      let arr2 = this.getAllServicesWithProviders;
      // console.log(arr2);

      let res = [];
      res = arr1.map((el) => {
        return el.id;
      });

      // console.log(res);

      let res2 = [];
      res = res.forEach((el) => {
        arr2.map((element) => {
          if (element.providerId == el) {
            // this.allServices = element.service_name;
            res2.push(
              (res.providerId = {
                service_name: element.service_name,
                providerId: element.providerId,
              })
            );
          }
        });
        // this.allServices = res2;
      });
      console.log(res2);
      // let rr = this.getAllServicesWithProviders.map((service) => {
      //   return `provide:${service.id} [${service.service_name}]`;
      // });
      // for (let i = 0; i < this.getAllServicesWithProviders.length; i++) {
      //   let rr = this.getAllServicesWithProviders.filter((service) => {
      //     return true;
      //   });
      //   console.log(rr);
      // }
      // for (let i = 0; i < this.getAllServicesWithProviders.length; i++) {
      //   if (
      //     this.getAllServicesWithProviders[i].id == this.showAllProviders.id
      //   ) {
      //     bv.push(this.getAllServicesWithProviders[i].service_name);
      //     return bv;
      //   }
      // }
      // console.log(bv, "eeeeeeeeeee");
      // console.log(this.getServicesFromProvider);
    },

    // filteredMenuItems() {
    //   // return "kkkkkkkkkk";
    //   // console.log(this.showAllProviders.id);
    //   this.getAllServicesWithProviders.forEach((element) => {
    //     if (this.showAllProviders.id == element.id) {
    //       let bn = [];
    //       bn = element.service_name;
    //       console.log(bn, element.id);
    //       this.allServices = [...this.allService, bn];
    //       // return this.allServices;
    //       console.log(this.allServices + "hjhjjhj");
    //     } else {
    //       return "skmwksmkdw";
    //     }
    //   });
    // },
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
</style>
