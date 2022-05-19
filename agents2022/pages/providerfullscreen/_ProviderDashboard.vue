<template>
  <v-container v-if="info.length > 0">
    <GoBack />
    <v-tabs v-model="tabs" centered>
      <v-tabs-slider
        circle
        color="teal darken-4
"
      ></v-tabs-slider>
      <v-tab class="teal--text font-weight-bold">Profile</v-tab>
      <v-tab-item>
        <v-container class="mt-5">
          <v-row>
            <v-col md="4">
              <v-card width="600" height="350" class="mr-5 elevation-8">
                <v-row class="flex-column justify-center align-center pt-6">
                  <div class="card-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
                      alt="provider image"
                    />
                  </div>
                  <div>
                    <p
                      class="provider-name-1 mt-3 font-weight-bold"
                      style="text-align: center"
                    >
                      {{ nameForProviderIn }}
                    </p>
                    <p class="provider-name-2 font-weight-light">
                      Jordan, Amman
                    </p>
                    <!-- {{ info }} -->
                  </div>
                  <v-rating
                    background-color="grey lighten-2"
                    color="warning"
                    half-increments
                    hover
                    length="5"
                    size="20"
                    value="3.5"
                  ></v-rating>
                </v-row>
              </v-card>
            </v-col>
            <div>
              <v-card width="1150" height="150" class="elevation-8">
                <div class="d-flex justify-space-around align-center">
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-thumb-up</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">2000</p>
                    <p class="font-weight-light">Likes</p>
                  </div>
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-star</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">4.3</p>
                    <p class="font-weight-light">Rate</p>
                  </div>
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-account</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">324</p>
                    <p class="font-weight-light">Clients</p>
                  </div>
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-tooth</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">230</p>
                    <p class="font-weight-light">surgery</p>
                  </div>
                </div>
              </v-card>
              <div class="d-flex justify-space-around mt-2" style="gap: 1em">
                <v-card height="200" width="270" class="elevation-8">
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-calendar</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">
                      Appointments
                    </p>
                    <button class="finalBtn font-weight-medium white--text">
                      View
                    </button>
                  </div>
                </v-card>
                <v-card height="200" width="270" class="elevation-8">
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-account</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">
                      Consumers
                    </p>
                    <button class="finalBtn font-weight-medium white--text">
                      View
                    </button>
                  </div>
                </v-card>
                <v-card height="200" width="270" class="elevation-8">
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-heart-pulse</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">Events</p>
                    <button class="finalBtn font-weight-medium white--text">
                      View
                    </button>
                  </div>
                </v-card>
                <v-card height="200" width="270" class="elevation-8">
                  <div class="d-flex flex-column align-center mt-5">
                    <v-icon class="icon">mdi-bookmark</v-icon>
                    <p class="numbers-icons font-weight-medium mb-0">
                      Requests
                    </p>
                    <v-row class="mt-5 align-center justify-center">
                      <v-btn
                        @click="showLeaveDialog"
                        class="showLeaveOrVacationBtn ml-7 mb-2"
                        >Request Leave</v-btn
                      >
                      <LeaveDialogue :dialog.sync="dialog" class="mr-2" />
                      <v-btn
                        @click="showVacationDialog"
                        class="showLeaveOrVacationBtn ml-7"
                        >Request Vacation</v-btn
                      >
                      <VacationDialogue :vacationDialog.sync="vacationDialog" />
                    </v-row>
                  </div>
                </v-card>
              </div>
            </div>
            <v-col md="4">
              <div class="register-form-container white">
                <v-form
                  ref="form"
                  lazy-validation
                  class="elevation-12 pa-8 mt-6"
                  width="900"
                >
                  <h1 class="mb-10">Update Information</h1>
                  <!-------------------------------------------- names fields   -->
                  <div class="d-flex">
                    <v-col md="12">
                      <v-text-field
                        v-model="nameForProviderIn"
                        type="text"
                        name="name"
                        :placeholder="nameForProviderIn"
                        :rules="nameRules"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </div>
                  <!---------------------------------------------- age + phone + gender  -->
                  <div class="d-flex">
                    <v-col md="12">
                      <v-text-field
                        v-model="phoneForProviderIn"
                        type="tel"
                        name="phone"
                        :rules="phoneRules"
                        :placeholder="phoneForProviderIn"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </div>

                  <!---------------------------------------------- educations fields  -->

                  <v-col md="12">
                    <v-select
                      v-model="minor"
                      :items="getAllCategoriessFromApi.categories"
                      item-text="category_name"
                      label="choose category..."
                      :placeholder="minorForProviderIn"
                      hide-details
                    >
                    </v-select>
                  </v-col>
                  <v-select
                    v-model="role"
                    :items="getAllRoles"
                    item-text="role_name"
                    label="choose role..."
                    hide-details
                  >
                  </v-select>
                  <div class="d-flex">
                    <v-col md="12">
                      <v-col cols="12" sm="12">
                        <v-select
                          v-model="selectedUpdatedServices"
                          :items="getAllServicesFromApi.Services"
                          item-text="service_name"
                          label="Select"
                          multiple
                          chips
                          return-object
                          hide-details
                        ></v-select>
                      </v-col>
                    </v-col>
                  </div>
                  <!-------------------------------------------------------------------------- next btn  -->
                  <v-row class="justify-end" no-gutters>
                    <button
                      @click="updateProviderInformation"
                      type="submit"
                      class="finalBtn font-weight-medium white--text"
                    >
                      Update
                    </button>
                  </v-row>
                </v-form>
                <PopupSuccess :dialog2.sync="dialog2" />
              </div>
            </v-col>

            <v-col md="8" class="mt-6">
              <ProviderDashboardTabs
                :nameForProviderIn="nameForProviderIn"
                :phoneForProviderIn="phoneForProviderIn"
                :ageForProviderIn="ageForProviderIn"
                :educationForProviderIn="educationForProviderIn"
                :minorForProviderIn="minorForProviderIn"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab class="teal--text font-weight-bold">Appointments</v-tab>
      <v-tab-item>
        <!-- <AppointmentsTable /> -->
      </v-tab-item>
      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat color="grey" v-bind="attrs" v-on="on">
                <v-icon left>mdi-menu-down</v-icon>
                <span>Menu</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="link in links"
                :key="link.text"
                style="cursor: pointer"
                @click="link.method"
              >
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-tabs>
  </v-container>
</template>

<script>
import LiveDateTime from "../../components/LiveDateTime.vue";
import LeaveDialogue from "../../components/dialogue/LeaveDialogue.vue";
import VacationDialogue from "../../components/dialogue/VacationDialogue.vue";
import { mapGetters, mapActions } from "vuex";
import PopupSuccess from "../../components/PopupSuccess.vue";
import ProviderDialogue from "../../components/dialogue/ProviderDialogue.vue";
import ProviderDashboardTabs from "../../components/tabs/ProviderDashboardTabs.vue";
import AppointmentsTable from "./appointmentsTable.vue";
import GoBack from "../../components/GoBack.vue";

export default {
  // layout: "providrDashboardLayout",
  mounted() {
    this.getProviders(this.$route.params.ProviderDashboard);
    // this.$store.commit("SET_PROVIDER_ID", this.info[0].id);
    this.$store.commit(
      "SET_UUID_TO_GET_ALLREQUEST_RELATED_TOPROVIDER",
      this.uuidForProviderIn
    );
    this.$store.dispatch("actionForGetAllServicesFromApi");
    this.actionForGetAllCategoriesFromApi();
  },

  data() {
    return {
      vacationDialog: false,
      dialog: false,
      dialog2: false,
      idForProviderIn: null,
      uuidForProviderIn: null,
      nameForProviderIn: null,
      lastNameForProviderIn: null,
      ageForProviderIn: null,
      genderForProviderIn: null,
      phoneForProviderIn: null,
      educationForProviderIn: null,
      minorForProviderIn: null,
      statusForProviderIn: null,
      cards: ["Today", "Yesterday"],

      drawer: null,
      tab: null,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      /////////////////////////////////////////////// age
      age: "",
      //////////////////////////////////////////// gender
      gender: "",
      items: ["male", "female", "other"],

      ///////////////////////////////////////////////////////// mobile number
      phone: "",

      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => v != /^\d{10}$/.test(v) || "Phone not correct",
      ],
      ///////////////////////////////////////////education
      education: "",
      major: "",
      minor: "",
      //////////////////////////////////////////////// roles
      role: "",
      ////////////////////////////////////////////
      selectedUpdatedServices: "",
      setComingServices: [],
      ////////////////////////////////
      //////
      updateClicked: false,
      ///////////////////////////
      links: [
        {
          icon: "Click Me",
          text: "HR Dashboard",
          method: this.hrDashboardBtn,
        },
        {
          icon: "Click Me",
          text: "Attendance",
          method: this.hrDashboardBtn,
        },
        {
          icon: "Click Me",
          text: "Salary",
          method: this.hrDashboardBtn,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["actionForGetAllCategoriesFromApi", "getProviders"]),

    updateProviderInformation(e) {
      e.preventDefault();
      /////////////////////////
      let role_id = null;
      if (this.getAllRole != []) {
        this.getAllRoles.forEach((element) => {
          if (this.role == element.role_name) {
            role_id = element.id;
          }
        });
      }
      ///////////////////////////////////////////////////////////
      this.$axios
        .put("/providers/updateProviderInformation", {
          providerId: this.idForProviderIn,
          status: "updated",
          selectedUpdatedServices: this.selectedUpdatedServices,
        })
        .then((res) => {
          res.status(200).send(res);
        });
      this.$axios
        .post("/providers/addNewRecordSameProvider", {
          role_id: role_id,
          uuid: this.uuidForProviderIn,
          username: this.nameForProviderIn,
          lastName: this.lastNameForProviderIn,
          age: this.ageForProviderIn,
          gender: this.genderForProviderIn,
          phone: this.phoneForProviderIn,
          education: this.educationForProviderIn,
          major: this.specialityForProviderIn,
          minor: this.minorForProviderIn,
        })
        .then((res) => console.log("تم وصلت 2"));

      //////////////////////////////////
      this.dialog2 = true;
    },
    closePopup() {
      this.updateClicked = false;
    },
    hrDashboardBtn() {
      // this.$store.dispatch("getProviderWorkingHours"),
      this.$router.push(
        "/hrpages/" +
          this.uuidForProviderIn +
          "--" +
          this.idForProviderIn +
          "--" +
          this.nameForProviderIn
      );
    },
    showLeaveDialog() {
      this.dialog = true;
    },
    showVacationDialog() {
      this.vacationDialog = !this.vacationDialog;
    },
  },
  computed: {
    ...mapGetters([
      "getAllRoles",
      "info",
      "getAllServicesFromApi",
      "getAllCategoriessFromApi",
    ]),
    updateData() {},
  },
  watch: {
    info() {
      this.idForProviderIn = this.info[0].id;
      this.uuidForProviderIn = this.info[0].uuid;
      this.nameForProviderIn = this.info[0].firstName;
      this.lastNameForProviderIn = this.info[0].lastName;
      this.ageForProviderIn = this.info[0].age;
      this.genderForProviderIn = this.info[0].gender;
      this.phoneForProviderIn = this.info[0].phone;
      this.educationForProviderIn = this.info[0].education;
      this.minorForProviderIn = this.info[0].minor;
      this.statusForProviderIn = this.info[0].status;
    },
  },
  components: {
    LiveDateTime,
    LeaveDialogue,
    VacationDialogue,
    PopupSuccess,
    ProviderDialogue,
    ProviderDashboardTabs,
    AppointmentsTable,
    GoBack,
  },
};
</script>
<style scoped>
.container-personal-information {
  box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%),
    0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%) !important;
  background: white;
  height: 66vh;
}
.v-navigation-drawer__content {
  overflow-x: visible;
}
.card-img {
  height: 100%;
}
.card-img img {
  width: 100%;
  height: 10vh;
  border-radius: 50% !important;
}
.provider-name-1 {
  font-size: 1.6rem;
}
.provider-name-2 {
  font-size: 1.1rem;
}
.info-title {
  font-size: 1.2rem;
}
.info-details-title {
  font-size: 1.1rem;
}
.info-details-desc {
  font-size: 1.2rem;
}
.icon {
  font-size: 2.5rem;
  color: #35b5ac !important;
}
.numbers-icons {
  font-size: 1.25rem;
  color: #35b5ac;
}
.finalBtn {
  display: flex;
  background-color: #35b5ac;
  padding: 0.3em 1.6em;
  font-size: 1.4rem;
  cursor: pointer;
  outline-style: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1em;
}
.showLeaveOrVacationBtn {
  background: #35b5ac !important;
  color: white;
}
</style>
