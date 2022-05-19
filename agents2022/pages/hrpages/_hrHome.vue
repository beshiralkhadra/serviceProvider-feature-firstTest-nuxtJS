<template>
  <div>
    <v-container>
      <GoBack />
      <p class="hr-title">HR Dashboard</p>
      <v-row class="justify-center">
        <div class="d-flex justify-space-around mt-2" style="gap: 1em">
          <v-col md="4">
            <div class="clocking-header-section mb-5">
              <span class="clocking-header">Today's Clocking</span>
              <NuxtLink class="clocking-link" to="/hrpages/timeattendance"
                >View History</NuxtLink
              >
            </div>

            <v-card width="1000" class="clocking-section elevation-5">
              <div class="clocking-inside">
                <!-- <v-icon class="icon">mdi-calendar</v-icon> -->
                <div class="clocking-title font-weight-medium mb-0">
                  Clocking
                </div>
                <v-btn
                  class="clocking-btn-in font-weight-medium black--text mr-3"
                  type="submit"
                  @click="checkedIn"
                  :disabled="cnt > 1"
                >
                  Clock-In
                </v-btn>
                <v-btn
                  class="clocking-btn-out font-weight-medium black--text"
                  type="submit"
                  @click="checkedOut"
                  :disabled="cnt2 > 1"
                >
                  Clock-Out
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <div class="clocking-header-section mb-5">
              <span class="clocking-header">Your Work Leave Balance </span>
              <!-- <NuxtLink class="clocking-link" to="#">Request Leave</NuxtLink> -->
              <v-btn
                @click="showLeaveDialog"
                class="showLeaveOrVacationBtn ml-7"
                >Request Leave</v-btn
              >
              <LeaveDialogue
                :dialog.sync="dialog"
                :providerInformation="$route.params.hrHome"
              />
            </div>
            <v-card class="annual-card elevation-5">
              <v-row>
                <v-col md="6">
                  <div class="pa-5">
                    <div>Sick Days Off</div>
                    <div>
                      <span class="actual-number-balance">5</span
                      ><span class="left-days-balance">/7</span>
                    </div>
                    <div>Days</div>
                  </div>
                </v-col>
                <v-col md="6">
                  <div class="emoji-box">
                    <img
                      src="https://d2is554mdy16bu.cloudfront.net/assets/timeoff_emojis/sick-1b1f2fa79bdbb5b4b57bd4d61d466b1f81046d28c29085e4579d835d1ac2f5a4.png"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col md="3">
            <div class="clocking-header-section mb-5">
              <span class="clocking-header">Your Annual Balance </span>
              <v-btn
                @click="showVacationDialog"
                class="showLeaveOrVacationBtn ml-7"
                >Request Vacation</v-btn
              >
              <VacationDialogue
                :vacationDialog.sync="vacationDialog"
                :providerInformation="$route.params.hrHome"
              />
            </div>
            <v-card class="annual-card elevation-5">
              <v-row>
                <v-col md="6">
                  <div class="pa-5">
                    <div>Annual Vacation</div>
                    <div>
                      <span class="actual-number-balance">10</span
                      ><span class="left-days-balance">/14</span>
                    </div>
                    <div>Days</div>
                  </div>
                </v-col>
                <v-col md="6">
                  <div class="emoji-box">
                    <img
                      src="https://d2is554mdy16bu.cloudfront.net/assets/timeoff_emojis/house-b0169f734b2364319a8ecca412dd19ed4e05a95fbe326d3def934eaf442929c1.png"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </div>
        <v-row class="justify-space-around">
          <v-col md="7">
            <div class="clocking-header-section mb-3">
              <span class="salary-contract-header">Salary Package</span>

              <button class="contract-view-payslip-btn" @click="payslipbtn">
                Generate Payslip
              </button>
            </div>
            <v-card class="salary-card elevation-5">
              <div class="salary-section">
                <v-col md="3">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">Basic Salary</div>
                    <div class="annual-numbers-section">500.000 JOD</div>
                  </div>
                </v-col>
                <v-col md="3">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">
                      Social Security Salary
                    </div>
                    <div class="annual-numbers-section">500.000 JOD</div>
                  </div>
                </v-col>
                <v-col md="3">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">Total Salary</div>
                    <div class="annual-numbers-section">500.000 JOD</div>
                  </div>
                </v-col>
              </div>
              <div class="bank-section">
                <v-col md="3">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">Bank Name</div>
                    <div class="annual-numbers-section">Bank al Etihad</div>
                  </div>
                </v-col>
                <v-col md="3">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">Account Number</div>
                    <div class="annual-numbers-section">N/A</div>
                  </div>
                </v-col>
                <v-col md="4">
                  <div class="annual-balance-section">
                    <div class="annual-title-section">IBAN</div>
                    <div class="annual-numbers-section">N/A</div>
                  </div>
                </v-col>
              </div>
            </v-card>
          </v-col>
          <v-col md="3">
            <div class="clocking-header-section mb-3">
              <span class="salary-contract-header">Contract </span>
              <!-- <NuxtLink class="clocking-link" to="#">View Contract</NuxtLink> -->
            </div>
            <v-card class="warning-card elevation-5 pa-7">
              <v-row class="flex-column justify-center align-center">
                <div>
                  <v-icon class="warning-icon"> mdi-bullhorn </v-icon>
                </div>
                <div>
                  <p>View penalties</p>
                  <v-btn class="warning-btn">View </v-btn>
                </div>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <div className="reservation-table">
          <p class="working-hours-title">Working Hours</p>
          <table v-if="getAllWorkingHoursForProvider.length > 0">
            <thead>
              <tr>
                <th>Day</th>
                <th>From</th>
                <th>To</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-column="USERNAME">Sunday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].sunday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].sunday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <tr>
                <td data-column="USERNAME">Monday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].monday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].monday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <tr>
                <td data-column="USERNAME">Tuesday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].tuesday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].tuesday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <UpdateWorkingHours
                :dialog2.sync="dialog2"
                :providerUuid="uuidForProviderIn"
              />

              <tr>
                <td data-column="USERNAME">Wednesday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].wednesday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].wednesday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <tr>
                <td data-column="USERNAME">Thursday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].thursday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].thursday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <tr>
                <td data-column="USERNAME">Friday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].friday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].friday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
              <tr>
                <td data-column="USERNAME">Saturday</td>
                <td>
                  {{ getAllWorkingHoursForProvider[0].saturday.from }}
                </td>
                <td data-column="ID">
                  {{ getAllWorkingHoursForProvider[0].saturday.to }}
                </td>
                <td data-column="ID">
                  <v-btn @click="showUpdateWorkingHoursDialog">Update</v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UpdateWorkingHours from "../../components/dialogue/UpdateWorkingHours.vue";
import LeaveDialogue from "../../components/dialogue/LeaveDialogue.vue";
import VacationDialogue from "../../components/dialogue/VacationDialogue.vue";

export default {
  name: "HrHome",
  async mounted() {
    try {
      this.testparam = JSON.stringify(this.$route.params.hrHome);

      let [uuid, id, name] = this.testparam.split("--");
      const [newName] = name.split('"');
      uuid = uuid.substring(1);
      this.idForProviderIn = id;
      this.uuidForProviderIn = uuid;
      this.nameForProviderIn = newName;
      console.log(uuid);
      // this.$store.commit("SET_PROVIDER_UUID_IN_HR", uuid);
      this.$store.dispatch("setUuidForProviderInHr", uuid);
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      dialog: false,
      vacationDialog: false,
      dialog2: false,
      idForProviderIn: "",
      uuidForProviderIn: "",
      nameForProviderIn: "",
      cnt: 1,
      cnt2: 1,
    };
  },
  methods: {
    showUpdateWorkingHoursDialog() {
      this.dialog2 = true;
    },
    checkedIn() {
      this.cnt = ++this.cnt;
      this.$axios
        .post("/providers/checkInClicked", {
          providerUuid: this.uuidForProviderIn,
          providerName: this.nameForProviderIn,
          providerId: this.idForProviderIn,
        })
        .then(() => {
          console.log("employee checked in successfully");
        });
    },
    checkedOut() {
      this.cnt2 = ++this.cnt2;

      this.$axios
        .put("/providers/checkOutClicked", {
          providerUuid: this.uuidForProviderIn,
          status: "out",
        })
        .then((res) => {
          console.log("employee checked out successfully");
        });
    },
    showLeaveDialog() {
      this.dialog = true;
    },
    showVacationDialog() {
      this.vacationDialog = !this.vacationDialog;
    },
    payslipbtn() {
      this.$router.push("/hrpages/payslip/" + this.uuidForProviderIn);
    },
  },
  computed: {
    ...mapGetters(["getAllWorkingHoursForProvider"]),
  },
  components: { UpdateWorkingHours, LeaveDialogue, VacationDialogue },
};
</script>

<style scoped>
.hr-title {
  margin-top: 1em;
  margin-left: 2.9em;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #e0dede;
  width: 20%;
}
.clocking-header-section {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.clocking-header {
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #62769d;
  margin-bottom: 16px;
}
.clocking-link {
  text-decoration: none;
  color: #009688;
  font-weight: 500;
}
.clocking-section {
  min-height: 96px;
  max-height: 364px;
  background: #ffffff;
  /* box-shadow: 0px 0px 5px rgb(136 165 191 / 20%); */
  border-radius: 20px;
  margin-bottom: 2.5em;
  padding: 1.5em;
}
.clocking-title {
  font-weight: 600 !important;
  font-size: 1.2rem !important;
  line-height: 1.2rem !important;
  color: #000000;
  padding-bottom: 1em !important;
  width: 100% !important;
}
.clocking-inside {
  display: flex;
  flex-wrap: wrap;
}
.clocking-btn-in {
  height: 6vh !important;
  padding: 0.5em 0.7em !important;
  font-size: 1.1rem !important;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  outline: none !important;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2),
    -4px -4px 10px rgba(255, 255, 255, 0.8) !important;
  transition: all 0.3s !important;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
}
.clocking-btn-in:hover {
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
    inset -4px -4px 10px rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
.clocking-btn-out {
  height: 6vh !important;
  padding: 0.5em 0.7em !important;
  /* color: #6e6e6e; */
  font-size: 1.1rem !important;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  outline: none !important;
  /* background: #ebe7e7 !important; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2),
    -4px -4px 10px rgba(255, 255, 255, 0.8) !important;
  transition: all 0.3s !important;
  background-color: #f8825e;
  background-image: linear-gradient(315deg, #f87f5a 0%, #fe0944 74%);
}
.clocking-btn-out:hover {
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
    inset -4px -4px 10px rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
.annual-card {
  border-radius: 20px;
}
.emoji-box {
  text-align: center;
  margin-top: 1em;
}

.actual-number-balance {
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
}
.showLeaveOrVacationBtn {
  background: #35b5ac !important;
  color: white;
}
.left-days-balance {
  font-size: 16px;
  line-height: 20px;
  color: #62769d;
}
.contract-view-payslip-btn {
  color: #35b5ac;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 37px;
}
.salary-contract-header {
  font-weight: 600;
  font-size: 1.5rem;
}
.salary-card {
  border-radius: 10px;
}
.salary-section {
  display: flex;
  border-bottom: solid 0.5px #eeeeee;
  margin: 1em 0.4em;
  padding-bottom: 0.5em;
}
.bank-section {
  display: flex;
}
.warning-card {
  height: auto;
}
.warning-icon {
  font-size: 4rem !important;
  color: #4db6ac !important;
}
.warning-btn {
  display: flex;
  font-family: "CircularStd", sans-serif !important;
  /* background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%); */
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  color: white;
  padding: 0.9em 1.3em !important;
  font-size: 1.4rem !important;
  cursor: pointer;
  outline-style: none;
  border-radius: 5px;
  cursor: pointer;
}
.warning-btn:hover {
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #51eee3 74%);
}
.working-hours-title {
  margin-top: 1.5em;
  margin-left: 2.9em;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #e0dede;
  width: 20%;
}
table {
  width: 80vw;
  border-collapse: collapse;
  margin: 30px auto;
}

th {
  background: #35b5ac;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 1.1rem;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    /* Label the data */
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }
}
</style>
