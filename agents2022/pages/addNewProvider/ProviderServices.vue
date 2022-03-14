<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col cols="9">
        <v-form ref="form" lazy-validation class="elevation-12 pa-8 mt-12">
          <v-card-title
            ><h1 class="mb-12 font-weight-medium">
              Add Services
            </h1></v-card-title
          >
          <v-card-text>
            <v-col cols="12" sm="12">
              <v-select
                v-model="selectedServices"
                :items="servicesState"
                label="Select"
                multiple
                chips
                item-text="service_name"
                return-object
                hint="What are the services"
                persistent-hint
                :rules="servicesRules"
              ></v-select>
            </v-col>
            <!-------------------------------------------------------------------------- next btn  -->
            <v-row class="justify-end" no-gutters>
              <v-btn @click="onSubmit" class="primary ma-2" dark>
                Submit
              </v-btn>
            </v-row>
          </v-card-text>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddProvider",

  data() {
    return {
      selectedServices: [],

      servicesRules: [(v) => !!v || "Services can not be empty"],
    };
  },

  computed: {
    ...mapGetters(["servicesInfo", "selectedCategory", "servicesState"]),
  },
  methods: {
    ...mapActions(["saveSelectedServices"]),
    onSubmit(e) {
      e.preventDefault();
      this.saveSelectedServices(this.selectedServices);
      if (this.$refs.form.validate()) {
        this.$axios
          .post("/createService", {
            selectedServices: this.selectedServices,
          })
          .then(() => this.$router.push("/"));
      }
    },
  },
};
</script>
<style></style>
