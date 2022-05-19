<template>
  <div class="text-center">
    <v-pagination
      v-model="$store.state.pageAssistant"
      :length="parseInt($store.getters.getPageLengthAssistant)"
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
    ...mapActions(["bringAllAssistants"]),

    handlePageChange(value) {
      this.$store.commit("SET_ASSISTANT_PAGE_NUMBER", value);
      this.bringAllAssistants();
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
