<template>
  <v-container>
    <v-row class="flex-column">
      <h1 class="header-doctors">OUR {{ $route.params.listingAll }}</h1>
      <div>
        <v-text-field
          type="text"
          dense
          placeholder="Search Doctor Name"
          v-model="searchTerm"
          v-on:input="search"
        ></v-text-field>
        <v-autocomplete
            v-model="item"
            :items="items"
            dense
            
            label="Filter based on category"
          ></v-autocomplete>
      </div>
      <!-- <SearchBar @getOnchange="getOnchange"/> -->
      <div v-if="myAllProvidersWithSameRole.length != 0">
        <v-row justify="center" align="center">
          <CardsForListing
            v-for="showAllProviders in myAllProvidersWithSameRole"
            :key="showAllProviders.id"
            :showAllProviders="showAllProviders"
          />
        </v-row>
      </div>
      <v-row v-else class="justify-center align-center" style="height: 50vh;">
        <h1 class="blue--text">there is no providers</h1>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import CardsForListing from "../../components/cards/cardsForListing.vue";
import SearchBar from "../../components/searchBar.vue";
export default {
  // layout: "listingProviders",
  name: "IndexPage",
  data() {
    return {
      searchTerm: "",
            items: ['none','cate1', 'cte3', 'cate5', 'cate7'],
      item: '',

    };
  },
  methods: {
    search() {
      // console.log(this.searchTerm, "bbbebebeb");
    },
    testingFilter(){
      console.log(this.item);
    }
    // getOnchange(searchTerm){
    //   console.log(searchTerm)
    // }
  },
  mounted() {
    this.$store.dispatch("setWhatRole");
  },
  computed: {
    myAllProvidersWithSameRole() {
      if (this.searchTerm) {
        console.log(this.item ,"dsdddddddd")
        let savingAllProviders = this.$store.getters.listingProvidersWithResponse.filter(
          (item) => {
            return this.searchTerm
              .toLowerCase()
              .split("")
              .every((v) => item.firstName.toLowerCase().includes(v) ) 
          }
        );
        if (savingAllProviders.length == 0) {
          console.log(savingAllProviders)
          return savingAllProviders;
        } else {
          return savingAllProviders;
        }
      }else if(this.item){
        return this.$store.getters.listingProvidersWithResponse.filter((item)=>{
          return this.item.includes(item.major)
        })
      }
       else {
        return this.$store.getters.listingProvidersWithResponse;
      }
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
