<template>
  <span class="go-back">
    <button @click="goBack">
      <v-icon>mdi-arrow-collapse-left</v-icon> Back
    </button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
  color: #35b5ac;
  font-size: 1.2rem;
}
button {
  border-bottom: 0;
}
button:hover {
  border-bottom: 1px solid #35b5ac;
}
</style>
