<template>
  <v-container>
    <v-col>
      <div class="register-form-container">
        <v-form ref="form" lazy-validation class="elevation-12 pa-8 mt-12">
          <h1 class="mb-10">Add Provider</h1>
          <!-------------------------------------------- names fields   -->
          <div class="d-flex">
            <v-col md="6">
              <v-text-field
                v-model="name"
                type="text"
                name="name"
                label="Name"
                :rules="nameRules"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field
                v-model="lastName"
                type="text"
                name="lastName"
                label="Last Name"
                :rules="nameRules"
                required
                hide-details
              ></v-text-field>
            </v-col>
          </div>
          <!---------------------------------------------- age + phone + gender  -->
          <div class="d-flex">
            <v-col md="4">
              <v-text-field
                v-model="age"
                type="number"
                name="age"
                label="Age"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-select
                v-model="gender"
                :items="items"
                label="choose gender..."
                hide-details
              >
              </v-select>
            </v-col>
            <v-col md="4">
              <v-text-field
                v-model="phone"
                type="tel"
                name="phone"
                :rules="phoneRules"
                label="Phone"
                required
                hide-details
              ></v-text-field>
            </v-col>
          </div>
          <!----------------------------------------------- add profile picture  -->

          <!------------------------------------------------- email field  -->
          <!-- <v-text-field
            v-model="email"
            type="email"
            name="email"
            label="example@email.com"
            :rules="emailRules"
            required
          ></v-text-field> -->
          <!------------------------------------------ password fields  -->
          <!-- <div class="d-flex">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                @click:append="show2 = !show2"
                :type="show2 ? 'text' : 'password'"
                name="password"
                label="Password"
                hint="At least 8 characters"
                value="wqfasds"
                class="input-group--focused"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="repeatpass"
                name="repeatpass"
                type="password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show3 = !show3"
                label="Repeat Password"
                :rules="repeatPassRules"
                required
              ></v-text-field>
            </v-col>
          </div> -->
          <!---------------------------------------------- educations fields  -->
          <div class="d-flex">
            <v-col md="4">
              <v-text-field
                v-model="education"
                type="text"
                name="education"
                label="Education"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field
                v-model="major"
                type="text"
                name="major"
                label="Speciality"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field
                v-model="minor"
                type="text"
                name="minor"
                label="Minor"
                required
                hide-details
              ></v-text-field>
            </v-col>
          </div>
          <v-select
            v-model="role"
            :items="getAllRoles"
            item-text="role_name"
            label="choose role..."
          >
          </v-select>
          <!-------------------------------------------------------------------------- next btn  -->
          <v-row class="justify-end" no-gutters>
            <v-btn @click="onSubmit" type="submit" class="primary ma-3" dark>
              Next
              <v-icon dark left> mdi-arrow-right </v-icon>
            </v-btn>
          </v-row>
        </v-form>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddProvider",

  data() {
    return {
      ////////////////////////////////////////////////////////// names
      name: "",
      lastName: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      /////////////////////////////////////////////// age
      age: "",
      //////////////////////////////////////////// gender
      gender: "",
      items: ["male", "female", "other"],
      ////////////////////////////////////////////////////////// email
      // email: "",
      // emailRules: [
      //   (v) => !!v || "E-mail is required",
      //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      // ],
      //////////////////////////////////////////////////////// password
      // password: "",
      // show2: false,
      // passwordRules: [
      //   (v) => !!v || "Password is required",
      //   (v) =>
      //     /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
      //     "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
      // ],
      // repeatpass: "",
      // show3: false,
      // repeatPassRules: [
      //   (v) => !!v || "Password is required",
      //   (v) => v == this.password || "Password is required",
      // ],

      ///////////////////////////////////////////////////////// mobile number
      phone: "",

      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => v != /^\d{10}$/.test(v) || "Phone not correct",
      ],
      ///////////////////////////////////////////education
      education: "",
      major: "",
      minor: "",
      //////////////////////////////////////////////// roles
      role: "",
      image: "",
    };
  },

  mounted() {
    this.$store.dispatch("getRoles");
  },
  computed: {
    ...mapGetters(["getAllRoles"]),
  },
  methods: {
    ...mapActions(["setMajor"]),

    onSubmit(e) {
      let role_id = null;
      e.preventDefault();
      this.getAllRoles.forEach((element) => {
        if (this.role == element.role_name) {
          role_id = element.id;
        }
      });

      this.setMajor(this.major);
      if (this.$refs.form.validate()) {
        this.$axios
          .post("/providers/create", {
            role_id: role_id,
            username: this.name,
            lastName: this.lastName,
            age: this.age,
            gender: this.gender,
            phone: this.phone,
            // email: this.email,
            // password: this.password,
            education: this.education,
            major: this.major,
            minor: this.minor,
          })
          .then(() => this.$router.push("/addnewprovider/workinghours"));
      }
    },
    // onChange(image) {
    //   console.log("New picture selected!");
    //   if (image) {
    //     console.log("Picture loaded.");
    //     this.image = image;
    //   } else {
    //     console.log("FileReader API not supported: use the <form>, Luke!");
    //   }
    // },
  },
};
</script>
<style scoped>
.register-form-container {
  display: flex;
  justify-content: center;
}
.register-form2 {
  width: 60%;
}
</style>
