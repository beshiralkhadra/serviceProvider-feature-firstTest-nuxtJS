<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#35b5ac" dark v-bind="attrs" v-on="on"> Leave </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Leave Request</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
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
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
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
                  v-model="reasonToLeave"
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
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
      nowDate: new Date().toISOString().slice(0, 10),
      leaveDate: new Date().toISOString().substr(0, 10),
      providerName: "",
      leaveFrom: "",
      leaveTo: "",
      reasonToLeave: "",
      providerId: this.testId,
      requested: false,
    };
  },
  methods: {
    requestLeave(e) {
      e.preventDefault();

      this.$axios
        .post("/providers/leaveApplication", {
          leaveDate: this.leaveDate,
          leaveFrom: this.leaveFrom,
          leaveTo: this.leaveTo,
          reasonToLeave: this.reasonToLeave,
          providerId: this.idForProviderIn,
        })
        .then(() => {
          this.dialog = false;
          this.requested = true;
        });
    },
    handlePopMessageBtn() {
      this.requested = false;
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
