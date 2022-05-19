<template>
  <v-container>
    <p class="time-attendance-title">Time Attendance</p>
    <v-row class="justify-center">
      <v-col md="12">
        <v-card>
          <div class="time-attendance-header">
            <div class="time-attendance-header-body">
              <!-- <v-avatar color="indigo">
                <v-icon dark> mdi-account-circle </v-icon>
              </v-avatar> -->
              <v-row>
                <v-col md="3">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong>Dr.Tareq Mohammad</strong>
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Dental Surgery</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col md="3">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong>Employee ID</strong></v-list-item-title
                      >
                      <v-list-item-subtitle>0000</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col md="3">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong>Joining Date</strong></v-list-item-title
                      >
                      <v-list-item-subtitle>12 Jan 2020</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col md="3">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong>Department</strong></v-list-item-title
                      >
                      <v-list-item-subtitle>Doctors</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col md="12">
        <v-card class="mt-5">
          <v-row class="justify-center">
            <v-col md="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="times-average"
                    ><strong class="sub-times-average teal--text">08:00</strong>
                  </v-list-item-title>
                  <v-list-item-subtitle class="times-average"
                    >Average Working Hours</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col md="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="times-average"
                    ><strong class="sub-times-average teal--text"
                      >10:30 AM</strong
                    >
                  </v-list-item-title>
                  <v-list-item-subtitle class="times-average"
                    >Average In Time</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col md="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="times-average"
                    ><strong class="sub-times-average teal--text"
                      >05:00 PM</strong
                    >
                  </v-list-item-title>
                  <v-list-item-subtitle class="times-average"
                    >Average Out Time</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col md="10">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Working Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                  <tr>
                    <td data-column="USERNAME"></td>
                    <td></td>
                    <td data-column="ID"></td>
                    <td data-column="ID"></td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.time-attendance-title {
  margin-top: 1em;
  margin-left: 2.9em;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 20%;
}
.times-average {
  text-align: center !important;
}
.sub-times-average {
  font-size: 1.4rem;
}
/* .time-attendance-header {
  box-sizing: border-box;
} */
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
