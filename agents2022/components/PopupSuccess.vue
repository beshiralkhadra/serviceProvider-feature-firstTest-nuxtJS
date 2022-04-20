<template>
  <v-dialog v-model="dialog2" max-width="500px">
    <v-card class="popup-box">
      <div class="box">
        <div class="message-container">
          <div class="box-title mb-3">
            <h3>Your Request Has Been Sent Successfully</h3>
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
          <div class="success-checkmark mt-4">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>

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
    dialog2: {
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("update:dialog2", false);
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
/* .box .box-btns {
  display: flex;
  gap: 1em;
} */

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

.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;
}
.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #35b5ac;
}
.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}
.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}
.success-checkmark .check-icon::before,
.success-checkmark .check-icon::after {
  content: "";
  height: 100px;
  position: absolute;
  background: #ffffff;
  transform: rotate(-45deg);
}
.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: #35b5ac;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}
.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}
.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}
.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid #35b5ac;
}
.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}
@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
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
