<template>
<v-container  fluid class="fluid " style="padding: 0;">
<v-app-bar
  elevation="1"

>
<v-row  class="d-flex justify-space-between" >


<v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="30"
  max-width="50"
  class="rounded-circle"
  src="https://picsum.photos/id/11/500/300"
></v-img>


    <NuxtLink to="/" class="nuxtLink" >Home</NuxtLink> 
  <v-btn class="success darken-2 white--text " @click="registerBtn">
    Register
    </v-btn>

</v-row>
</v-app-bar>
</v-container>
</template>

<script>
    export default {
        name: 'Navbar',

        methods: {

            registerBtn () {
                this.$router.push ('/addnewprovider/addprovider')
            }
        }
    }
</script>

<style scoped>
.nuxtLink{
   text-decoration: none;

}
</style>