<template>
  <v-container v-if="getExpensesForEmployee.length > 0">
    <GoBack />
    <p class="payslip-title">Payslip</p>
    <v-row class="justify-center">
      <v-col md="12">
        <v-card>
          <div class="payslip-card-body">
            <h4 class="payslip-subtitle">PAYSLIP FOR THE MONTH OF MAY 2022</h4>
            <v-row>
              <v-col md="6">
                <img
                  style="max-width: 30%"
                  src="../../../assets/img/laser avenue logo.jpg"
                />
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span class="employee-name mb-0">Laser Avenue</span>
                    </v-list-item-title>
                    <v-list-item-title
                      >Location:
                      <span class="employee-name mb-0">Amman, Jordan</span>
                    </v-list-item-title>
                    <v-list-item-title>N/A</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col md="6">
                <div class="invoice-details mb-20">
                  <h3 class="text-uppercase">Payslip #1111</h3>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Agents On Cloud</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="12" class="mb-20">
                <v-list-item four-line>
                  <v-list-item-content>
                    <v-list-item-title>
                      Employee Name:
                      <span class="employee-name mb-0">
                        {{ info[0].firstName }} {{ info[0].lastName }}
                      </span></v-list-item-title
                    >
                    <v-list-item-title v-if="info[0].RoleId == '1'"
                      >Position:
                      <span class="employee-name"
                        >Doctor</span
                      ></v-list-item-title
                    >
                    <v-list-item-title v-if="info[0].RoleId == '2'"
                      >Position:
                      <span class="employee-name"
                        >Doctor</span
                      ></v-list-item-title
                    >
                    <v-list-item-title v-if="info[0].RoleId == '3'"
                      >Position:
                      <span class="employee-name"
                        >Doctor</span
                      ></v-list-item-title
                    >
                    <v-list-item-title
                      >Employee ID:
                      <span class="employee-name">
                        {{ getExpensesForEmployee[0].provider_id }}
                      </span>
                    </v-list-item-title>
                    <v-list-item-title
                      >Joining Date:
                      <span class="employee-name">
                        {{ info[0].createdAt.substring(0, 10) }}
                      </span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <div>
                  <h4 class="mb-10"><strong>Earnings</strong></h4>
                  <table>
                    <tbody>
                      <tr>
                        <td data-column="USERNAME">
                          <strong>Basic Salary</strong>
                          <span class="earnings-span-dollar"
                            >{{ getExpensesForEmployee[0].basic_Salary }}.00
                            JOD</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td data-column="USERNAME">
                          <strong>Incentives</strong>
                          <span class="earnings-span-dollar"
                            >{{ getExpensesForEmployee[0].incentive }}.00
                            JOD</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td data-column="USERNAME">
                          <strong>Service Cut</strong>
                          <span class="earnings-span-dollar"
                            >{{ getExpensesForEmployee[0].service_cut }}.00
                            JOD</span
                          >
                        </td>
                      </tr>

                      <tr>
                        <td data-column="USERNAME">
                          <strong>Total Earnings</strong>
                          <span class="earnings-span-dollar">{{
                            parseInt(getExpensesForEmployee[0].basic_Salary) +
                            parseInt(getExpensesForEmployee[0].incentive) +
                            parseInt(getExpensesForEmployee[0].service_cut)
                          }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
              <v-col md="6">
                <div>
                  <h4 class="mb-10"><strong>Deductions</strong></h4>
                  <table>
                    <tbody>
                      <tr>
                        <td data-column="USERNAME">
                          <strong>Discount </strong>
                          <span class="earnings-span-dollar"
                            >{{ getExpensesForEmployee[0].discount }}.00
                            JOD</span
                          >
                        </td>
                      </tr>

                      <tr>
                        <td data-column="USERNAME">
                          <strong>Total Deduction</strong>
                          <span class="earnings-span-dollar">{{
                            parseInt(getExpensesForEmployee[0].discount)
                          }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
              <v-col md="12">
                <p>
                  <strong
                    >Net Salary:
                    <span class="netsalary"
                      >{{
                        parseInt(getExpensesForEmployee[0].basic_Salary) +
                        parseInt(getExpensesForEmployee[0].incentive) +
                        (parseInt(getExpensesForEmployee[0].service_cut) -
                          parseInt(getExpensesForEmployee[0].discount))
                      }}
                      JOD</span
                    ></strong
                  >
                </p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import GoBack from "../../../components/GoBack.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    this.actionForGettingExpensesForProvider(
      "a7149319-a90e-410e-b5a1-0a0fd6349502"
    );
    this.getProviders(this.$route.params.Payslip);
  },
  data() {
    return {
      total: null,
    };
  },

  methods: {
    ...mapActions(["actionForGettingExpensesForProvider", "getProviders"]),
  },
  computed: {
    ...mapGetters(["getExpensesForEmployee", "info"]),
  },
  watch: {},
  components: { GoBack },
};
</script>
<style scoped>
.payslip-title {
  margin-top: 1em;
  margin-left: 2.9em;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 20%;
}
.payslip-card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.payslip-subtitle {
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  margin: 0 0 20px;
}
.employee-name {
  font-size: 1.2rem;
  font-weight: 500;
}
.invoice-details {
  float: right;
  text-align: right;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  color: #212529 !important;
  vertical-align: top;
  border-color: #dee2e6;
}

th {
  background: #35b5ac;
  color: white;
  font-weight: bold;
}
.earnings-span-dollar {
  float: right;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 1.1rem;
}
.netsalary {
  font-size: 1.3rem;
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
