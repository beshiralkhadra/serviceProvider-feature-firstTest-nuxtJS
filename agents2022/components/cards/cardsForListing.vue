<template>
  <v-card
    width="400"
    height="500"
    class="ma-4 pa-6 blue darken-1
"
  >
    <v-row class="flex-column align-center" no-gutters>
      <!-- <v-card-text> -->
      <p class="text-categories text-h3">{{ showAllProviders.firstName }}</p>
      <p class="text-categories text-h6">{{ showAllProviders.major }}</p>
      <p class="workingHours-card">
        <span class="pr-7" style="color: white"> Sunday-Wednesday</span>
        <span style="color: white"> 09:00 -- 16:00 </span>
      </p>
      <p class="workingHours-card">
        <span class="pr-7" style="color: white"> Sunday-Wednesday</span>
        <span style="color: white"> 09:00 -- 16:00 </span>
      </p>
      <p class="workingHours-card">
        <span class="pr-7" style="color: white"> Sunday-Wednesday</span>
        <span style="color: white"> 09:00 -- 16:00 </span>
      </p>
      <!-- </v-card-text> -->
      <v-card-actions>
        <v-btn
          class="categories-listing-Btn mt-5"
        v-on:click="movingToProviderProfileBtn"
        >
          Read Profile</v-btn
        >
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    showAllProviders: {
      type: Object
    },
  },
  data: () => ({}),
  methods: {
    movingToProviderProfileBtn: function () {
      this.$router.push('/providerfullscreen/' + this.showAllProviders.id);
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
  border: 1px white !important;
  color: white !important;
  background: transparent !important;
}
.workingHours-card {
  padding: 0.7em;

  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
</style>
