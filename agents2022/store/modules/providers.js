const Provider = {
  namespace: true,
  state: {
    info: [],
    servicesInfo: [],
    selectedCategory: null,
    servicesState: [],
  },

  mutations: {
    SET_INFO(state, payload) {
      return (state.info = payload);
    },

    SET_SERVICES_INFO(state, payload) {
      return (state.servicesInfo = payload);
    },
    SET_SELECTED_CATEGORY(state, payload) {
      return (state.selectedCategory = payload);
    },
    SET_SERVICES_STATE(state, payload) {
      return (state.servicesState = payload);
    },
  },
  actions: {
    /// get provider actions
    getProviders({ commit, dispatch }) {
      try {
        let data = this.$axios.$get("/");
        commit("SET_INFO", data);
      } catch (error) {
        console.error(error);
      }
    },

    /// get services actions

    saveSelectedServices({ commit }, payload) {
      console.log(payload);
    },
    setMajor({ commit }, payload) {
      commit("SET_SELECTED_CATEGORY", payload);
    },
    setServicesState({ commit }, payload) {
      commit("SET_SERVICES_STATE", payload);
    },
  },

  getters: {
    info(state) {
      return state.info;
    },

    servicesInfo(state) {
      return state.servicesInfo;
    },
    selectedCategory(state) {
      return state.selectedCategory;
    },
    servicesState(state) {
      return state.servicesState;
    },
  },
};

export default Provider;
