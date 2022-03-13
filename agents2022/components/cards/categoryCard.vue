<template>
  <v-card width="500" :color="`${gettingAllData.color}`" style="padding: 5em 0">
    <v-row class="flex-column align-center" no-gutters>
      <!-- <v-card-text> -->
      <p class="text-categories text-h4">{{ gettingAllData.title }}</p>
      <!-- </v-card-text> -->
      <v-card-actions>
        <v-btn class="categories-Btn mt-5" v-on:click="toggleBtnFunsCateg">
          View All</v-btn
        >
      </v-card-actions>
    </v-row>

    <!-- <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="white " @click="reveal = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition> -->
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["gettingAllData"],
  data: () => ({}),
  methods: {
    ...mapActions(["setWhatRole","bringAllProvidersWithSameRole"]),

    toggleBtnFunsCateg: function () {
      this.setWhatRole(this.gettingAllData.title);
      this.bringAllProvidersWithSameRole();
      this.$router.push(this.gettingAllData.link + this.gettingAllData.title);
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
.categories-Btn {
  padding: 2em !important;
  border: 10px white bold !important;
  color: white !important;
  background: transparent !important;
}
</style>
