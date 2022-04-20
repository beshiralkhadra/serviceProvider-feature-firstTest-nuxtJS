<template>
  <v-dialog v-model="dialog3" max-width="500px">
    <v-card class="popup-box">
      <div class="box">
        <div class="message-container">
          <div class="box-title mb-3">
            <h3>Record Has Been deleted Successfully</h3>
          </div>
          <div>
            <p class="font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vehicula nisi sed viverra vestibulum. Pellentesque
              placerat dui sit amet dui interdum, vel commodo tellus finibus.
            </p>
          </div>
        </div>
        <div class="actions-container">
          <section class="trash-section">
            <span class="trash">
              <span></span>
              <i></i>
            </span>
          </section>

          <div class="box-btns">
            <!-- <button class="finalBtn-cancel">Cancel</button> -->
            <v-btn
              class="finalBtn font-weight-medium white--text"
              @click="close"
            >
              Okay
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog3: {
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("update:dialog3", false);
    },
  },
  computed: {},
};
</script>

<style scoped>
.popup-box {
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 1000vh;
  top: 0;
  left: 0;
  padding: 18em;
}

.box {
  width: 30vw;
  display: flex;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  /* border: px solid #999; */
  overflow: auto;
  z-index: 99;
}
.message-container {
  margin-right: 9em;
}
.actions-container {
  margin-right: 3em;
}

.box-title {
  padding-bottom: 0.3em;
}
.box-illustrate {
  padding-bottom: 0.3em;
}

.finalBtn {
  display: flex;
  background-color: #35b5ac !important;
  padding: 0.3em 1.6em;
  font-size: 1.4rem;
  cursor: pointer;
  outline-style: none;
  border-radius: 5px;
  cursor: pointer;
}

.box h3 {
  text-align: left;
  margin: 0.3em 0 !important;
}

.box p {
  text-align: left;
}

.finalBtn:hover {
  transform: scale(1.02);
  transition: 0.1s;
}
.trash-section {
  margin: 3em auto 1em auto;
}
.trash {
  background: #ff6873;
  width: 66px;
  height: 80px;
  display: inline-block;
  margin: 0 1em;

  position: relative;
  -webkit-border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.trash:after {
  position: absolute;
  left: -99px;
  right: 0;
  bottom: -50px;
  width: 300px;
}
.trash span {
  position: absolute;
  height: 12px;
  background: #ff6873;
  top: -19px;
  left: -10px;
  right: -10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: rotate(0deg);
  transition: transform 250ms;
  transform-origin: 19% 100%;
}
.trash span:after {
  content: "";
  position: absolute;
  width: 27px;
  height: 7px;
  background: #ff6873;
  top: -10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: rotate(0deg);
  transition: transform 250ms;
  transform-origin: 19% 100%;
  left: 27px;
}

.trash i {
  position: relative;
  width: 5px;
  height: 50px;
  background: #fff;
  display: block;
  margin: 14px auto;
  border-radius: 5px;
}
.trash i:after {
  content: "";
  width: 5px;
  height: 50px;
  background: #fff;
  position: absolute;
  left: -18px;
  border-radius: 5px;
}
.trash i:before {
  content: "";
  width: 5px;
  height: 50px;
  background: #fff;
  position: absolute;
  right: -18px;
  border-radius: 5px;
}

.trash:hover span {
  transform: rotate(-45deg);
  transition: transform 250ms;
}

@media screen and (max-width: 912px) {
  .popup-box {
    padding: 10em 0;
  }
  .box {
    width: 80%;
  }
}

@media screen and (max-width: 540px) {
  .message-container {
    margin-right: 0em;
  }
  .actions-container {
    margin-right: 0em;
  }
}
@media screen and (max-width: 420px) {
  .box {
    width: 80vw;
  }
  .box h6 {
    font-size: 1rem !important;
  }
}
@media screen and (max-width: 280px) {
  .box {
    flex-direction: column;
    align-items: center;
    width: 90vw;
    padding: 3em 0;
  }
  .message-container {
    padding: 1em;
  }
  .actions-container {
    margin-right: 0em;
  }
}
</style>
