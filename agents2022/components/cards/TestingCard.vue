/// HMTL File

<template>
  <div v-if="getAllHours.length > 0">
    <div class="card">
      <v-col md="12">
        <v-row>
          <v-col md="6">
            <div class="card-img" @click="movingToProviderProfileBtn">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
                alt=""
                srcset=""
              />
            </div>
          </v-col>
          <v-col md="6">
            <div class="card-option">
              <v-row class="flex-column">
                <h3 class="font-weight-bold">
                  {{ showAllProviders.firstName }}
                </h3>
                <h5>{{ showAllProviders.minor }}</h5>
              </v-row>

              <TheElipsesMenu
                @deleteBtn="deleteBtn(showAllProviders.id)"
                @updateBtn="updateBtn"
              />
              <UpdateDialog
                :dialog.sync="dialog"
                :idForProvider="idForProvider"
                :uuidForProviderIn="uuidForProviderIn"
                :nameForProvider="nameForProvider"
                :lastNameForProviderIn="lastNameForProviderIn"
                :ageForProviderIn="ageForProviderIn"
                :genderForProviderIn="genderForProviderIn"
                :phoneForProvider="phoneForProvider"
                :educationForProviderIn="educationForProviderIn"
                :specialityForProvider="specialityForProvider"
                :minorForProvider="minorForProvider"
              />
              <DeleteDialog :dialog3.sync="dialog3" />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <hr class="teal lighten-5 mb-3" />

      <v-col md="12">
        <v-row>
          <v-col md="6" class="mb-3">
            <v-row>
              <span class="colors-days mr-3 font-weight-bold"> Sunday</span>
              <span class="hours-color">
                {{ getAllHours[index_of_array].sunday.from }}--{{
                  getAllHours[index_of_array].sunday.to
                }}
              </span>
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row>
              <span class="colors-days mr-3 font-weight-bold" color="#009688">
                Monday</span
              >
              <span class="hours-color" color="#009688">
                {{ getAllHours[index_of_array].monday.from }}--{{
                  getAllHours[index_of_array].monday.to
                }}</span
              >
            </v-row></v-col
          >
          <v-col md="6" class="mb-3">
            <v-row>
              <span class="colors-days mr-3 font-weight-bold" color="#009688">
                Tuesday</span
              >

              <span color="#009688" class="hours-color">
                {{ getAllHours[index_of_array].tuesday.from }}--{{
                  getAllHours[index_of_array].tuesday.to
                }}</span
              >
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row>
              <span class="colors-days mr-2 font-weight-bold" color="#009688">
                Wednes.</span
              >

              <span color="#009688" class="hours-color">
                {{ getAllHours[index_of_array].wednesday.from }}--{{
                  getAllHours[index_of_array].wednesday.to
                }}</span
              >
            </v-row>
          </v-col>

          <v-col md="6" class="mb-3">
            <v-row>
              <span class="colors-days mr-3 font-weight-bold" color="#009688">
                Thur.</span
              >
              <span color="#009688" class="hours-color">
                {{ getAllHours[index_of_array].thursday.from }}--{{
                  getAllHours[index_of_array].thursday.to
                }}</span
              >
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row>
              <span class="colors-days mr-3 font-weight-bold" color="#009688">
                Friday</span
              >
              <span color="#009688" class="hours-color">
                {{ getAllHours[index_of_array].friday.from }}--{{
                  getAllHours[index_of_array].friday.to
                }}</span
              >
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row>
              <p class="colors-days mr-3 font-weight-bold" color="#009688">
                Satur.
              </p>
              <span color="#009688" class="hours-color">
                {{ getAllHours[index_of_array].saturday.from }}--{{
                  getAllHours[index_of_array].saturday.to
                }}</span
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <!-- ///////////////////////////////// -->
      <!-- {{ getServicesRelatedToProvider }}
        <v-row v-for="service in allServices">
          <p
            class="text-categories font-weight-bold black--text"
            v-if="service.providerId == showAllProviders.uuid"
          >
            service :
            <span class="font-weight-regular">{{ service.service_name }}</span>
          </p>
        </v-row> -->
      <!-- ///////////////////////////////////////////////// -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TheElipsesMenu from "../TheElipsesMenu.vue";
import PopupSuccess from "../PopupSuccess.vue";
import UpdateDialog from "../dialogue/updateDialog.vue";
import DeleteDialog from "../dialogue/DeleteDialog.vue";

export default {
  props: {
    showAllProviders: {
      type: Object,
    },
    index_of_array: {
      type: Number,
    },
  },
  data() {
    return {
      index: -1,
      allServices: [],
      show: true,
      deletedBtn: false,
      dialog: false,
      dialog3: false,
      idForProvider: "",
      uuidForProviderIn: "",
      nameForProvider: "",
      lastNameForProviderIn: "",
      ageForProviderIn: "",
      genderForProviderIn: "",
      phoneForProvider: "",
      educationForProviderIn: "",
      specialityForProvider: "",
      minorForProvider: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getProviderWorkingHours"),
      //   this.$store.dispatch("getProviderServices");
      await this.getProviderServices();
  },
  methods: {
    ...mapActions(["getProviderServices"]),
    movingToProviderProfileBtn: function () {
      this.$router.push("/providerfullscreen/" + this.showAllProviders.uuid);
    },

    deleteBtn(id) {
      try {
        if (confirm("Are you sure you want to delete this provider?")) {
          // this.$axios.delete("/providers/deleteProvider/" + uuid);
          this.$axios
            .put("/providers/deleteProvider", {
              status: "deleted",
              providerId: this.showAllProviders.id,
            })
            .then((res) => console.log(res.data, " تم وصلت"));
          this.dialog3 = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    updateBtn() {
      this.$store.commit(
        "SET_PROVIDER_SPECIALITY_ELIPSE",
        this.showAllProviders.major
      );
      this.idForProvider = this.showAllProviders.id;
      this.uuidForProviderIn = this.showAllProviders.uuid;
      this.nameForProvider = this.showAllProviders.firstName;
      this.lastNameForProviderIn = this.showAllProviders.lastName;
      this.ageForProviderIn = this.showAllProviders.age;
      this.genderForProviderIn = this.showAllProviders.gender;
      this.phoneForProvider = this.showAllProviders.phone;
      this.educationForProviderIn = this.showAllProviders.education;
      this.specialityForProvider = this.showAllProviders.major;
      this.minorForProvider = this.showAllProviders.minor;
      this.dialog = true;
    },
  },

  computed: {
    ...mapGetters(["getAllHours", "getAllServicesWithProviders"]),
    getServicesRelatedToProvider: function () {
      let arr1 = this.$store.getters.listingProvidersWithResponse;
      let arr2 = this.getAllServicesWithProviders;
      let res = [];
      res = arr1.map((el) => {
        return el.uuid;
      });
      let res2 = [];
      res = res.forEach((el) => {
        arr2?.map((element) => {
          if (element.providerId == el) {
            res2.push(
              (res.providerId = {
                service_name: element.service_name,
                providerId: element.providerId,
              })
            );
          }
        });
        this.allServices = res2;
      });
    },
  },
  components: { TheElipsesMenu, PopupSuccess, UpdateDialog, DeleteDialog },
};
</script>

/// CSS FILE

<style lang="scss" scoped>
.card {
  width: 370px;
  height: 32vh;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #009688;
  box-sizing: border-box;
}
.card:hover {
  transform: scale(1.02);
  transition: 0.2s;
}
.card-img {
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
}
.card-img img {
  width: 100%;
  height: 100%;
  border-radius: 50% !important;
}

.card-option {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1em;
}
.card-option h3 {
  color: #009688;
  margin-bottom: 0;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: 400;
}
.card-option h5 {
  color: #009688;
}
.colors-days {
  color: #004d40;
}
.hours-color {
  color: #4db6ac;
}
.elipses {
  color: #009688;
}
</style>
