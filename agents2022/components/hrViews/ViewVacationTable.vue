<template>
  <v-row>
    <v-col md="12">
      <v-card
        v-for="loopInVacation in getAllVacationsForProviders"
        :key="loopInVacation.id"
        class="ma-2"
      >
        <div class="leave-card-content">
          <v-col md="3">
            <p class="employee-leave-name">
              Dr.{{ loopInVacation.providerName }}
            </p>
          </v-col>
          <v-col md="4">
            <p class="leave-time">
              <span class="leave-times-from-to">From:</span>
              {{ loopInVacation.from }} --
              <span class="leave-times-from-to">To:</span>
              {{ loopInVacation.to }}
            </p>
          </v-col>
          <v-col md="3">
            <span
              :class="[
                loopInVacation.isApproved == 'accepted'
                  ? 'acceptedLeave'
                  : null,
                loopInVacation.isApproved == 'on hold'
                  ? 'orginalStatus'
                  : 'null',
                loopInVacation.isApproved == 'refused'
                  ? 'refusedLeave'
                  : 'null',
              ]"
            >
              {{ loopInVacation.isApproved }}</span
            >
          </v-col>
          <v-col md="1">
            <TheElipseActions
              @acceptBtn="
                acceptVacationBtn(
                  loopInVacation.id,
                  loopInVacation.requestedDays,
                  loopInVacation.providerUuid,
                  loopInVacation.vacationType
                )
              "
              @rejectBtn="rejectVacationBtn(loopInVacation.id)"
              @deleteBtn="deleteVacationBtn(loopInVacation.id)"
              @updateBtn="
                updateBtn(
                  loopInVacation.id,
                  loopInVacation.providerName,
                  loopInVacation.providerUuid,
                  loopInVacation.from,
                  loopInVacation.to,
                  loopInVacation.requestedDays,
                  loopInVacation.reason,
                  loopInVacation.isApproved,
                  loopInVacation.ProviderId
                )
              "
            />
          </v-col>
        </div>
        <VacationDialogue
          :vacationDialog.sync="vacationDialog"
          :idForVacatioUpdate="idForVacatioUpdate"
          :nameForProviderUpdate="nameForProviderUpdate"
          :uuidForProviderUpdate="uuidForProviderUpdate"
          :vacationFromUpdate="vacationFromUpdate"
          :vacationToUpdate="vacationToUpdate"
          :reasonToVacationUpdate="reasonToVacationUpdate"
          :vacationDaysUpdate="vacationDaysUpdate"
          :statusForVacationUpdate="statusForVacationUpdate"
          :idForProviderUpdate="idForProviderUpdate"
        />
        <DeleteDialog :dialog3.sync="dialog3" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import TheElipseActions from "../elipses/TheElipseActions.vue";
import VacationDialogue from "../dialogue/VacationDialogue.vue";
import DeleteDialog from "../dialogue/DeleteDialog.vue";

export default {
  mounted() {
    this.$store.dispatch("actionForGettingAllVacations");
  },
  data() {
    return {
      vacationDialog: false,
      dialog3: false,
      idForVacatioUpdate: null,
      nameForProviderUpdate: null,
      uuidForProviderUpdate: null,
      vacationFromUpdate: null,
      vacationToUpdate: null,
      vacationDaysUpdate: null,
      reasonToVacationUpdate: null,
      statusForVacationUpdate: null,
      idForProviderUpdate: null,
    };
  },
  methods: {
    acceptVacationBtn(id, requestedDays, providerUuid, vacationType) {
      this.$axios
        .put("/providers/acceptRejectvacationRequest", {
          vacationId: id,
          requestedDays: requestedDays,
          providerUuid: providerUuid,
          vacationType: vacationType,
        })
        .then((res) => {
          this.$store.dispatch("actionForGettingAllVacations");
        });
    },
    rejectVacationBtn(id) {
      this.$axios
        .put("/providers/acceptRejectvacationRequest", {
          vacationIdReject: id,
        })
        .then((res) => {
          console.log("vacation request rejected");
          this.$store.dispatch("actionForGettingAllVacations");
        });
    },
    deleteVacationBtn(id) {
      this.$axios
        .put("/providers/deleteVacation", {
          vacationIdDelete: id,
        })
        .then((res) => {
          console.log("vacation request deleted");
          this.$store.dispatch("actionForGettingAllVacations");
        });
      this.dialog3 = true;
    },
    updateBtn(
      id,
      providerName,
      providerUuid,
      from,
      to,
      reason,
      requestedDays,
      isApproved,
      ProviderId
    ) {
      console.log(from);
      (this.idForVacatioUpdate = id),
        (this.nameForProviderUpdate = providerName),
        (this.uuidForProviderUpdate = providerUuid),
        (this.vacationFromUpdate = from);
      this.vacationToUpdate = to;
      this.reasonToVacationUpdate = reason;
      this.vacationDaysUpdate = requestedDays;
      this.statusForVacationUpdate = isApproved;
      (this.idForProviderUpdate = ProviderId),
        (this.vacationDialog = !this.vacationDialog);
    },
  },
  computed: {
    ...mapGetters(["getAllVacationsForProviders"]),
  },
  components: { TheElipseActions, VacationDialogue, DeleteDialog },
};
</script>

<style scoped>
.leave-card-content {
  display: flex;
  align-items: center;
}
.employee-leave-name {
  font-style: normal;
  font-weight: 450;
  font-size: 1.1rem !important ;
  line-height: 37px;
  color: #004d40;
}
.leave-time {
  font-style: normal;
  font-weight: 350;
  font-size: 1.1rem !important ;
  line-height: 37px;
  color: #35b5ac;
}

.leave-times-from-to {
  color: #00796b;
  font-size: 1.2rem;
  font-weight: 400;
}
.accept-btn {
  background: transparent;
  border: #35b5ac solid 1px;
  color: #35b5ac;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 0.8rem !important;
}
.reject-btn {
  background: transparent;
  border: red solid 1px;
  color: red;
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 0.8rem !important;
}
</style>
