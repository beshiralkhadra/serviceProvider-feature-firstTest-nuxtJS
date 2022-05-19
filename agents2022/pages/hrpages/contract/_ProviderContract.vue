<template>
  <div
    v-if="
      setSickAndAnnualBalances.length > 0 && getSalaryForEmployee.length > 0
    "
  >
    <v-container>
      <GoBack />
      <div class="contract-header-section">
        <p class="provider-contarct-title">Employee Contract</p>
        <span
          ><button
            class="contract-view-profile-btn"
            @click="viewProviderProfile"
          >
            View Profile
          </button></span
        >
      </div>
      <v-row class="pt-5">
        <v-col md="3" class="profile-user-info">
          <v-col md="12" class="user-profile-content">
            <div class="profile-subtitle">
              <h3>User Profile</h3>
              <v-row>
                <v-col md="12">
                  <small>Name</small>
                  <p>{{ nameForProviderIn }}</p>
                  <small>Provider Number</small>
                  <p>N/A</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col md="12" class="user-profile-content">
            <div class="profile-subtitle">
              <h3>Personal Info</h3>
              <v-row>
                <v-col md="6">
                  <small>Gender</small>
                  <p>{{ genderForProviderIn }}</p>
                  <small>Birth Date</small>
                  <p>N/A</p>
                  <small>Martial Status</small>
                  <p>N/A</p>
                </v-col>
                <v-col md="6">
                  <small>Age</small>
                  <p>{{ ageForProviderIn }} years old</p>
                  <small>Nationality</small>
                  <p>Jordanian</p>
                  <small>National ID</small>
                  <p>N/A</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col md="12">
            <div class="profile-subtitle">
              <h3>Contact Info</h3>
              <v-row>
                <v-col md="12">
                  <small>Email</small>
                  <p>N/A</p>
                  <small>Phone Number</small>
                  <p>{{ phoneForProviderIn }}</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-col>
        <v-col md="9" class="white">
          <v-col md="12">
            <div class="profile-subtitle">
              <v-row>
                <v-col md="12">
                  <div class="widget">
                    <div class="widget-head">
                      <span class="title">Profesional Info</span>
                    </div>
                    <v-row class="widget-body">
                      <v-col md="4">
                        <small>Job Title</small>
                        <p>Doctor</p>
                        <small>Work Type</small>
                        <p>Full Time</p>
                      </v-col>
                      <v-col md="4">
                        <small>Branch</small>
                        <p>N/A</p>
                        <small>Work Location</small>
                        <p>N/A</p>
                      </v-col>
                      <v-col md="4">
                        <small>Hiring Date</small>
                        <p>2021-6-12</p>
                        <small>End Of Employee Contract</small>
                        <p>N/A</p>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col md="12">
                  <UpdateSalaryDialog :salaryDialog.sync="salaryDialog" />

                  <div class="widget">
                    <div class="widget-head">
                      <span class="title">Salary Package</span>
                      <span>
                        <TheSalaryElipse @updateBtn="updateBtn" />
                      </span>
                    </div>
                    <v-row class="widget-body">
                      <v-col md="3">
                        <small>Basic Salary</small>
                        <p>{{ getSalaryForEmployee[0].basicSalary }}.00 JOD</p>
                      </v-col>
                      <v-col md="3">
                        <small>Social Security Salary</small>
                        <p>{{ getSalaryForEmployee[0].basicSalary }}.00 JOD</p>
                      </v-col>
                      <v-col md="3">
                        <small>Total Salary</small>
                        <p>{{ getSalaryForEmployee[0].basicSalary }}.00 JOD</p>
                      </v-col>
                    </v-row>
                    <v-row class="widget-body">
                      <v-col md="3">
                        <small>Social Committee</small>
                        <p>1.00 JOD</p>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col md="12">
                  <div class="widget">
                    <div class="widget-head">
                      <span class="title">TimeOff Balance</span>
                    </div>
                    <v-row class="widget-body">
                      <v-col md="6">
                        <v-row class="justify-center">
                          <div class="pa-5">
                            <img
                              src="https://d2is554mdy16bu.cloudfront.net/assets/timeoff_emojis/house-b0169f734b2364319a8ecca412dd19ed4e05a95fbe326d3def934eaf442929c1.png"
                            />
                            <small>Annual Vacation</small>
                            <div>
                              <span class="actual-number-balance">{{
                                setSickAndAnnualBalances[0].annualBalance
                              }}</span
                              ><span class="left-days-balance">/14</span>
                            </div>
                            <small>Days</small>
                          </div>
                        </v-row>
                      </v-col>
                      <v-col md="6">
                        <v-row>
                          <div class="pa-5">
                            <img
                              src="https://d2is554mdy16bu.cloudfront.net/assets/timeoff_emojis/sick-1b1f2fa79bdbb5b4b57bd4d61d466b1f81046d28c29085e4579d835d1ac2f5a4.png"
                            />
                            <small>Sick Days Off</small>
                            <div>
                              <span class="actual-number-balance">{{
                                setSickAndAnnualBalances[0].sickBalance
                              }}</span
                              ><span class="left-days-balance">/14</span>
                            </div>
                            <small>Days</small>
                          </div>
                        </v-row>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import GoBack from "../../../components/GoBack.vue";
import TheElipseActions from "../../../components/elipses/TheElipseActions.vue";
import TheSalaryElipse from "../../../components/elipses/TheSalaryElipse.vue";
import UpdateSalaryDialog from "../../../components/dialogue/updateSalaryDialog.vue";

export default {
  async mounted() {
    await this.actionForGettingSalaryForProvider(
      "a7149319-a90e-410e-b5a1-0a0fd6349502"
    );
    this.testparam = JSON.stringify(this.$route.params.ProviderContract);
    let [
      id,
      uuid,
      name,
      lastName,
      age,
      gender,
      phone,
      education,
      major,
      minor,
      status,
    ] = this.testparam.split("--");
    const [newStatus] = status.split('"');
    id = id.substring(1);
    this.idForProviderIn = id;
    this.uuidForProviderIn = uuid;
    this.nameForProviderIn = name;
    this.lastNameForProviderIn = lastName;
    this.ageForProviderIn = age;
    this.genderForProviderIn = gender;
    this.phoneForProviderIn = phone;
    this.educationForProviderIn = education;
    this.majorForProviderIn = major;
    this.minorForProvider = minor;
    this.statusForProviderIn = newStatus;
    this.$store.dispatch("actionsForGettingAllBalances");
    this.$store.commit("SET_PROVIDERUUID_FROM_CONTRACT", uuid);
  },
  data() {
    return {
      salaryDialog: false,
      idForProviderIn: null,
      uuidForProviderIn: null,
      nameForProviderIn: null,
      lastNameForProviderIn: null,
      ageForProviderIn: null,
      genderForProviderIn: null,
      phoneForProviderIn: null,
      educationForProviderIn: null,
      majorForProviderIn: null,
      minorForProvider: null,
      statusForProviderIn: null,
    };
  },
  methods: {
    ...mapActions(["actionForGettingSalaryForProvider"]),

    viewProviderProfile() {
      this.$router.push("/providerfullscreen/" + this.uuidForProviderIn);
    },
    updateBtn() {
      this.salaryDialog = true;
    },
  },
  computed: {
    ...mapGetters(["setSickAndAnnualBalances", "getSalaryForEmployee"]),
  },
  components: { GoBack, TheElipseActions, TheSalaryElipse, UpdateSalaryDialog },
};
</script>

<style scoped>
.contract-header-section {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.contract-view-profile-btn {
  color: #35b5ac;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 37px;
}
.contract-view-profile-btn:hover {
  border-bottom: 1px solid #35b5ac;
}
.provider-contarct-title {
  margin-top: 1em;
  /* margin-left: 2.9em; */
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 20%;
}
.user-profile-content {
  margin-bottom: 1em;
  /* margin-left: 2.9em; */

  border-bottom: 1px solid #cfcccc;
  width: 80% !important;
}
.profile-subtitle {
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 600;
}
.profile-user-info {
  background-color: #f5f5f5;
  margin-bottom: 30px;
}
.profile-user-info small {
  color: #8b8b8b;
}

.profile-user-info p {
  font-weight: 600;
}
.widget {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #eeeeee;
}
.widget-head {
  display: flex;
  justify-content: space-between;
}
.widget > .widget-head .title {
  font-size: 1.5rem !important;
}
.widget small {
  color: #8b8b8b;
}
.widget p {
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
