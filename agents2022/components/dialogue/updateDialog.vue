<template>
  <div>
    <v-dialog v-model="showDialog" max-width="500px">
      {{ assignDialog }}
      <v-col md="12">
        <v-row class="align-center justify-center">
          <v-card>
            <v-card-title>
              <span class="text-h5">Update Information</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <!-------------------------------------------- names fields   -->
                  <div class="d-flex">
                    <v-col md="12">
                      <v-text-field
                        v-model="nameForProvider"
                        type="text"
                        name="name"
                        :placeholder="nameForProvider"
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
                        v-model="phoneForProvider"
                        type="tel"
                        name="phone"
                        :rules="phoneRules"
                        :placeholder="phoneForProvider"
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
                      :placeholder="minorForProvider"
                      hide-details
                    >
                    </v-select>
                  </v-col>
                  <v-col md="12">
                    <v-select
                      v-model="role"
                      :items="getAllRoles"
                      item-text="role_name"
                      label="choose role..."
                      hide-details
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="selectedUpdatedServices"
                      :items="getAllServicesFromApi.Services"
                      item-text="service_name"
                      label="Select"
                      multiple
                      return-object
                      chips
                      hide-details
                    ></v-select>
                  </v-col>
                  <!-------------------------------------------------------------------------- update btn  -->
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal " text @click="close"> Close </v-btn>
              <v-btn
                color="#35b5ac"
                class="white--text"
                type="submit"
                @click="updateProviderInformation"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-dialog>
    <PopupSuccess :dialog2.sync="dialog2" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import PopupSuccess from "../../components/PopupSuccess.vue";
export default {
  name: "updateDialog",

  props: {
    dialog: {
      default: false,
    },
    idForProvider: {
      type: String,
    },
    uuidForProviderIn: {
      type: String,
    },
    nameForProvider: {
      type: String,
    },
    lastNameForProviderIn: {
      type: String,
    },
    ageForProviderIn: {
      type: String,
    },
    genderForProviderIn: {
      type: String,
    },
    phoneForProvider: {
      type: String,
    },
    educationForProviderIn: {
      type: String,
    },
    specialityForProvider: {
      type: String,
    },
    minorForProvider: {
      type: String,
    },
  },
  async mounted() {
    try {
      this.$store.dispatch("actionForGetAllServicesFromApi");
      this.actionForGetAllCategoriesFromApi();
      await this.$store.dispatch("getRoles");
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      showDialog: null,
      dialog2: false,

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
      //////////////////////////////////////
      updateClicked: false,
      requested: false,
    };
  },
  methods: {
    ...mapActions(["actionForGetAllCategoriesFromApi"]),
    updateProviderInformation(e) {
      e.preventDefault();
      console.log(this.selectedUpdatedServices);
      let role_id = null;
      if (this.getAllRole != []) {
        this.getAllRoles.forEach((element) => {
          if (this.role == element.role_name) {
            role_id = element.id;
          }
        });
      }
      try {
        this.$axios
          .put("/providers/updateProviderInformation", {
            providerId: this.idForProvider,
            status: "updated",
            selectedUpdatedServices: this.selectedUpdatedServices,
          })
          .then((res) => {
            console.log("تم وصلت 1", res);
          });
      } catch (e) {
        console.log(e);
      }

      ////////////////////
      // console.log("ppppppppppppppppppppppppppppppp");
      this.$axios.post("/providers/addNewRecordSameProvider", {
        role_id: role_id,
        uuid: this.uuidForProviderIn,
        username: this.nameForProvider,
        lastName: this.lastNameForProviderIn,
        age: this.ageForProviderIn,
        gender: this.genderForProviderIn,
        phone: this.phoneForProvider,
        education: this.educationForProviderIn,
        major: this.specialityForProvider,
        minor: this.minorForProvider,
      });
      try {
        this.$axios
          .put("/providers/updateRelatedTables", {
            newProviderId: this.idForProvider,
            providerUuid: this.uuidForProviderIn,
          })
          .then((res) =>
            console.log(res, "record has been updated in leaves table")
          );
      } catch (e) {
        console.log(e);
      }

      // this.$axios
      //   .put("/providers/updateProviderInformation", {
      //     newNameForProvider: this.nameForProvider,
      //     phone: this.phoneForProvider,
      //     speciality: this.specialityForProvider,
      //     minor: this.minorForProvider,
      //     providerId: this.idForProvider,
      //     selectedUpdatedServices: this.selectedUpdatedServices,
      //   })
      //   .then((res) => this.$store.dispatch("bringAllProvidersWithSameRole"));
      // console.log("ddddddddddddddddddddddddddddddddddddddddddddddd");
      this.dialog2 = true;
      this.showDialog = false;
    },

    close() {
      this.$emit("update:dialog", false);
    },
  },

  computed: {
    assignDialog() {
      this.showDialog = this.dialog;
    },
    ...mapGetters([
      "getAllRoles",
      "getAllServicesFromApi",
      "getAllCategoriessFromApi",
    ]),
  },
  components: { PopupSuccess },
};
</script>
