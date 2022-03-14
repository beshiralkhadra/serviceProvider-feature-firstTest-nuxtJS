<template>
  <v-stepper-header>
    <v-stepper-step :complete="e1 > 1" step="1">
      Name of step 1
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="e1 > 2" step="2">
      Name of step 2
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
  </v-stepper-header>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style></style>
