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
                  <div class="d-flex">
                    <v-col md="6">
                      <v-text-field
                        v-model="specialityForProvider"
                        type="text"
                        name="major"
                        label="Speciality"
                        :placeholder="specialityForProvider"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="6">
                      <v-text-field
                        v-model="minorForProvider"
                        type="text"
                        name="minor"
                        label="Minor"
                        :placeholder="minorForProvider"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </div>
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
                      :items="bringAllServicesForUpdateFormInElipse"
                      item-text="service_name"
                      label="Select"
                      multiple
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
import { mapGetters } from "vuex";

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
    nameForProvider: {
      type: String,
    },
    phoneForProvider: {
      type: String,
    },
    specialityForProvider: {
      type: String,
    },
    minorForProvider: {
      type: String,
    },
  },
  mounted() {
    this.$store.dispatch("bringAllServicesForUpdateFormInElipseAction");
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
    updateProviderInformation(e) {
      e.preventDefault();

      this.$axios
        .put("/providers/updateProviderInformation", {
          newNameForProvider: this.nameForProvider,
          phone: this.phoneForProvider,
          speciality: this.specialityForProvider,
          minor: this.minorForProvider,
          providerId: this.idForProvider,
          selectedUpdatedServices: this.selectedUpdatedServices,
        })
        .then((res) => console.log(res.data, " تم وصلت"));

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
    ...mapGetters(["getAllRoles", "bringAllServicesForUpdateFormInElipse"]),
  },
  components: { PopupSuccess },
};
</script>
