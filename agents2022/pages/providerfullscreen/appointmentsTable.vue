<template>
  <div className="reservation-table">
    <!-- {{ getAllAppointmentsForSpecificProvider }} -->
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
          <!-- <td data-column="ID">{{ detailedInfo.id }}</td>
          <td data-column="USERNAME">{{ detailedInfo.date }}</td>
          <td data-column="SERVICE">{{ detailedInfo.from }}</td>
          <td data-column="ID">{{ detailedInfo.to }}</td>
          <td data-column="ID">{{ detailedInfo.booked }}</td>
          <td data-column="SERVICE">{{ detailedInfo.createdAt }}</td> -->
          <!-- <td data-column="SERVICE"><v-icon small @click="deleteButton(detailedInfo.id)" style="color: red;">mdi-delete</v-icon></td> -->
          <!-- <td data-column="SERVICE"><v-icon small @click="editProvider(detailedInfo.id)" style="color: green;">mdi-pencil</v-icon></td> -->
          <!-- <td data-column="SERVICE">
            <v-text-field
              v-model="newEmail"
              type="email"
              name="newEmail"
              label="Email"
              required
            ></v-text-field>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  layout: "providrDashboardLayout",

  data() {
    return {
      newEmail: "",
    };
  },
  async mounted() {
    // await this.$store.dispatch("getAllAppointmentsForSpecificProvider");
  },
  methods: {},

  computed: {
    // ...mapGetters(["bringAllAppointmentsForSpecificProvider"]),
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
</style>
