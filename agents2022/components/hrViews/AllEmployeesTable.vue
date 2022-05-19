<template>
  <v-col md="12">
    <v-row>
      <v-card
        class="ma-1 pa-3 elevation-5"
        v-for="employeesInfo in info"
        v-if="employeesInfo.RoleId == 1 && type == '1'"
        :key="employeesInfo.id"
      >
        <div class="card-content">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
            alt=""
            srcset=""
            class="card-img-employee"
          />
          <p class="available-employee-name">
            Dr.{{ employeesInfo.firstName }}
          </p>
          <button
            @click="
              viewContract(
                employeesInfo.id,
                employeesInfo.uuid,
                employeesInfo.firstName,
                employeesInfo.lastName,
                employeesInfo.age,
                employeesInfo.gender,
                employeesInfo.phone,
                employeesInfo.education,
                employeesInfo.major,
                employeesInfo.minor,
                employeesInfo.status
              )
            "
            class="contract-btn"
          >
            View Contract
          </button>
        </div>
      </v-card>
      <v-card
        class="ma-1 pa-3 elevation-5"
        v-for="employeesInfo in info"
        v-if="employeesInfo.RoleId == 2 && type == '2'"
        :key="employeesInfo.id"
      >
        <div class="card-content">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
            alt=""
            srcset=""
            class="card-img-employee"
          />
          <p class="available-employee-name">
            Dr.{{ employeesInfo.firstName }}
          </p>
          <button
            @click="
              viewContract(
                employeesInfo.id,
                employeesInfo.uuid,
                employeesInfo.firstName,
                employeesInfo.lastName,
                employeesInfo.age,
                employeesInfo.gender,
                employeesInfo.phone,
                employeesInfo.education,
                employeesInfo.major,
                employeesInfo.minor,
                employeesInfo.status
              )
            "
            class="contract-btn"
          >
            View Contract
          </button>
        </div>
      </v-card>
      <v-card
        class="ma-1 pa-3 elevation-5"
        v-for="employeesInfo in info"
        v-if="employeesInfo.RoleId == 3 && type == '3'"
        :key="employeesInfo.id"
      >
        <div class="card-content">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
            alt=""
            srcset=""
            class="card-img-employee"
          />
          <p class="available-employee-name">
            {{ employeesInfo.firstName }}
          </p>
          <button
            @click="
              viewContract(
                employeesInfo.id,
                employeesInfo.uuid,
                employeesInfo.firstName,
                employeesInfo.lastName,
                employeesInfo.age,
                employeesInfo.gender,
                employeesInfo.phone,
                employeesInfo.education,
                employeesInfo.major,
                employeesInfo.minor,
                employeesInfo.status
              )
            "
            class="contract-btn"
          >
            View Contract
          </button>
        </div>
      </v-card>
    </v-row>
  </v-col>
  <!-- <v-container>
    <v-col md="12">
      <v-row>
        <table>
        
          <tbody>
            {{
              getAllProvidersSalaries
            }}
            <tr
              v-for="employeesInfo in arrayIncludeAllInfo"
              :key="employeesInfo.id"
            >
              <td>{{ employeesInfo.uuid }}</td>
              <td data-column="ID">
                {{ employeesInfo.createdAt.substring(0, 10) }}
              </td>
            
              <td data-column="ID">{{ employeesInfo.salary }}</td>
              <td data-column="ID">
                <NuxtLink class="clocking-link" to="/hrpages/payslip"
                  >Generate Payslip</NuxtLink
                >
              </td>
              
            </tr>
          </tbody>
        </table>
      </v-row>
    </v-col>
  </v-container> -->
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    type: {
      type: String,
    },
  },
  mounted() {
    if (this.info.length > 0) {
      return;
    } else {
      this.getProviders();
    }
  },
  data() {
    return {
      arrayIncludeAllInfo: [],
    };
  },
  methods: {
    ...mapActions(["getProviders"]),

    viewContract(
      id,
      uuid,
      firstName,
      lastName,
      age,
      gender,
      phone,
      education,
      major,
      minor,
      status
    ) {
      this.$router.push(
        "/hrpages/contract/" +
          id +
          "--" +
          uuid +
          "--" +
          firstName +
          "--" +
          lastName +
          "--" +
          age +
          "--" +
          gender +
          "--" +
          phone +
          "--" +
          education +
          "--" +
          major +
          "--" +
          minor +
          "--" +
          status
      );
    },
  },
  computed: {
    ...mapGetters(["info"]),

    // getAllProvidersSalaries() {
    //   let salaryElement = {};
    //   let arr = [];
    //   this.info.forEach((element) => {
    //     this.getAllFinanceInfo.forEach((el) => {
    //       if (element.id == el.id) {
    //         salaryElement = {
    //           salary: el.salary,
    //         };
    //         let arrayIncludeAll = {
    //           ...element,
    //           ...salaryElement,
    //         };
    //         // this.arrayIncludeAllInfo.push(arrayIncludeAll);
    //         arr.push(arrayIncludeAll);
    //       }
    //     });
    //   });
    //   this.arrayIncludeAllInfo = arr;
    // },
  },
  watch: {},
};
</script>
<style scoped>
.clocking-link {
  /* text-decoration: none; */
  color: #009688;
  font-weight: 500;
}
.contract-btn {
  /* font-family: "CircularStd", sans-serif !important; */
  /* background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%); */
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  color: white;
  padding: 0.3em 0.7em !important;
  font-size: 1.1rem !important;
  cursor: pointer;
  outline-style: none;
  border-radius: 5px;
  cursor: pointer;
}
.contract-btn:hover {
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #51eee3 74%);
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
</style>
