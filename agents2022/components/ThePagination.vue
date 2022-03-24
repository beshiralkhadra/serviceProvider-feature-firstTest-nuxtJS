<template>
  <div class="text-center">
    <v-pagination
      v-model="$store.state.page"
      :length="parseInt($store.getters.getPageLength)"
      @input="handlePageChange"
      total-visible="4"
      circle
    ></v-pagination>
    {{ getPage }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    sendWhichPage: {
      type: String,
    },
  },
  data() {
    return {
      whereWeAreNow: "",
    };
  },
  methods: {
    ...mapActions(["bringAllProvidersWithSameRole"]),

    handlePageChange(value) {
      if (this.whereWeAreNow == "DOCTOR") {
        this.$store.commit("SET_LISTING_PROVIDERS", 1);
        this.$store.commit("SET_PAGE_NUMBER", value);
        this.bringAllProvidersWithSameRole();
      } else if (this.whereWeAreNow == "ASSISTANT") {
        this.$store.commit("SET_LISTING_PROVIDERS", 2);
        this.$store.commit("SET_PAGE_NUMBER", value);
        this.bringAllProvidersWithSameRole();
      } else {
        this.$store.commit("SET_LISTING_PROVIDERS", 3);
        this.$store.commit("SET_PAGE_NUMBER", value);
        this.bringAllProvidersWithSameRole();
      }
    },
  },
  computed: {
    getPage: function () {
      this.whereWeAreNow = this.sendWhichPage;
    },
  },
};
</script>

<style scoped></style>
