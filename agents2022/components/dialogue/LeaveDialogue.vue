<template>
  <div>
    <v-dialog v-model="showLeaveDialog" persistent max-width="500px">
      {{ assignDialog }}
      <v-col md="12">
        <v-row class="align-center justify-center">
          <v-card>
            <v-card-title>
              <span class="text-h5">Leave Request</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-if="nameForProviderUpdate"
                      v-model="nameForProviderUpdate"
                      type="text"
                      name="nameForProviderIn"
                      readonly
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      v-model="nameForProviderIn"
                      type="text"
                      name="nameForProviderIn"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="leaveDate"
                      v-model="leaveDate"
                      :min="nowDate"
                      type="date"
                      name="leaveDate"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-if="leaveFromUpdate"
                      label="From*"
                      v-model="leaveFromUpdate"
                      type="time"
                      name="leaveFrom"
                      required
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="From*"
                      v-model="leaveFrom"
                      type="time"
                      name="leaveFrom"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-if="leaveToUpdate"
                      label="To"
                      v-model="leaveToUpdate"
                      type="time"
                      name="leaveTo"
                      required
                      hide-details
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="To"
                      v-model="leaveTo"
                      type="time"
                      name="leaveTo"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-if="leaveToUpdate == null"
                      v-model="reasonToLeave"
                      label="Reason*"
                      type="text"
                      placeholder="Start typing..."
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" v-if="statusForLeaveUpdate">
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
                        statusForLeaveUpdate == 'accepted'
                          ? 'acceptedLeave'
                          : null,
                        statusForLeaveUpdate == 'on hold'
                          ? 'orginalStatus'
                          : 'null',
                        statusForLeaveUpdate == 'refused'
                          ? 'refusedLeave'
                          : 'null',
                      ]"
                      >{{ statusForLeaveUpdate }}</span
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
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
import { mapGetters } from "vuex";

import PopupSuccess from "../PopupSuccess.vue";
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },

    providerInformation: {
      type: String,
    },
    ////////////////////////////coming from view leave work table
    idForLeaveUpdate: {
      type: Number,
    },
    nameForProviderUpdate: {
      type: String,
    },
    uuidForProviderUpdate: {
      type: String,
    },
    leaveFromUpdate: {
      type: String,
    },
    leaveToUpdate: {
      type: String,
    },
    reasonToLeaveUpdate: {
      type: String,
    },
    idForProviderUpdate: {
      type: Number,
    },
    statusForLeaveUpdate: {
      type: String,
    },
  },
  data() {
    return {
      showLeaveDialog: null,
      dialog2: false,
      idForProviderIn: "",
      uuidForProviderIn: "",
      nameForProviderIn: "",
      nowDate: new Date().toISOString().slice(0, 10),
      leaveDate: new Date().toISOString().substr(0, 10),
      providerName: "",
      leaveFrom: "",
      leaveTo: "",
      reasonToLeave: "",
      providerId: this.testId,
      requested: false,
      selectStatus: null,
      statusOptions: ["accepted", "refused", "on hold"],
    };
  },
  methods: {
    requestLeave(e) {
      e.preventDefault();

      if (this.info) {
        this.$axios
          .post("/providers/leaveApplication", {
            providerName: this.nameForProviderIn,
            providerUuid: this.uuidForProviderIn,
            leaveDate: this.leaveDate,
            leaveFrom: this.leaveFrom,
            leaveTo: this.leaveTo,
            reasonToLeave: this.reasonToLeave,
            providerId: this.idForProviderIn,
          })
          .then(() => {
            this.showLeaveDialog = !this.showLeaveDialog;
            this.requested = true;
          });
        this.dialog2 = true;
      } else if (this.leaveFromUpdate) {
        this.$axios
          .put("/providers/updateLeaveForProvider", {
            leaveIdUpdate: this.idForLeaveUpdate,
          })
          .then((res) => {
            this.$axios
              .post("/providers/leaveApplication", {
                providerName: this.nameForProviderUpdate,
                providerUuid: this.uuidForProviderUpdate,
                leaveDate: this.leaveDate,
                leaveFrom: this.leaveFromUpdate,
                leaveTo: this.leaveToUpdate,
                reasonToLeave: this.reasonToLeaveUpdate,
                status: this.selectStatus,
                providerId: this.idForProviderUpdate,
              })
              .then(() => {
                this.$store.dispatch("actionForGettingAllLeaveWork");

                this.showLeaveDialog = !this.showLeaveDialog;
              });
          });
      }
    },
    close() {
      this.$emit("update:dialog", false);
    },
  },
  async mounted() {
    try {
      if (this.providerInformation) {
        let [uuid, id, name] = this.providerInformation.split("--");
        uuid = uuid.substring(1);
        const [newName] = name.split('"');
        id = id.substring(0);
        this.idForProviderIn = id;
        this.uuidForProviderIn = uuid;
        this.nameForProviderIn = newName;
      }
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    ...mapGetters(["info"]),
    assignDialog() {
      this.showLeaveDialog = this.dialog;
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
<style>
.acceptedLeave {
  background: transparent;
  border: #35b5ac solid 1px !important;
  border-radius: 5px;
  color: #35b5ac;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
.refusedLeave {
  background: transparent;
  border: red solid 1px !important;
  border-radius: 5px;
  color: red;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
.orginalStatus {
  background: transparent;
  border: orange solid 1px !important;
  border-radius: 5px;
  color: rgb(255, 166, 1);
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
</style>
