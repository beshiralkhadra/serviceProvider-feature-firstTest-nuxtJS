<template>
  <v-card>
    <v-tabs v-model="tabs" centered>
      <v-tabs-slider
        circle
        color="teal darken-4
"
      >
      </v-tabs-slider>
      <v-tab class="teal--text font-weight-bold">Your Requests</v-tab>
      <v-tab-item>
        <v-container>
          <v-col md="12">
            <v-row>
              <table>
                <thead>
                  <tr>
                    <th>Request Type</th>
                    <th>Apply Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody v-if="getAllLeaveForProviders">
                  <tr
                    v-for="loopInLeaveGtters in getAllLeaveForProviders"
                    :key="loopInLeaveGtters.providerUuid"
                  >
                    <td data-column="ID" v-if="loopInLeaveGtters.requestedDays">
                      Vacation
                    </td>
                    <td data-column="ID" v-else>Leave Work</td>
                    <td data-column="ID">{{ loopInLeaveGtters.date }}</td>
                    <td data-column="USERNAME">{{ loopInLeaveGtters.from }}</td>
                    <td data-column="SERVICE">{{ loopInLeaveGtters.to }}</td>
                    <td data-column="ID">
                      <span
                        :class="[
                          loopInLeaveGtters.isApproved == 'accepted'
                            ? 'acceptedLeave'
                            : null,
                          loopInLeaveGtters.isApproved == 'on hold'
                            ? 'orginalStatus'
                            : 'null',
                          loopInLeaveGtters.isApproved == 'refused'
                            ? 'refusedLeave'
                            : 'null',
                        ]"
                      >
                        {{ loopInLeaveGtters.isApproved }}</span
                      >
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="getAllVacationsForProviders">
                  <tr
                    v-for="loopInVacationGetter in getAllVacationsForProviders"
                    :key="loopInVacationGetter.providerUuid"
                  >
                    <td
                      data-column="ID"
                      v-if="loopInVacationGetter.requestedDays"
                    >
                      Vacation
                    </td>
                    <td data-column="ID" v-else>Leave Work</td>
                    <td data-column="ID">{{ loopInVacationGetter.date }}</td>
                    <td data-column="USERNAME">
                      {{ loopInVacationGetter.from }}
                    </td>
                    <td data-column="SERVICE">{{ loopInVacationGetter.to }}</td>
                    <td data-column="ID">
                      <span
                        :class="[
                          loopInVacationGetter.isApproved == 'accepted'
                            ? 'acceptedLeave'
                            : null,
                          loopInVacationGetter.isApproved == 'on hold'
                            ? 'orginalStatus'
                            : 'null',
                          loopInVacationGetter.isApproved == 'refused'
                            ? 'refusedLeave'
                            : 'null',
                        ]"
                      >
                        {{ loopInVacationGetter.isApproved }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-row>
          </v-col>
        </v-container></v-tab-item
      >
      <v-tab class="teal--text font-weight-bold">Personal Info</v-tab>

      <v-tab-item>
        <v-card height="500">
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
        </v-card>
      </v-tab-item>
      <v-tab class="teal--text font-weight-bold">Appointments</v-tab>
      <v-tab-item>
        <v-card height="475">
          <div className="reservation-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Booked</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="detailedInfo in bringAllAppointmentsForSpecificProvider"
                  :key="detailedInfo.id"
                >
                  <td data-column="ID">{{ detailedInfo.id }}</td>
                  <td data-column="USERNAME">{{ detailedInfo.date }}</td>
                  <td data-column="SERVICE">{{ detailedInfo.from }}</td>
                  <td data-column="ID">{{ detailedInfo.to }}</td>
                  <td data-column="ID">{{ detailedInfo.booked }}</td>
                  <td data-column="SERVICE">{{ detailedInfo.createdAt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    nameForProviderIn: {
      type: String,
    },
    phoneForProviderIn: {
      type: String,
    },
    ageForProviderIn: {
      type: Number,
    },
    educationForProviderIn: {
      type: String,
    },
    specialityForProviderIn: {
      type: String,
    },
    minorForProviderIn: {
      type: String,
    },
  },
  data() {
    return {
      tabs: null,
    };
  },
  async mounted() {
    await this.$store.dispatch("getAllAppointmentsForSpecificProvider");
    this.$store.dispatch("actionForGettingAllLeaveWork");
    this.$store.dispatch("actionForGettingAllVacations");
  },
  computed: {
    ...mapGetters([
      "bringAllAppointmentsForSpecificProvider",
      "getAllLeaveForProviders",
      "getAllVacationsForProviders",
    ]),
  },
};
</script>

<style scoped>
table {
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
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
  text-align: left;
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
@media screen and (max-width: 769px) {
}
</style>
