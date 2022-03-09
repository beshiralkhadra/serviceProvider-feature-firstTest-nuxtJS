<template>
<v-container  fluid class="fluid d-flex justify-center mt-12" cols="6" >


<v-cols cols="10" lg="10" sm="8" md="8" style="height: 100vh">
  <v-form
    ref="form"
    lazy-validation
    class="elevation-12 pa-8  "
  
  >

  <h1 class="text-center">Make Appointment</h1>
  <div class="wrap-inputs">
    
  <v-col
          cols="12"
            sm="6"
            md="6"
         
        >
    <v-text-field
      v-model="name"
      type="text"
      name="name"
      label="Name"
      :rules="nameRules"
                  outlined

      class=" fadeInLeft"
      required
    ></v-text-field>
  </v-col>
<v-col
          cols="12"
          sm="6"
          md="6"
        >
    <v-text-field
      v-model="email"
   type="email"
        name="email"
      label="Email"
      :rules="emailRules"
            outlined
      required
    ></v-text-field>
</v-col>
  </div>
  <v-select v-model="selected" :items="items" label="choose doctor..." outlined>
</v-select>
  <v-select v-model="selected" :items="times" label="choose time..." outlined>
</v-select>
    <v-text-field
      v-model.number="number"
      type="tel"
     name="number"
      label="number"
      :rules="teldRules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="date"
     name="date"
     type="date"
      label="date"
      :rules="dateRules"
      outlined
      required
    ></v-text-field>

    <v-btn class="primary darken-2 white--text mt-5" @click="onSubmit" type="submit">
    Submit
    </v-btn>

  </v-form>
</v-cols>



</v-container>
</template>

<script>
    export default {
        name: 'Form',

        data(){
          return {

     
              email: '',
               emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
              password: '',
                passwordRules: [
      v => !!v || 'Password is required',
      v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
  ],
  items: ['Dr.Alexa','Dr.john','Dr.Rebecca'],
  times: ['08:30AM - 09:00AM','12:00PM - 12:30PM','14:30PM - 15:00PM'],
             
 
            
        }
          },
         methods : {
        onSubmit(e) {
            e.preventDefault()
            if(this.$refs.form.validate()){

            console.log(this.name, this.email)
            }
        }}
          
    }
</script>
<style scoped>
.wrap-inputs {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px){
  .wrap-inputs {
    flex-direction:column;
  }
}
</style>