<template>
  <div>
    <v-dialog v-model="dialog2" max-width="600px">
      <v-col md="12">
        <v-row class="align-center justify-center">
          <v-card>
            {{ updateUuid }}
            {{ $store.getters.getAllWorkingHoursForProvider[0] }}
            <v-card-title>
              <span class="update-hours-title text-h5"
                >Update Working Hours</span
              >
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Sunday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1Sun"
                        type="time"
                        label="Time 1S"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2Sun"
                        type="time"
                        name="timeSun"
                        label="Time 2S"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>

                    <v-checkbox
                      v-model="checkbox1"
                      @click="checkedBox1()"
                      :label="`Off`"
                      hide-details
                    ></v-checkbox>
                  </v-row>
                  <!------------------------------------------ monday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Monday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1M"
                        type="time"
                        name="time1M"
                        label="Time 1M"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2M"
                        type="time"
                        name="time2M"
                        label="Time 2M"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox2"
                      @click="checkedBox2()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                  <!----------------------------------------------- tuesday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Tuesday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1Tu"
                        type="time"
                        name="time1Tu"
                        label="Time 1Tu"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2Tu"
                        type="time"
                        name="time2Tu"
                        label="Time 2Tu"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox3"
                      @click="checkedBox3()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                  <!---------------------------------------------- wednesday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Wednesday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1W"
                        type="time"
                        name="time1W"
                        label="Time 1W"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2W"
                        type="time"
                        name="time2W"
                        label="Time 2W"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox4"
                      @click="checkedBox4()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                  <!--------------------------------------------- thurday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Thursday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1Th"
                        type="time"
                        name="time1Th"
                        label="Time 1Th"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2Th"
                        type="time"
                        name="time2Th"
                        label="Time 2Th"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox5"
                      @click="checkedBox5()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                  <!------------------------------------------ friday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Friday"
                        readonly
                        solo
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1F"
                        type="time"
                        name="time1F"
                        label="Time 1F"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2F"
                        type="time"
                        name="time2F"
                        label="Time 2F"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox6"
                      @click="checkedBox6()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                  <!-------------------------------------------------- saturday  -->
                  <v-row class="justify-space-around">
                    <v-col md="3">
                      <v-text-field
                        value="Saturday"
                        readonly
                        solo
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time1Sat"
                        type="time"
                        name="time1Sat"
                        label="Time 1Sat"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col md="3">
                      <v-text-field
                        v-model="time2Sat"
                        type="time"
                        name="time2Sat"
                        label="Time 2Sat"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      v-model="checkbox7"
                      @click="checkedBox7()"
                      :label="`Off`"
                    ></v-checkbox>
                  </v-row>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal " text @click="close"> Close </v-btn>
              <v-btn
                color="#35b5ac"
                class="white--text"
                @click="updateWorkingHours"
                type="submit"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-dialog>
    <!-- <PopupSuccess :dialog2.sync="dialog2" /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "UpdateWoekingHours",
  props: {
    dialog2: {
      type: Boolean,
      default: false,
    },
    providerUuid: {
      type: String,
    },
  },
  data() {
    return {
      showDialog: null,
      getProviderUuid: null,
      getProviderId:
        this.$store.getters.getAllWorkingHoursForProvider[0].ProviderId,
      time1Sun:
        this.$store.getters.getAllWorkingHoursForProvider[0].sunday.from,
      time2Sun: this.$store.getters.getAllWorkingHoursForProvider[0].sunday.to,
      checkbox1: false,
      time1M: this.$store.getters.getAllWorkingHoursForProvider[0].monday.from,
      time2M: this.$store.getters.getAllWorkingHoursForProvider[0].monday.to,
      checkbox2: false,
      time1Tu:
        this.$store.getters.getAllWorkingHoursForProvider[0].tuesday.from,
      time2Tu: this.$store.getters.getAllWorkingHoursForProvider[0].tuesday.to,
      checkbox3: false,
      time1W:
        this.$store.getters.getAllWorkingHoursForProvider[0].wednesday.from,
      time2W: this.$store.getters.getAllWorkingHoursForProvider[0].wednesday.to,
      checkbox4: false,
      time1Th:
        this.$store.getters.getAllWorkingHoursForProvider[0].thursday.from,
      time2Th: this.$store.getters.getAllWorkingHoursForProvider[0].thursday.to,
      checkbox5: false,
      time1F: this.$store.getters.getAllWorkingHoursForProvider[0].friday.from,
      time2F: this.$store.getters.getAllWorkingHoursForProvider[0].friday.to,
      checkbox6: false,
      time1Sat:
        this.$store.getters.getAllWorkingHoursForProvider[0].saturday.from,
      time2Sat:
        this.$store.getters.getAllWorkingHoursForProvider[0].saturday.to,
      checkbox7: false,
    };
  },
  methods: {
    close() {
      this.$emit("update:dialog2", false);
    },
    checkedBox1() {
      if (this.checkbox1) {
        (this.time1Sun = null), (this.time2Sun = null);
      } else {
        (this.time1Sun = "09:00"), (this.time2Sun = "16:00");
      }
    },
    checkedBox2() {
      if (this.checkbox2) {
        (this.time1M = null), (this.time2M = null);
      } else {
        (this.time1M = "09:00"), (this.time2M = "16:00");
      }
    },
    checkedBox3() {
      if (this.checkbox3) {
        (this.time1Tu = null), (this.time2Tu = null);
      } else {
        (this.time1Tu = "09:00"), (this.time2Tu = "16:00");
      }
    },
    checkedBox4() {
      if (this.checkbox4) {
        (this.time1W = null), (this.time2W = null);
      } else {
        (this.time1W = "09:00"), (this.time2W = "16:00");
      }
    },
    checkedBox5() {
      if (this.checkbox5) {
        (this.time1Th = null), (this.time2Th = null);
      } else {
        (this.time1Th = "09:00"), (this.time2Th = "16:00");
      }
    },
    checkedBox6() {
      if (this.checkbox6) {
        (this.time1F = null), (this.time2F = null);
      } else {
        (this.time1F = "09:00"), (this.time2F = "16:00");
      }
    },
    checkedBox7() {
      if (this.checkbox7) {
        (this.time1Sat = null), (this.time2Sat = null);
      } else {
        (this.time1Sat = "09:00"), (this.time2Sat = "16:00");
      }
    },
    async updateWorkingHours(e) {
      e.preventDefault();
      console.log(this.getProviderId, this.getProviderUuid);
      try {
        await this.$axios
          .put("/providers/updateWorkingHoursStatus", {
            ProviderId: this.getProviderId,
            status: "updated",
          })
          .then((res) => {
            this.$axios
              .post("/providers/updateWorkingHours", {
                providerUuid: this.getProviderUuid,
                sundayT1: this.time1Sun,
                sundayT2: this.time2Sun,
                mondayT1: this.time1M,
                mondayT2: this.time2M,
                tuesdayT1: this.time1Tu,
                tuesdayT2: this.time2Tu,
                wednesdayT1: this.time1W,
                wednesdayT2: this.time2W,
                thursdayT1: this.time1Th,
                thursdayT2: this.time2Th,
                fridayT1: this.time1F,
                fridayT2: this.time2F,
                saturdayT1: this.time1Sat,
                saturdayT2: this.time2Sat,
                ProviderId: this.getProviderId,
              })
              .then(() => console.log("created and updated successfully"));
          });
      } catch (e) {
        console.log(e);
      }
      this.dialog2 = false;
    },
  },
  computed: {
    ...mapGetters(["getAllWorkingHoursForProvider"]),
    updateUuid() {
      this.getProviderUuid = this.providerUuid;
    },
  },
};
</script>
<style scoped>
.update-hours-title {
  margin-bottom: 0.7em;
  margin-left: 1em;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  border-bottom: 1px solid #e0dede;
  width: 45%;
}
</style>
