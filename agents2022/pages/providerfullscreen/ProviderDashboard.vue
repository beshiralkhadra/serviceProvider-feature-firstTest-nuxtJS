<template>
  <v-app id="inspire">

    <v-navigation-drawer
     
      app
      
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
       <v-list-item-avatar 
          class="mb-4"
          size="64"
       
       >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>

        <div>beshir@gmail.com</div>
      </v-sheet>

      <v-divider></v-divider>

       <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
   
        <v-list-item-title> <NuxtLink to="/" class="nuxtLink" >Home</NuxtLink> </v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="bb in admins"
            :key="bb.title"
            router
            :to="bb.link"
          >
            <!-- <v-list-item-title v-text="title"></v-list-item-title> -->

            <v-list-item-icon>
              <v-icon>{{bb.icon}}</v-icon>
            </v-list-item-icon>
            {{bb.title}}
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="cc in cruds"
            :key="cc.title"
            router
            :to="cc.link"
          >
            <!-- <v-list-item-title v-text="title"></v-list-item-title> -->

   
            <v-list-item-icon>
              <v-icon>{{cc.icon}}</v-icon>
            </v-list-item-icon>
              {{cc.title}}
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
      
        class="py-8 px-6"
        fluid
      >
      <v-col
        
            cols="12"
          >
        <v-row
    
        >
        <ProviderTable/>

       
        </v-row>
      </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProviderTable from "../../components/tables/ProviderTable.vue";


export default {
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer: null,
        admins: [
            { title: "Management", icon: "mdi-account-multiple-outline", link: "/" },
            { title: "Settings", icon: "mdi-cog-outline", link: "/" },
        ],
        cruds: [
            { title: "Create", icon: "mdi-plus-outline", link: "/" },
            { title: "Read", icon: "mdi-file-outline", link: "/auth/register" },
            { title: "Update", icon: "mdi-update", link: "/auth/login" },
            { title: "Delete", icon: "mdi-delete", link: "/" },
        ],
    }),
    components: { ProviderTable }
}

</script>
<style scoped>
.mdi {
    color: #01B1C5 !important;
}
.v-navigation-drawer__content{
    overflow-x:visible ;
}
</style>