<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="hero">
      <div class="hero-inner">
        <h1>OUR {{ $route.params.listingAll }}</h1>
        <h2>
          <v-row class="justify-center">
            <v-breadcrumbs :items="itemsBread" large>
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-row>
        </h2>
      </div>
    </v-parallax>
    <v-toolbar class="blue lighten-1" height="100vh">
      <v-row class="justify-center align-center">
        <v-icon class="mr-5" large color="white" right>
          mdi-account-box
        </v-icon>
        <h1 class="white--text">FIND A {{ $route.params.listingAll }}</h1>
        <v-text-field
          type="text"
          dense
          outlined
          class="mx-4 white"
          placeholder="Search Doctor Name"
          v-model="searchTerm"
          v-on:input="search"
          hide-details
        ></v-text-field>
      </v-row>
    </v-toolbar>

    <v-container>
      <v-row class="mt-5 justify-center">
        <ScrollToTop />
        <!-- ////////////////////////////////////////////////////////// -->
        <div class="mt-12 pa-5">
          <h3 class="mb-5">FILTER {{ $route.params.listingAll }}</h3>
          <v-autocomplete
            v-model="item"
            :items="items"
            outlined
            class="mb-5"
            label="Filter based on category"
            hide-details
          ></v-autocomplete>
          <div v-if="item">
            <v-autocomplete
              v-model="selectService"
              :items="servicesList"
              class="mb-5"
              outlined
              label="Filter based on services"
              hide-details
            ></v-autocomplete>
          </div>
          <!-- <v-autocomplete
            v-model="item"
            :items="items"
            class="mb-5"
            outlined
            label="Filter based on category"
            hide-details
          ></v-autocomplete> -->
        </div>
        <!-- //////////////////////////////////////////////// -->

        <div style="width: 80%">
          <v-row v-if="myAllProvidersWithSameRole.length != 0">
            <CardsForListing
              v-for="(showAllProviders, index) in myAllProvidersWithSameRole"
              :key="showAllProviders.id"
              :showAllProviders="showAllProviders"
              :index_of_array="index"
            />
          </v-row>
          <v-row
            v-else
            class="justify-center align-center"
            style="height: 50vh"
          >
            <h1 class="blue--text">
              THERE IS NO {{ $route.params.listingAll }}
            </h1>
          </v-row>
        </div>
        <!-- <v-col cols="9" class="mt-5">
            <v-text-field
              type="text"
              dense
              placeholder="Search Doctor Name"
              v-model="searchTerm"
              v-on:input="search"
              hide-details
            ></v-text-field>
          </v-col> -->

        <!-- <SearchBar @getOnchange="getOnchange"/> -->
      </v-row>
    </v-container>
    <ThePagination :sendWhichPage="$route.params.listingAll" class="ma-7" />
  </v-container>
</template>

<script>
import CardsForListing from "../../components/cards/cardsForListing.vue";
import SearchBar from "../../components/searchBar.vue";
import ScrollToTop from "../../components/ScrollToTop.vue";
import ThePagination from "../../components/ThePagination.vue";
export default {
  // layout: "listingProviders",
  name: "IndexPage",
  data() {
    return {
      searchTerm: "",
      items: ["", "cate1", "cate2", "cate3", "cate4", "cate5", "cate6"],
      itemsBread: [
        {
          text: "categories",
          link: true,
          exact: true,
          disabled: false,
          to: {
            name: "index",
          },
        },
        {
          text: "listing doctors",
          disabled: true,
          href: "http://localhost:53533/",
        },
      ],
      item: "",
      selectService: "",
      servicesList: ["", "service1", "service2", "service3", "Filler"],
    };
  },
  methods: {
    search() {
      // console.log(this.searchTerm, "bbbebebeb");
    },
    testingFilter() {
      console.log(this.item);
    },
    // getOnchange(searchTerm){
    //   console.log(searchTerm)
    // }
  },
  mounted() {
    this.$store.dispatch("setWhatRole");
    // this.$store.dispatch("setWhatRole");
  },
  computed: {
    myAllProvidersWithSameRole() {
      // console.log(this.$store.getters.listingProvidersWithResponse);
      if (this.searchTerm) {
        let savingAllProviders =
          this.$store.getters.listingProvidersWithResponse.filter((item) => {
            return this.searchTerm
              .toLowerCase()
              .split("")
              .every((v) => item.firstName.toLowerCase().includes(v));
          });
        if (savingAllProviders.length == 0) {
          console.log(savingAllProviders);
          return savingAllProviders;
        } else {
          return savingAllProviders;
        }
      } else if (this.item) {
        // console.log(this.selectService);
        return this.$store.getters.listingProvidersWithResponse.filter(
          (item) => {
            return this.item.includes(item.major);
          }
        );
      }
      //  else if (this.selectService) {
      //   console.log(this.selectService);
      //   return this.$store.getters.getAllServicesWithProviders.filter(
      //     (item) => {
      //       return this.item.includes(item.service_name);
      //     }
      //   );
      // }
      else {
        return this.$store.getters.listingProvidersWithResponse;
      }
    },
  },
  components: { CardsForListing, SearchBar, ScrollToTop, ThePagination },
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

.hero h1 {
  /* Text styles */
  font-size: 3.5em;

  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;
}

.hero {
  /* Sizing */
  width: 100vw;
  height: 210px !important;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white;

  /* Background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_960_720.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.v-breadcrumbs >>> a {
  color: white;
}
</style>
