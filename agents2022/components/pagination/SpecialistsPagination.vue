<template>
  <div class="text-center">
    <v-pagination
      v-model="$store.state.pageSpecialist"
      :length="parseInt($store.getters.getPageLengthSpecialist)"
      @input="handlePageChange"
      total-visible="4"
      color="#009688"
      circle
    ></v-pagination>
    {{ getPage }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["bringAllSpecialists"]),

    handlePageChange(value) {
      this.$store.commit("SET_SPECIALIST_PAGE_NUMBER", value);
      this.bringAllSpecialists();
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
