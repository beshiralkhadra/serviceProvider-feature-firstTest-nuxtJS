<template>
  <v-container v-if="info.length > 0">
    <v-row no-gutters>
      <v-col md="12">
        <v-row class="mt-5 mb-6">
          <v-col md="4">
            <v-card class="py-2 px-4 elevation-5" height="50vh">
              <h2 class="cards-title">Available Employees</h2>

              <v-row style="height: 40vh">
                <v-col md="6" v-for="(item, i) in filteredData" :key="i">
                  <v-card class="ma-1 pa-3 elevation-5">
                    <div class="card-content">
                      <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
                        alt=""
                        srcset=""
                        class="card-img-employee"
                      />
                      <p class="available-employee-name">
                        Dr.{{ item.providerName }}
                      </p>
                      <p class="available-employee-time">
                        {{ item.checkIn }} --
                        {{ item.checkOut }}
                      </p>

                      <p
                        v-if="
                          item.status == 'present' && item.checkIn > '09:10'
                        "
                        class="late"
                      >
                        Late
                      </p>
                      <p
                        v-else-if="
                          item.status == 'present' && item.checkIn < '09:10'
                        "
                        class="present"
                      >
                        On Time
                      </p>
                      <p v-else class="out">Out</p>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-pagination
                v-model="page"
                :length="pages"
                @input="changePage"
                class="ma-4"
                height="100%"
              ></v-pagination>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card class="py-2 px-4 elevation-5" height="50vh">
              <h2 class="cards-title">Leaves</h2>
              <ViewLeaveTable />
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card class="py-2 px-4 elevation-5" height="50vh">
              <h2 class="cards-title">Vacations</h2>
              <ViewVacationTable />
            </v-card>
          </v-col>
          <!-- <v-col md="3">
            <v-card class="pa-2">
              <h2 class="cards-title">Pending Requests</h2>
            </v-card>
          </v-col> -->
        </v-row>
        <v-row>
          <v-col md="12">
            <v-row>
              <h1 class="categories-title">Our Doctors</h1>
              <AllEmployeesTable :type="'1'" />
            </v-row>
          </v-col>
          <v-col md="12">
            <v-row>
              <h1 class="categories-title">Our Assistants</h1>
              <AllEmployeesTable :type="'2'" />
            </v-row>
          </v-col>
          <v-col md="12">
            <v-row>
              <h1 class="categories-title">Our Specialists</h1>
              <AllEmployeesTable :type="'3'" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ViewLeaveTable from "../../components/hrViews/ViewLeaveTable.vue";
import ViewVacationTable from "../../components/hrViews/ViewVacationTable.vue";
import AllEmployeesTable from "../../components/hrViews/AllEmployeesTable.vue";

export default {
  mounted() {
    try {
      this.$store.dispatch("actionForGettingAllTimeAttendance");
      this.$store.dispatch("actionForGettingAllLeaveWork");
      if (this.info.length > 0) {
        return;
      } else {
        this.getProviders();
      }
    } catch (e) {
      console.log(e.toString());
    }
  },
  data() {
    return {
      pages: 0,
      page: 1,
      data: [],
      filteredData: [],
    };
  },
  methods: {
    ...mapActions(["getProviders"]),
  },
  computed: {
    ...mapGetters(["getAllTimeAttendanceInfo", "info"]),
  },
  watch: {
    getAllTimeAttendanceInfo() {
      try {
        const arr = [];
        this.getAllTimeAttendanceInfo.data.forEach((element) => {
          arr.push({
            providerName: element.providerName,
            checkIn: element.checkIn,
            checkOut: element.checkOut,
            status: element.status,
          });
        });
        this.data = arr;
        this.pages = Math.ceil(this.data.length / 4);
        this.filteredData = this.data.slice(0, 4);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  methods: {
    changePage() {
      let n = (this.page - 1) * 4;
      this.filteredData = this.data.slice(n, n + 4);
    },
  },
  components: { ViewLeaveTable, ViewVacationTable, AllEmployeesTable },
};
</script>

<style scoped>
.v-application p {
  margin-bottom: 0;
}
.cards-title {
  margin-top: 1em;
  /* margin-left: 2.9em; */
  font-style: normal;
  font-weight: 450;
  font-size: 1.5rem !important ;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 60%;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leave-card-content {
  display: flex;
}
.available-employee-name {
  font-style: normal;
  font-weight: 450;
  font-size: 1.1rem !important ;
  line-height: 37px;
  color: #004d40;
}
.available-employee-time {
  font-style: normal;
  font-weight: 350;
  font-size: 1.1rem !important ;
  line-height: 37px;
  color: #35b5ac;
}
.card-img-employee {
  width: 50%;
  border-radius: 50%;
}
.present {
  background: transparent;
  border: #35b5ac solid 1px !important;
  border-radius: 5px;
  color: #35b5ac;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
.out {
  background: transparent;
  border: red solid 1px !important;
  border-radius: 5px;
  color: red;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
.late {
  background: transparent;
  border: orange solid 1px !important;
  border-radius: 5px;
  color: orange;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
.categories-title {
  margin-top: 1em;
  /* margin-left: 2.9em; */
  font-style: normal;
  font-weight: 450;
  font-size: 1.8rem !important ;
  line-height: 37px;
  border-bottom: 1px solid #cfcccc;
  width: 90%;
}
</style>
