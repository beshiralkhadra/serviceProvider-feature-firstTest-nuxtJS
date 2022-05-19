<template>
  <div>
    <v-dialog v-model="showSalaryDialog" persistent max-width="500px">
      {{ assignDialog }}
      <v-col md="12">
        <v-row class="align-center justify-center">
          <v-card>
            <v-card-title>
              <span class="salary-dialog-title">Update Salary</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Regular"
                      v-model="employeeName"
                      type="text"
                      name="employeeName"
                      required
                      hide-details
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      label="Position"
                      v-model="position"
                      type="text"
                      name="position"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Old Salary"
                      v-model="oldSalary"
                      type="text"
                      name="oldSalary"
                      readonly
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Regular"
                      v-model="newSalary"
                      type="text"
                      name="newSalary"
                      required
                      hide-details
                    ></v-text-field
                  ></v-col>
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
                @click="updateSalary"
              >
                Update Salary
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
export default {
  props: {
    salaryDialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showSalaryDialog: null,
      dialog2: false,
      ////
      employeeName: null,
      position: null,
      oldSalary: null,
      newSalary: null,

      //   idForProviderIn: "",
      //   uuidForProviderIn: "",
      //   nameForProviderIn: "",
      //   nowDate: new Date().toISOString().slice(0, 10),
      //   leaveDate: new Date().toISOString().substr(0, 10),
      //   providerName: "",
      //   leaveFrom: "",
      //   leaveTo: "",
      //   reasonToLeave: "",
      //   providerId: this.testId,
      //   requested: false,
      //   selectStatus: null,
      //   statusOptions: ["accepted", "refused", "on hold"],
    };
  },
  methods: {
    updateSalary(e) {
      e.preventDefault();
    },
    close() {
      this.$emit("update:salaryDialog", false);
    },
  },
  async mounted() {
    // try {
    //   if (this.testId) {
    //     console.log(this.testId);
    //     let [id, uuid, name] = this.testId.split("--");
    //     const [newName] = name.split('"');
    //     id = id.substring(0);
    //     this.idForProviderIn = id;
    //     this.uuidForProviderIn = uuid;
    //     this.nameForProviderIn = newName;
    //   } else if (this.providerInformation) {
    //     console.log(this.providerInformation);
    //     let [uuid, id, name] = this.providerInformation.split("--");
    //     uuid = uuid.substring(1);
    //     const [newName] = name.split('"');
    //     id = id.substring(0);
    //     this.idForProviderIn = id;
    //     this.uuidForProviderIn = uuid;
    //     this.nameForProviderIn = newName;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    // console.log(this.nameForProviderIn);
  },
  computed: {
    assignDialog() {
      this.showSalaryDialog = this.salaryDialog;
    },
  },
  components: { PopupSuccess },
};
</script>
<style scooped>
.salary-dialog-title {
  margin-top: 1em;
  /* margin-left: 2.9em; */
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 37px;
  border-bottom: 1px solid #e0dede;
  width: 80%;
}
</style>
