<template>
  <v-row class="flex-column">
    <h1 class="header-doctors">OUR DEPARTMENTS</h1>
    <v-row justify="center" align="center">
      <CategoryCard
        v-for="gettingAllData in categoryData"
        :key="gettingAllData.id"
        :gettingAllData="gettingAllData"
      />
    </v-row>
  </v-row>
</template>

<script>
import CategoryCard from "../components/cards/categoryCard.vue";
import data from "../assets/Data";

export default {
  name: "IndexPage",

  components: { CategoryCard },
  data() {
    return {
      categoryData: data,
    };
  },
  methods: {},
};
</script>
<style scoped>
.header-doctors {
  text-align: center;
  font-weight: bold;
  color: #009688;
  display: flex;
  justify-content: center;
  border-bottom: solid;
  width: 40%;
  align-items: center;
  margin: 2em auto;
  padding-bottom: 0.5em;
}
</style>
