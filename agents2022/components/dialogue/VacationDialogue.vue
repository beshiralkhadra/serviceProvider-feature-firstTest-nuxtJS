<template>
  <div>
    <v-dialog v-model="showVacationDialog" persistent max-width="500px">
      {{ assignVacationDialog }}
      <v-col md="12">
        <v-row class="align-center justify-center">
          <v-card>
            <v-card-title>
              <span class="text-h5">Vacation Request</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-if="nameForProviderUpdate"
                      label="Employee Name"
                      v-model="nameForProviderUpdate"
                      type="text"
                      name="nameForProviderIn"
                      readonly
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="Employee Name"
                      v-model="nameForProviderIn"
                      type="text"
                      name="nameForProviderIn"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-if="vacationFromUpdate"
                      label="From"
                      v-model="vacationFromUpdate"
                      :min="nowDate"
                      type="date"
                      name="vacationFromUpdate"
                      required
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="From"
                      v-model="vacationFrom"
                      :min="nowDate"
                      type="date"
                      name="vacationFrom"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-if="vacationToUpdate"
                      label="To"
                      v-model="vacationToUpdate"
                      :min="nowDate"
                      type="date"
                      name="vacationToUpdate"
                      required
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="To"
                      v-model="vacationTo"
                      :min="nowDate"
                      type="date"
                      name="vacationTo"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Apply Date"
                      v-model="vacationApplyDate"
                      :min="nowDate"
                      type="date"
                      name="vacationApplyDate"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      v-if="vacationDaysUpdate"
                      v-model="vacationDaysUpdate"
                      type="number"
                      name="vacationDaysUpdate"
                      label="Vacation Days Requested"
                      required
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      v-model="requestedDays"
                      type="number"
                      name="requestedDays"
                      label="Vacation Days Requested"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="12">
                    <v-select
                      v-model="vacationType"
                      :items="vacationTypes"
                      label="choose type..."
                      hide-details
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-if="vacationFromUpdate == null"
                      v-model="reasonToVacation"
                      label="Reason*"
                      type="text"
                      placeholder="Start typing..."
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="statusForVacationUpdate">
                    <v-select
                      v-model="selectStatus"
                      :items="statusOptions"
                      label="choose status..."
                      hide-details
                    >
                    </v-select>
                  </v-col>
                  <v-col md="6">
                    <span style="font-weight: 600; font-size: 1rem"
                      >Status:
                    </span>
                    <span
                      :class="[
                        statusForVacationUpdate == 'accepted'
                          ? 'acceptedLeave'
                          : null,
                        statusForVacationUpdate == 'on hold'
                          ? 'orginalStatus'
                          : 'null',
                        statusForVacationUpdate == 'refused'
                          ? 'refusedLeave'
                          : 'null',
                      ]"
                      >{{ statusForVacationUpdate }}</span
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal" text @click="close"> Close </v-btn>
              <v-btn
                color="#35b5ac"
                class="white--text"
                type="submit"
                @click="requestLeave"
              >
                Request
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-dialog>
    <v-row v-if="requested">
      <PopupSuccess :dialog2.sync="dialog2" />
    </v-row>
  </div>
</template>
<script>
import PopupSuccess from "../PopupSuccess.vue";
import { mapGetters } from "vuex";

export default {
  props: {
    vacationDialog: {
      type: Boolean,
      default: false,
    },

    providerInformation: {
      type: String,
    },
    ////////////////////////////coming from vacation table
    idForVacatioUpdate: {
      type: Number,
    },
    nameForProviderUpdate: {
      type: String,
    },
    uuidForProviderUpdate: {
      type: String,
    },
    vacationFromUpdate: {
      type: String,
    },
    vacationToUpdate: {
      type: String,
    },
    reasonToVacationUpdate: {
      type: String,
    },
    vacationDaysUpdate: {
      type: Number,
    },
    idForProviderUpdate: {
      type: Number,
    },
    statusForVacationUpdate: {
      type: String,
    },
  },
  data() {
    return {
      showVacationDialog: null,
      dialog: false,
      dialog2: false,
      idForProviderIn: "",
      uuidForProviderIn: "",
      nameForProviderIn: "",
      dateRequested: "",
      nowDate: new Date().toISOString().slice(0, 10),
      vacationApplyDate: new Date().toISOString().substr(0, 10),
      vacationFrom: "",
      vacationTo: "",
      reasonToVacation: "",
      providerId: this.testId,
      requested: false,
      requestedDays: "",
      vacationType: "",
      vacationTypes: ["annually", "sick", "other"],
      selectStatus: null,
      statusOptions: ["accepted", "refused", "on hold"],
    };
  },
  methods: {
    requestLeave(e) {
      e.preventDefault();
      if (this.info) {
        this.$axios
          .post("/providers/vacationApplication", {
            providerName: this.nameForProviderIn,
            providerUuid: this.uuidForProviderIn,
            vacationFrom: this.vacationFrom,
            vacationTo: this.vacationTo,
            dateRequested: this.vacationApplyDate,
            reasonToVacation: this.reasonToVacation,
            requestedDays: this.requestedDays,
            vacationType: this.vacationType,
            providerId: this.idForProviderIn,
          })
          .then(() => {
            this.vacationDialog = !this.vacationDialog;
            this.requested = true;
          });
        this.dialog2 = true;
      } else if (this.vacationFromUpdate) {
        console.log(this.idForVacatioUpdate);
        this.$axios
          .put("/providers/updateVacationForProvider", {
            vacationIdUpdate: this.idForVacatioUpdate,
          })
          .then((res) => {
            this.$axios
              .post("/providers/vacationApplication", {
                providerName: this.nameForProviderUpdate,
                providerUuid: this.uuidForProviderUpdate,
                vacationFrom: this.vacationFromUpdate,
                vacationTo: this.vacationToUpdate,
                dateRequested: this.vacationApplyDate,
                reasonToVacation: this.reasonToVacationUpdate,
                requestedDays: this.requestedDays,
                vacationType: this.vacationType,
                status: this.selectStatus,
                providerId: this.idForProviderUpdate,
              })
              .then(() => {
                this.$store.dispatch("actionForGettingAllVacations");
                this.vacationDialog = !this.vacationDialog;
              });
          });
      }
    },
    close() {
      this.$emit("update:vacationDialog", false);
    },
  },
  mounted() {
    if (this.providerInformation) {
      let [uuid, id, name] = this.providerInformation.split("--");
      const [newName] = name.split('"');
      uuid = uuid.substring(0);
      (this.uuidForProviderIn = uuid), (this.idForProviderIn = id);
      this.nameForProviderIn = newName;
    }

    // console.log(this.nameForProviderIn);
  },
  computed: {
    ...mapGetters(["info"]),

    assignVacationDialog() {
      this.showVacationDialog = this.vacationDialog;
    },
    updateData() {},
  },
  watch: {
    info() {
      this.idForProviderIn = this.info[0].id;
      this.uuidForProviderIn = this.info[0].uuid;
      this.nameForProviderIn = this.info[0].firstName;
    },
  },
  components: { PopupSuccess },
};
</script>
