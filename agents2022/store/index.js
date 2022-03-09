import Vuex from "vuex";
import Provider from "./modules/providers";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Provider,
    },
  });
};

export default createStore;
