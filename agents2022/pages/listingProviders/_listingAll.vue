<template>
  <v-row class="flex-column">
    <h1 class="header-doctors">OUR {{ $route.params.listingAll }}</h1>
    <div>
      <v-container>
        <v-text-field
          type="text"
          dense
          placeholder="Search"
          v-model="searchTerm"
          v-on:input="search"
        ></v-text-field>
      </v-container>
    </div>

    <v-row justify="center" align="center">
      <CardsForListing
        v-for="showAllProviders in myAllProvidersWithSameRole"
        :key="showAllProviders.id"
        :showAllProviders="showAllProviders"
      />
    </v-row>
  </v-row>
</template>

<script>
import CardsForListing from "../../components/cards/cardsForListing.vue";
import SearchBar from "../../components/searchBar.vue";
export default {
  layout:'listingProviders',
  name: "IndexPage",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      console.log(this.searchTerm);
    },
  },
  mounted() {
    this.$store.dispatch("setWhatRole");
  },
  computed: {
    myAllProvidersWithSameRole() {
      if (this.searchTerm) {
        return this.$store.getters.listingProvidersWithResponse.filter(
          (item) => {
            return this.searchTerm
              .toLowerCase()
              .split("")
              .every((v) => item.firstName.toLowerCase().includes(v));
          }
        );
      } else {
        return this.$store.getters.listingProvidersWithResponse;
      }

      // return this.$store.getters.listingProvidersWithResponse;
    },
  },
  components: { CardsForListing, SearchBar },
};
</script>
<style scoped>
.header-doctors {
  text-align: center;
  font-weight: bold;
  color: #1976d2;
  display: flex;
  justify-content: center;
  border-bottom: solid;
  width: 40%;
  align-items: center;
  margin: 2em auto;
  padding-bottom: 0.5em;
}
</style>
