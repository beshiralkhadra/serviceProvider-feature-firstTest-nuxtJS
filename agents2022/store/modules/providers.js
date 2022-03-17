const Provider = {
  namespace: true,
  state: {
    info: [],
    servicesInfo: [],
    selectedCategory: null,
    servicesState: [],
    listingProviders: "",
    listingProvidersWithResponse: [],
    getAllRoles: [],
    getAllHours: [],
    e1: 1,
  },

  mutations: {
    SET_INFO(state, payload) {
      return (state.info = payload);
    },
    SET_ROLES(state, payload) {
      return (state.getAllRoles = payload);
    },
    SET_HOURS(state, payload) {
      return (state.getAllHours = payload);
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
    SET_LISTING_PROVIDERS(state, payload) {
      return (state.listingProviders = payload);
    },
    SET_LISTING_PROVIDERS_WITH_RESPONSE(state, payload) {
      return (state.listingProvidersWithResponse = payload);
    },
    SET_E1(state, payload) {
      return (state.e1 = payload);
    },
  },
  actions: {
    /// get provider actions
    getProviders({ commit, dispatch }) {
      try {
        this.$axios.$get("/providers").then((resp) => {
          commit("SET_INFO", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider roles
    getRoles({ commit, dispatch }) {
      try {
        this.$axios.get("/roles").then((resp) => {
          console.log(resp.data);
          commit("SET_ROLES", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider hours
    getProviderWorkingHours({ commit, dispatch }) {
      try {
        this.$axios.get("/workingHours").then((resp) => {
          // console.log(resp.data);
          commit("SET_HOURS", resp.data);
        });
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
    //listing all providers with same role
    setWhatRole({ commit }, payload) {
      commit("SET_LISTING_PROVIDERS", payload);
    },
    bringAllProvidersWithSameRole({ commit, state }, payload) {
      try {
        this.$axios
          .post("/bringAllProvidersWithSameRole", {
            specifyRole: state.listingProviders,
          })
          .then((resp) => {
            commit("SET_LISTING_PROVIDERS_WITH_RESPONSE", resp.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    info(state) {
      return state.info;
    },
    getAllRoles(state) {
      return state.getAllRoles;
    },
    getAllHours(state) {
      console.log(state.getAllHours);
      return state.getAllHours;
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
    listingProviders(state) {
      return state.listingProviders;
    },
    listingProvidersWithResponse(state) {
      return state.listingProvidersWithResponse;
    },
  },
};

export default Provider;
