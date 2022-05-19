<template>
  <v-card width="500" :color="`${gettingAllData.color}`" style="padding: 5em 0">
    <v-row class="flex-column align-center" no-gutters>
      <!-- <v-card-text> -->
      <p class="text-categories text-h4">{{ gettingAllData.title }}</p>
      <!-- </v-card-text> -->
      <v-card-actions>
        <v-btn class="categories-Btn mt-5" v-on:click="toggleBtnFunsCateg">
          View
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    gettingAllData: {
      type: Object,
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions(["setWhatRole", "bringAllProvidersWithSameRole"]),

    toggleBtnFunsCateg: function () {
      this.setWhatRole(this.gettingAllData.id);
      this.bringAllProvidersWithSameRole();
      // this.$router.push(this.gettingAllData.link + this.gettingAllData.title);
      this.$router.push(this.gettingAllData.link);
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
