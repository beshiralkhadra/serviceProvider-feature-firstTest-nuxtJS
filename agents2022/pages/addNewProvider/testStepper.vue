x
<template>
  <v-container>
    <v-row class="justify-center align-center" height="80vh">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="this.$store.state.e1 > 1" step="1">
            Add Provider
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="this.$store.state.e1 > 2" step="2">
            Working Hours
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Services </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" height="600px">
              <AddProvider />
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              height="600px"
            >
            <WorkingHours/>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              height="600px"
            >
            <ProviderServices/>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-row>
  </v-container>
</template>
<script>
import AddProvider from "./AddProvider.vue";
import WorkingHours from "./WorkingHours.vue";
import ProviderServices from "./ProviderServices.vue";
export default {
  data() {
    return {
    };
  },
  components: { AddProvider, WorkingHours, ProviderServices },
};
</script>
