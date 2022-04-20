/// HMTL File

<template>
  <div v-if="getAllHours.length > 0">
    <div class="card">
      <div class="card-img" @click="movingToProviderProfileBtn">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"
          alt=""
          srcset=""
        />
      </div>
      <div class="card-body">
        <div class="card-option">
          <h3 class="font-weight-bold">{{ showAllProviders.firstName }}</h3>
          <TheElipsesMenu
            @deleteBtn="deleteBtn(showAllProviders.id)"
            @updateBtn="updateBtn"
          />
        </div>
        <UpdateDialog
          :dialog.sync="dialog"
          :idForProvider="idForProvider"
          :nameForProvider="nameForProvider"
          :phoneForProvider="phoneForProvider"
          :specialityForProvider="specialityForProvider"
          :minorForProvider="minorForProvider"
        />
        <DeleteDialog :dialog3.sync="dialog3" />
        <!-- <div v-if="deletedBtn">
          <PopupSuccess />
        </div> -->
        <h5>{{ showAllProviders.major }}</h5>
        <hr class="teal lighten-5 mt-2" />
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
        <v-row class="workingHours-card mt-3">
          <span class="colors-days pr-3 font-weight-bold"> Sunday</span>
          <span class="hours-color pr-6">
            {{ getAllHours[index_of_array].sunday.from }}--{{
              getAllHours[index_of_array].sunday.to
            }}
          </span>

          <span class="colors-days pr-3 font-weight-bold" color="#009688">
            Monday</span
          >
          <span class="hours-color" color="#009688">
            {{ getAllHours[index_of_array].monday.from }}--{{
              getAllHours[index_of_array].monday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="colors-days mr-3 font-weight-bold" color="#009688">
            Tuesday</span
          >
          <span color="#009688" class="hours-color mr-6">
            {{ getAllHours[index_of_array].tuesday.from }}--{{
              getAllHours[index_of_array].tuesday.to
            }}</span
          >

          <span class="colors-days pr-3 font-weight-bold" color="#009688">
            Wednesday</span
          >
          <span color="#009688" class="hours-color">
            {{ getAllHours[index_of_array].wednesday.from }}--{{
              getAllHours[index_of_array].wednesday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="colors-days mr-3 font-weight-bold" color="#009688">
            Thursday</span
          >
          <span color="#009688" class="hours-color pr-6">
            {{ getAllHours[index_of_array].thursday.from }}--{{
              getAllHours[index_of_array].thursday.to
            }}</span
          >

          <span class="colors-days pr-3 font-weight-bold" color="#009688">
            Friday</span
          >
          <span color="#009688" class="hours-color">
            {{ getAllHours[index_of_array].friday.from }}--{{
              getAllHours[index_of_array].friday.to
            }}</span
          >
        </v-row>
        <v-row class="workingHours-card">
          <span class="colors-days pr-3 font-weight-bold" color="#009688">
            Saturday</span
          >
          <span color="#009688" class="hours-color">
            {{ getAllHours[index_of_array].saturday.from }}--{{
              getAllHours[index_of_array].saturday.to
            }}</span
          >
        </v-row>
        <div class="card-body-footer"></div>
      </div>
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
      nameForProvider: "",
      phoneForProvider: "",
      specialityForProvider: "",
      minorForProvider: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getProviderWorkingHours"),
      //   this.$store.dispatch("getProviderServices");
      this.getProviderServices();
  },
  methods: {
    ...mapActions(["getProviderServices"]),
    movingToProviderProfileBtn: function () {
      this.$router.push(
        "/providerfullscreen/" +
          this.showAllProviders.id +
          "--" +
          this.showAllProviders.uuid +
          "--" +
          this.showAllProviders.firstName +
          "--" +
          this.showAllProviders.lastName +
          "--" +
          this.showAllProviders.age +
          "--" +
          this.showAllProviders.gender +
          "--" +
          this.showAllProviders.phone +
          "--" +
          this.showAllProviders.education +
          "--" +
          this.showAllProviders.major +
          "--" +
          this.showAllProviders.status +
          "--" +
          this.showAllProviders.minor
      );
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
          // console.log("sssssssssssss");
          // this.deletedBtn = !this.deletedBtn;
          // return this.showAllProviders.filter((items) => {
          //   return items.uuid != uuid;
          // });
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
      this.nameForProvider = this.showAllProviders.firstName;
      console.log(this.nameForProvider);
      this.idForProvider = this.showAllProviders.id;
      this.phoneForProvider = this.showAllProviders.phone;
      this.specialityForProvider = this.showAllProviders.major;
      this.minorForProvider = this.showAllProviders.minor;
      this.dialog = true;
    },
  },
  // mounted() {
  //   this.showAllProviders();
  // },
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
  height: 550px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #009688;
  box-sizing: border-box;
  position: relative;
}
.card:hover {
  transform: scale(1.02);
  transition: 0.2s;
}
.card-img {
  height: 55%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.card-img img {
  width: 100%;
  height: 100%;
}
.card-body {
  height: 27%;
  color: hsl(215, 51%, 70%);
  font-size: 14px;
  padding-bottom: 10px;
}
.card-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.card-body h3 {
  color: #009688;
  margin-bottom: 0;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: 400;
}
.card-body h5 {
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
.card-body p {
  font-weight: 300;
  padding-top: 10px;
  height: 100px;
}
.card-body-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.card-body-footer div {
  position: relative;
}
.card-body-footer div:nth-child(1) {
  color: #009688;
}
.card-body-footer div:nth-child(2) {
  padding-left: 22px;
  color: #009688;
}
</style>
