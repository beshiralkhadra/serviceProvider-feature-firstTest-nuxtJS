<template>
  <div>
    <h1 class="header-doctors">OUR DEPARTMENTS</h1>
    <v-row justify="center" align="center">
      <CategoryCard
        v-for="gettingAllData in categoryData"
        :key="gettingAllData.id"
        :gettingAllData="gettingAllData"
        class="ma-5"
      />
    </v-row>
  </div>
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
};
</script>
<style scoped>
.header-doctors {
  text-align: center;
  font-weight: bold;
  color: #009688;
  margin: 2em auto;
  padding-bottom: 0.5em;
}
.header-doctors::after {
  content: "";
  display: block;
  width: 30vw;
  height: 4px;
  background: #009688;
  margin: 0.5rem auto 0;
}
</style>
