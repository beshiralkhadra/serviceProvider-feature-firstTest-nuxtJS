<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-card class="pa-4" height="150" color="primary" dark>
        <v-avatar size="70">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="white--text font-weight-bold text-subtitle-1">
          Beshir Alkhadra
        </div>
        <div class="white--text text-subtitle-2">Beshir@gmail.com</div>
      </v-card>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar
      app
      color="primary"
      dark
      height="150"
      prominent
      src="../assets/img/doctors.jpg"
    >
      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">
            Provider Dashboard
          </v-toolbar-title>
        </v-row>
        <v-row>
          <LiveDateTime />
        </v-row>
      </v-container>
    </v-app-bar> -->

    <v-main>
      <v-container
        class="py-8 px-6"
        style="background: #f4f7f6; height: 100vh"
        fluid
      >
        <template>
          <v-container>
            <v-row>
              <v-col md="4">
                <v-card width="600" height="350" class="mr-5 elevation-8">
                  <v-row class="flex-column justify-center align-center pt-6">
                    <div>
                      <v-avatar size="120">
                        <img
                          alt="user"
                          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                        />
                      </v-avatar>
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
                      <p class="numbers-icons font-weight-medium mb-0">
                        Events
                      </p>
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
                      <v-row class="mt-6">
                        <LeaveDialogue
                          :testId="$route.params.ProviderDashboard"
                          class="mr-2"
                        />
                        <VacationDialogue
                          :testId="$route.params.ProviderDashboard"
                        />
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
                    <div class="d-flex">
                      <v-col md="6">
                        <v-text-field
                          v-model="specialityForProviderIn"
                          type="text"
                          name="major"
                          label="Speciality"
                          :placeholder="specialityForProviderIn"
                          required
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col md="6">
                        <v-text-field
                          v-model="minorForProviderIn"
                          type="text"
                          name="minor"
                          label="Minor"
                          :placeholder="minorForProviderIn"
                          required
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </div>
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
                            :items="bringAllServicesForUpdateForm"
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
              <v-col md="8">
                <div class="container-personal-information mt-6">
                  <h1 class="mb-10 pa-6">Personal Info</h1>
                  <v-row class="justify-space-around align-center">
                    <div>
                      <small class="info-details-title font-weight-light ml-3"
                        >Name:</small
                      >

                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ nameForProviderIn }}
                      </p>
                      <small class="info-details-title font-weight-light pl-3"
                        >Mobile:</small
                      >
                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ phoneForProviderIn }}
                      </p>
                      <small class="info-details-title font-weight-light pl-3"
                        >Age:</small
                      >
                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ ageForProviderIn }}
                      </p>
                    </div>
                    <div>
                      <small class="info-details-title font-weight-light pl-3"
                        >Education:</small
                      >
                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ educationForProviderIn }}
                      </p>
                      <small class="info-details-title font-weight-light pl-3"
                        >Speciality:</small
                      >
                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ specialityForProviderIn }}
                      </p>
                      <small class="info-details-title font-weight-light pl-3"
                        >Minor:</small
                      >
                      <p class="info-details-desc font-weight-medium pl-3">
                        {{ minorForProviderIn }}
                      </p>
                    </div>
                    <div>
                      <p class="font-weight-light">Social</p>

                      <p class="info-details-desc2 font-weight-medium">
                        <v-icon class="icon">mdi-facebook</v-icon>
                        <span> facebook.com/example</span>
                      </p>
                      <p class="info-details-desc2 font-weight-medium">
                        <v-icon class="icon">mdi-twitter</v-icon>
                        <span> twitter.com/example</span>
                      </p>
                      <p class="info-details-desc2 font-weight-medium">
                        <v-icon class="icon">mdi-instagram</v-icon>
                        <span> instagram.com/example</span>
                      </p>
                      <p class="info-details-desc2 font-weight-medium">
                        <v-icon class="icon">mdi-linkedin</v-icon>
                        <span> linkedin.com/example</span>
                      </p>
                    </div>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LiveDateTime from "../../components/LiveDateTime.vue";
import LeaveDialogue from "../../components/dialogue/LeaveDialogue.vue";
import VacationDialogue from "../../components/dialogue/VacationDialogue.vue";
import { mapGetters } from "vuex";
import PopupSuccess from "../../components/PopupSuccess.vue";
import ProviderDialogue from "../../components/dialogue/ProviderDialogue.vue";

export default {
  layout: "providrDashboardLayout",
  mounted() {
    this.testparam = JSON.stringify(this.$route.params.ProviderDashboard);
    console.log(this.testparam);
    let [
      id,
      uuid,
      name,
      lastName,
      age,
      gender,
      phone,
      education,
      speciality,
      status,
      minor,
    ] = this.testparam.split("--");
    const [newMinor] = minor.split('"');
    id = id.substring(1);
    console.log(id, uuid, lastName, age, gender, phone, status);
    this.idForProviderIn = id;
    this.uuidForProviderIn = uuid;
    this.nameForProviderIn = name;
    this.lastNameForProviderIn = lastName;
    this.ageForProviderIn = age;
    this.genderForProviderIn = gender;
    this.phoneForProviderIn = phone;
    this.educationForProviderIn = education;
    this.specialityForProviderIn = speciality;
    this.minorForProviderIn = newMinor;
    this.statusForProviderIn = status;
    this.$store.commit("SET_PROVIDER_ID", id);
    this.$store.commit("SET_PROVIDER_SPECIALITY", speciality);
    this.$store.dispatch("bringAllServicesForUpdateForm");
  },

  data: () => ({
    dialog2: false,
    idForProviderIn: null,
    uuidForProviderIn: null,
    nameForProviderIn: null,
    lastNameForProviderIn: null,
    ageForProviderIn: null,
    genderForProviderIn: null,
    phoneForProviderIn: null,
    educationForProviderIn: null,
    specialityForProviderIn: null,
    minorForProviderIn: null,
    statusForProviderIn: null,
    cards: ["Today", "Yesterday"],
    drawer: null,
    admins: [
      { title: "Management", icon: "mdi-account-multiple-outline", link: "/" },
      { title: "Settings", icon: "mdi-cog-outline", link: "/" },
    ],
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
  }),
  methods: {
    updateProviderInformation(e) {
      e.preventDefault();
      /////////////////////////
      let role_id = null;
      this.getAllRoles.forEach((element) => {
        if (this.role == element.role_name) {
          role_id = element.id;
        }
      });
      console.log(role_id);
      ///////////////////////////////////////////////////////////
      this.$axios
        .put("/providers/updateProviderInformation", {
          providerId: this.idForProviderIn,
          status: "updated",
          selectedUpdatedServices: this.selectedUpdatedServices,
        })
        .then((res) => {
          console.log("تم وصلت 1");
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
  },
  computed: {
    ...mapGetters(["getAllRoles", "bringAllServicesForUpdateForm"]),
  },
  components: {
    LiveDateTime,
    LeaveDialogue,
    VacationDialogue,
    PopupSuccess,
    ProviderDialogue,
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
</style>
