<template>
  <div>
    <v-dialog v-model="dialog" max-width="1015">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#35b5ac" dark v-bind="attrs" v-on="on"> Leave </v-btn>
      </template>
      <!-- <v-card-title>
          <span class="text-h5">Leave Request</span>
        </v-card-title> -->
      <v-card max-width="1000" height="430" class="mt-6 elevation-8">
        <h1 class="mb-10 pa-6">Personal Info</h1>
        <v-row class="justify-space-around align-center">
          <div>
            <small class="info-details-title font-weight-light ml-3"
              >Name:</small
            >

            <p class="info-details-desc font-weight-medium pl-3">
              {{ nameForProviderIn }}
            </p>
            <small class="info-details-title font-weight-light pl-3"
              >Mobile:</small
            >
            <p class="info-details-desc font-weight-medium pl-3">
              {{ phoneForProviderIn }}
            </p>
            <small class="info-details-title font-weight-light pl-3"
              >Age:</small
            >
            <p class="info-details-desc font-weight-medium pl-3">
              {{ ageForProviderIn }}
            </p>
          </div>
          <div>
            <small class="info-details-title font-weight-light pl-3"
              >Education:</small
            >
            <p class="info-details-desc font-weight-medium pl-3">
              {{ educationForProviderIn }}
            </p>
            <small class="info-details-title font-weight-light pl-3"
              >Speciality:</small
            >
            <p class="info-details-desc font-weight-medium pl-3">
              {{ specialityForProviderIn }}
            </p>
            <small class="info-details-title font-weight-light pl-3"
              >Minor:</small
            >
            <p class="info-details-desc font-weight-medium pl-3">
              {{ minorForProviderIn }}
            </p>
          </div>
          <div>
            <p class="font-weight-light">Social</p>

            <p class="info-details-desc2 font-weight-medium">
              <v-icon class="icon">mdi-facebook</v-icon>
              <span> facebook.com/example</span>
            </p>
            <p class="info-details-desc2 font-weight-medium">
              <v-icon class="icon">mdi-twitter</v-icon>
              <span> twitter.com/example</span>
            </p>
            <p class="info-details-desc2 font-weight-medium">
              <v-icon class="icon">mdi-instagram</v-icon>
              <span> instagram.com/example</span>
            </p>
            <p class="info-details-desc2 font-weight-medium">
              <v-icon class="icon">mdi-linkedin</v-icon>
              <span> linkedin.com/example</span>
            </p>
          </div>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ProviderDashboard from "../../pages/providerfullscreen/_ProviderDashboard.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { ProviderDashboard },
};
</script>
