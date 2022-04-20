<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#35b5ac" max-width="100" dark v-bind="attrs" v-on="on">
          Vacation
        </v-btn>
      </template>
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
                      label="Date Requested"
                      v-model="dateRequested"
                      :min="nowDate"
                      type="date"
                      name="dateRequested"
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
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
                      v-model="reasonToVacation"
                      label="Reason*"
                      type="text"
                      placeholder="Start typing..."
                      required
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal" text @click="dialog = false"> Close </v-btn>
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
      <PopupSuccess :handlePopMessageBtn="handlePopMessageBtn" />
    </v-row>
  </div>
</template>
<script>
import PopupSuccess from "../PopupSuccess.vue";
export default {
  props: {
    testId: {
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
      idForProviderIn: "",
      nameForProviderIn: "",
      dateRequested: "",
      nowDate: new Date().toISOString().slice(0, 10),
      minDate: new Date().toISOString().substr(0, 10),
      vacationFrom: "",
      vacationTo: "",
      reasonToVacation: "",
      providerId: this.testId,
      requested: false,
      requestedDays: "",
      vacationType: "",
      vacationTypes: ["annually", "sick", "other"],
    };
  },
  methods: {
    requestLeave(e) {
      e.preventDefault();

      this.$axios
        .post("/providers/vacationApplication", {
          dateRequested: this.dateRequested,
          vacationFrom: this.vacationFrom,
          vacationTo: this.vacationTo,
          reasonToLeave: this.reasonToLeave,
          requestedDays: this.requestedDays,
          vacationType: this.vacationType,
          providerId: this.idForProviderIn,
        })
        .then(() => {
          this.dialog = false;
          this.requested = true;
        });
    },
    handlePopMessageBtn() {
      this.requested = flase;
    },
  },
  mounted() {
    let [id, name] = this.testId.split("--");
    const [newName] = name.split('"');
    id = id.substring(0);
    this.idForProviderIn = id;
    this.nameForProviderIn = newName;
    // console.log(this.nameForProviderIn);
  },
  computed: {},
  components: { PopupSuccess },
};
</script>
