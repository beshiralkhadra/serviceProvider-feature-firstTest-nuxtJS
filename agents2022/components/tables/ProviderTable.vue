<template>
        <div className="reservation-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
                <th>Update</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
            
                <tr 
                v-for="detailedInfo in myInfo"
                :key="detailedInfo.id"
        
                 >
                  <td data-column="ID">{{detailedInfo.id}}</td>
                  <td data-column="USERNAME">{{detailedInfo.firstName}}</td>
                  <td data-column="SERVICE">{{detailedInfo.lastName}}</td>
                  <td data-column="ID">{{detailedInfo.email}}</td>
                  <td data-column="ID">{{detailedInfo.password}}</td>
                  <td data-column="USERNAME">{{detailedInfo.gender}}</td>
                  <td data-column="SERVICE">{{detailedInfo.education}}</td>
                  <td data-column="SERVICE">{{detailedInfo.createdAt}}</td>
                  <td data-column="SERVICE">{{detailedInfo.updatedAt}}</td>
                  <!-- <td data-column="SERVICE"><v-icon small @click="deleteButton(detailedInfo.id)" style="color: red;">mdi-delete</v-icon></td> -->
                  <!-- <td data-column="SERVICE"><v-icon small @click="editProvider(detailedInfo.id)" style="color: green;">mdi-pencil</v-icon></td> -->
                  <td data-column="SERVICE"> <v-text-field v-model="newEmail" type="email" name="newEmail" label="Email" required ></v-text-field></td>
                    

               
                </tr>
             
             
            </tbody>
          </table>
        </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data(){
return {
newEmail:''
}
},
methods: {
// deleteButton(id){
   

//       this.$axios.delete(`/delete/${id}`).then((response) => {
// return this.info.filter((items)=>{
//   return items.id != id
// })
// }) 

// },
// editProvider(id){
   
//      this.$axios.put(`/update/${id}`,{  updatedEmail : this.newEmail}).then((response) => {
       
//          console.log(response)
// // return this.info.filter((items)=>{
// //   return items.id != id
// // })
// }) 

// }

},
// mounted ({state,commit}) {
//     this.$axios.get('/')
//       .then(response => {commit('setInfo',state.info = response.data)})
  
//   },
mounted(){
  this.$store.dispatch('getProviders')
},
  computed: {
myInfo(){
  return this.$store.state.info
}
}

}
</script>

<style scoped>

table {
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
}

th {
  background: #1e69b8;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 1.1rem;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    /* Label the data */
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }
}
@media screen and (max-width: 769px) {
}
</style>