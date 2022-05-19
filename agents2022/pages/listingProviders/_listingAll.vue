<template>
  <v-container fluid class="ma-0 pa-0">
    <v-parallax class="hero">
      <div class="hero-inner">
        <!-- <h1>OUR {{ $route.params.listingAll }}</h1> -->
        <h1>OUR PROVIDERS</h1>

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
    <v-toolbar color="#35b5ac" height="100vh">
      <v-row class="justify-center align-center">
        <v-icon class="mr-5" large color="white" right>
          mdi-account-box
        </v-icon>
        <!-- <h1 class="white--text">FIND A {{ $route.params.listingAll }}</h1> -->
        <h1 class="white--text">FIND PROVIDER</h1>
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
      <v-row class="mt-5">
        <ScrollToTop />
        <!-- ////////////////////////////////////////////////////////// -->
        <!-- <div class="mt-12 pa-5">
          <h3 class="mb-5">FILTER {{ $route.params.listingAll }}</h3>
          <v-autocomplete
            v-model="item"
            :items="items"
            outlined
            class="mb-5"
            color="#35b5ac"
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
          </div> -->
        <!-- <v-autocomplete
            v-model="item"
            :items="items"
            class="mb-5"
            outlined
            label="Filter based on category"
            hide-details
          ></v-autocomplete> -->
        <!-- </div> -->
        <!-- //////////////////////////////////////////////// -->
        <v-col md="12">
          <p class="provider-contarct-title">Our Doctors</p>
          <v-row
            v-if="listingProvidersWithResponse.length != 0"
            style="gap: 1em"
          >
            <TestingCard
              v-for="(showAllProviders, index) in listingProvidersWithResponse"
              :key="showAllProviders.id"
              v-if="showAllProviders.RoleId == '1'"
              :showAllProviders="showAllProviders"
              :index_of_array="index"
            />
          </v-row>
          <v-row
            v-else
            class="justify-center align-center"
            style="height: 50vh"
          >
            <h1 class="teal--text">THERE IS NO DOCTORS</h1>
          </v-row>
          <DoctorsPagination class="mt-12" />
        </v-col>
        <v-col md="12">
          <p class="provider-contarct-title">Our Assistants</p>

          <v-row v-if="listingAssistants.length != 0" style="gap: 1em">
            <TestingCard
              v-for="(showAllProviders, index) in listingAssistants"
              :key="showAllProviders.id"
              v-if="showAllProviders.RoleId == '2'"
              :showAllProviders="showAllProviders"
              :index_of_array="index"
            />
          </v-row>
          <v-row
            v-else
            class="justify-center align-center"
            style="height: 50vh"
          >
            <h1 class="teal--text">THERE IS NO ASSISTANTS</h1>
          </v-row>
          <!-- <ThePagination
            :sendWhichPage="$route.params.listingAll"
            class="mt-12"
          /> -->
          <AssistantsPagination class="mt-12" />
        </v-col>
        <v-col md="12">
          <p class="provider-contarct-title">Our Specialists</p>

          <v-row v-if="listingSpecialists.length != 0" style="gap: 1em">
            <TestingCard
              v-for="(showAllProviders, index) in listingSpecialists"
              :key="showAllProviders.id"
              v-if="showAllProviders.RoleId == '3'"
              :showAllProviders="showAllProviders"
              :index_of_array="index"
            />
          </v-row>
          <v-row
            v-else
            class="justify-center align-center"
            style="height: 50vh"
          >
            <h1 class="teal--text">THERE IS NO SPECIALISTS</h1>
          </v-row>
          <SpecialistsPagination class="mt-12" />
        </v-col>

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
    <!-- <ThePagination :sendWhichPage="$route.params.listingAll" class="ma-12" /> -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import SearchBar from "../../components/searchBar.vue";
import ScrollToTop from "../../components/ScrollToTop.vue";
import ThePagination from "../../components/pagination/DoctorsPagination.vue";
import TestingCard from "../../components/cards/TestingCard.vue";
import AssistantsPagination from "../../components/pagination/AssistantsPagination.vue";
import SpecialistsPagination from "../../components/pagination/SpecialistsPagination.vue";
import DoctorsPagination from "../../components/pagination/DoctorsPagination.vue";
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
  async mounted() {
    await this.$store.dispatch("setWhatRole");
    // this.$store.dispatch("setWhatRole");
    // this.$store.dispatch("getRoles");
    this.$store.dispatch("bringAllProvidersWithSameRole");
    this.$store.dispatch("bringAllAssistants");
    this.$store.dispatch("bringAllSpecialists");
  },
  computed: {
    ...mapGetters([
      "listingProvidersWithResponse",
      "listingAssistants",
      "listingSpecialists",
    ]),

    // myAllProvidersWithSameRole() {
    //   // console.log(this.$store.getters.listingProvidersWithResponse);
    //   if (this.searchTerm) {
    //     let savingAllProviders =
    //       this.$store.getters.listingProvidersWithResponse.filter((item) => {
    //         return this.searchTerm
    //           .toLowerCase()
    //           .split("")
    //           .every((v) => item.firstName.toLowerCase().includes(v));
    //       });
    //     if (savingAllProviders.length == 0) {
    //       // console.log(savingAllProviders);
    //       return savingAllProviders;
    //     } else {
    //       return savingAllProviders;
    //     }
    //   } else if (this.item) {
    //     // console.log(this.selectService);
    //     return this.$store.getters.listingProvidersWithResponse.filter(
    //       (item) => {
    //         return this.item.includes(item.major);
    //       }
    //     );
    //   }
    //  else if (this.selectService) {
    //   console.log(this.selectService);
    //   return this.$store.getters.getAllServicesWithProviders.filter(
    //     (item) => {
    //       return this.item.includes(item.service_name);
    //     }
    //   );
    // }
    // else {
    //   return this.$store.getters.listingProvidersWithResponse;
    // }
    // },
  },
  components: {
    SearchBar,
    ScrollToTop,
    ThePagination,
    TestingCard,
    AssistantsPagination,
    SpecialistsPagination,
    DoctorsPagination,
  },
};
</script>
<style scoped>
.provider-contarct-title {
  margin-bottom: 1em;
  /* margin-left: 2.9em; */
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 20%;
  color: #35b5ac;
}
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
