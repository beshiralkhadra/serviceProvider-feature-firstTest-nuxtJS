<template>
  <v-container>
    <v-toolbar elevation="20" class="main" shaped>
      <v-row>
        <v-col>
          <v-autocomplete
            cols="12"
            md="3"
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="filterSearch"
            hide-no-data
            hide-details
            placeholder="Choose your item"
            solo-inverted
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="selectPeriod"
            :items="days"
            class="filterSearch"
            hide-details
            placeholder="Choose Period"
            solo-inverted
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            cols="12"
            md="3"
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="filterSearch"
            hide-no-data
            hide-details
            placeholder="Choose Periority"
            solo-inverted
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn class="btn-result">Results</v-btn>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn class="btn-reset">Claer</v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-col md="12">
      <v-row>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employeee ID</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="loopInTimeAttendance in getAllTimeAttendanceInfo"
              :key="loopInTimeAttendance.id"
            >
              <td data-column="USERNAME">
                {{ loopInTimeAttendance.providerName }}
              </td>
              <td>{{ loopInTimeAttendance.providerUuid }}</td>
              <td data-column="ID">{{ loopInTimeAttendance.date }}</td>
              <td data-column="ID">{{ loopInTimeAttendance.checkIn }}</td>
              <td data-column="ID">{{ loopInTimeAttendance.checkOut }}</td>
              <td
                data-column="ID"
                v-if="loopInTimeAttendance.checkOut == 'null'"
              >
                <span class="status-style-present">Present</span>
              </td>
              <td data-column="ID" v-else>
                <span class="status-style-out">Out</span>
              </td>
            </tr>
          </tbody>
        </table>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("actionForGettingAllTimeAttendance");
  },
  data() {
    return {
      selectPeriod: "",
      days: ["Today", "Week", "Month"],
    };
  },
  computed: {
    ...mapGetters(["getAllTimeAttendanceInfo"]),
  },
};
</script>

<style scoped>
.main {
  padding: 16px;
  height: 100px !important;
  background-color: #009688 !important;
}
.main .filterSearch {
  background-color: #fff;
}
.btn-reset {
  color: gray !important;
}
.btn-result {
  background-color: #000 !important;
  color: #fff !important;
}
.btn-result,
.btn-reset {
  padding: 23px !important;
}
table {
  width: 90%;
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
  padding: 15px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 1.1rem;
}
.status-style-present {
  color: #35b5ac;
  border: solid 1px #35b5ac;
  padding: 0.4em 0.7em;
  border-radius: 5px;
}
.status-style-out {
  color: red;
  border: solid 1px red;
  padding: 0.3em 1em;
  border-radius: 5px;
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
