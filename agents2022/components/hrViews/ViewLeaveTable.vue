<template>
  <v-row>
    <v-col md="12">
      <v-card
        v-for="loopInLeaveWork in getAllLeaveForProviders"
        :key="loopInLeaveWork.id"
        class="ma-2"
      >
        <div class="leave-card-content">
          <v-col md="4">
            <p class="employee-leave-name">
              Dr.{{ loopInLeaveWork.providerName }}
            </p>
          </v-col>
          <v-col md="3">
            <p class="leave-time">
              <span class="leave-times-from-to">From:</span>
              {{ loopInLeaveWork.from }} --
              <span class="leave-times-from-to">To:</span>
              {{ loopInLeaveWork.to }}
            </p>
          </v-col>
          <v-col md="3">
            <span
              :class="[
                loopInLeaveWork.isApproved == 'accepted'
                  ? 'acceptedLeave'
                  : null,
                loopInLeaveWork.isApproved == 'on hold'
                  ? 'orginalStatus'
                  : 'null',
                loopInLeaveWork.isApproved == 'refused'
                  ? 'refusedLeave'
                  : 'null',
              ]"
            >
              {{ loopInLeaveWork.isApproved }}</span
            >
          </v-col>
          <v-col md="1">
            <TheElipseActions
              @acceptBtn="
                acceptLeaveBtn(
                  loopInLeaveWork.id,
                  loopInLeaveWork.providerUuid,
                  loopInLeaveWork.from,
                  loopInLeaveWork.to
                )
              "
              @rejectBtn="rejectLeaveBtn(loopInLeaveWork.id)"
              @deleteBtn="deleteLeaveBtn(loopInLeaveWork.id)"
              @updateBtn="
                updateBtn(
                  loopInLeaveWork.id,
                  loopInLeaveWork.providerName,
                  loopInLeaveWork.providerUuid,
                  loopInLeaveWork.from,
                  loopInLeaveWork.to,
                  loopInLeaveWork.reason,
                  loopInLeaveWork.isApproved,
                  loopInLeaveWork.ProviderId
                )
              "
            />
          </v-col>
        </div>
        <LeaveDialogue
          :dialog.sync="dialog"
          :idForLeaveUpdate="idForLeaveUpdate"
          :nameForProviderUpdate="nameForProviderUpdate"
          :uuidForProviderUpdate="uuidForProviderUpdate"
          :leaveFromUpdate="leaveFromUpdate"
          :leaveToUpdate="leaveToUpdate"
          :reasonToLeaveUpdate="reasonToLeaveUpdate"
          :statusForLeaveUpdate="statusForLeaveUpdate"
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
import LeaveDialogue from "../dialogue/LeaveDialogue.vue";
import DeleteDialog from "../dialogue/DeleteDialog.vue";

export default {
  mounted() {
    this.$store.dispatch("actionForGettingAllLeaveWork");
  },
  data() {
    return {
      dialog: false,
      dialog3: false,
      idForLeaveUpdate: null,
      nameForProviderUpdate: null,
      uuidForProviderUpdate: null,
      leaveFromUpdate: null,
      leaveToUpdate: null,
      reasonToLeaveUpdate: null,
      statusForLeaveUpdate: null,
      idForProviderUpdate: null,
    };
  },
  methods: {
    acceptLeaveBtn(id, providerUuid, from, to) {
      let fromHours = from.slice(0, 2) * 60; //10
      let fromMunites = from.slice(3, 5);
      let finalFromInHours = parseInt(fromHours) + parseInt(fromMunites);
      let toHours = to.slice(0, 2) * 60;
      let toMunites = to.slice(3, 5);
      let finalToInHours = parseInt(toHours) + parseInt(toMunites);
      let finalInHours = Math.floor(finalToInHours - finalFromInHours);
      // let finalInHours2 = (finalToInHours - finalFromInHours) % 60;
      // console.log(toString(finalInHours) + toString(finalInHours2));
      this.$axios
        .put("/providers/acceptRejectLeaveRequest", {
          leaveId: id,
          providerUuid: providerUuid,
          leaveBalance: finalInHours,
        })
        .then((res) => {
          this.$store.dispatch("actionForGettingAllLeaveWork");
        });
    },
    rejectLeaveBtn(id) {
      this.$axios
        .put("/providers/acceptRejectLeaveRequest", {
          leaveIdReject: id,
        })
        .then((res) => {
          console.log("leave request accepted");
          this.$store.dispatch("actionForGettingAllLeaveWork");
        });
    },
    deleteLeaveBtn(id) {
      this.$axios
        .put("/providers/deleteLeaveWork", {
          leaveIdDelete: id,
        })
        .then((res) => {
          console.log("leave request deleted");
          this.$store.dispatch("actionForGettingAllLeaveWork");
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
      isApproved,
      ProviderId
    ) {
      (this.idForLeaveUpdate = id),
        (this.nameForProviderUpdate = providerName),
        (this.uuidForProviderUpdate = providerUuid),
        (this.leaveFromUpdate = from);
      this.leaveToUpdate = to;
      this.reasonToLeaveUpdate = reason;
      this.statusForLeaveUpdate = isApproved;
      (this.idForProviderUpdate = ProviderId), (this.dialog = true);
    },
  },
  computed: {
    ...mapGetters(["getAllLeaveForProviders"]),
  },
  components: { TheElipseActions, LeaveDialogue, DeleteDialog },
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
.orginalStatus {
  background: transparent;
  border: orange solid 1px !important;
  border-radius: 5px;
  color: rgb(255, 166, 1);
  padding: 5px 8px !important;
  line-height: 1.1rem !important;
  font-weight: 400 !important;
  font-size: 1rem !important;
}
</style>
