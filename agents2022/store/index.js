import Vuex from "vuex";
import Provider from "./modules/providers";
import Hr from "./modules/hr";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Provider,
      Hr,
    },
  });
};

export default createStore;
