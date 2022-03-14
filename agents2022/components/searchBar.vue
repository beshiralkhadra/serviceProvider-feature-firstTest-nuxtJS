<template>
  <v-form>
    <v-container>
      <v-row>
        <v-text-field
          dense
          placeholder="Search Doctor Name"
          type="text"
          v-model="searchTerm"
          :searchTerm="searchTerm"
          @input="handlingOnChange(searchTerm)"
        ></v-text-field>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
        searchTerm: "",
    };
  },
  methods: {
    handlingOnChange(searchTerm){
        this.$emit('getOnchange',searchTerm)
    }
  }
};
</script>
