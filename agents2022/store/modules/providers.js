const Provider = {
  // namespaced: true,
  state: {
    getMaxUuid: "",
    info: [],
    servicesInfo: [],
    selectedCategory: null,
    servicesState: [],
    listingProviders: "",
    listingProvidersWithResponse: [],
    getAllRoles: [],
    getAllHours: [],
    getAllServicesWithProviders: [],
    e1: 1,
    page: 1,
    pageLength: "",
    idForProviderWhoIn: "",
    specilityForProviderWhoIn: "",
    specilityForProviderWhoInElipse: "",
    getAllAppointmentsForSpecificProvider: [],
    getAllServicesForUpdateForm: [],
    getAllServicesForUpdateFormInElipse: [],
  },

  mutations: {
    SET_MAX_UUID(state, payload) {
      return (state.getMaxUuid = payload);
    },
    SET_INFO(state, payload) {
      return (state.info = payload);
    },
    SET_ROLES(state, payload) {
      return (state.getAllRoles = payload);
    },
    SET_HOURS(state, payload) {
      return (state.getAllHours = payload);
    },
    SET_ALL_SERVICES_WITH_PROVIDERS(state, payload) {
      return (state.getAllServicesWithProviders = payload);
    },
    SET_PAGE_NUMBER(state, payload) {
      // console.log(payload);
      return (state.page = payload);
    },
    SET_PAGE_LENGTH(state, payload) {
      return (state.pageLength = payload);
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
    ///////////////////////////mutations for provider page
    SET_PROVIDER_ID(state, payload) {
      return (state.idForProviderWhoIn = payload);
    },
    SET_PROVIDER_SPECIALITY(state, payload) {
      return (state.specilityForProviderWhoIn = payload);
    },
    SET_PROVIDER_SPECIALITY_ELIPSE(state, payload) {
      console.log(payload);
      return (state.specilityForProviderWhoInElipse = payload);
    },
    SET_ALL_APPOINTMENTS(state, payload) {
      return (state.getAllAppointmentsForSpecificProvider = payload);
    },
    SET_SERVICES_FOR_UPDATE_FORM(state, payload) {
      return (state.getAllServicesForUpdateForm = payload);
    },
    SET_SERVICES_FOR_UPDATE_FORM_IN_ELIPSE(state, payload) {
      return (state.getAllServicesForUpdateFormInElipse = payload);
    },
  },
  actions: {
    ///get max uuid
    getMaxUuidAction({ commit, dispatch }) {
      try {
        this.$axios.get("/providers/getMaxUuid").then((resp) => {
          commit("SET_MAX_UUID", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },

    /// get provider actions
    getProviders({ commit, dispatch }) {
      try {
        this.$axios.$get("/providers/providers").then((resp) => {
          commit("SET_INFO", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider roles
    getRoles({ commit, dispatch }) {
      try {
        this.$axios.get("/providers/roles").then((resp) => {
          commit("SET_ROLES", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider hours
    getProviderWorkingHours({ commit, dispatch }) {
      try {
        this.$axios.get("/providers/workingHours").then((resp) => {
          // console.log(resp.data);
          commit("SET_HOURS", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider services
    async getProviderServices({ commit, dispatch }) {
      try {
        await this.$axios
          .get("/providers/serviceswithproviders")
          .then((resp) => {
            // console.log(resp.data);
            commit("SET_ALL_SERVICES_WITH_PROVIDERS", resp.data);
          });
      } catch (error) {
        console.error(error);
      }
    },

    /// get services actions

    saveSelectedServices({ commit }, payload) {},
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
    //actions for provider page
    setIdForProvider({ commit }, payload) {
      commit("SET_PROVIDER_ID", payload);
      console.log(payload);
    },
    getAllAppointmentsForSpecificProvider({ commit, state }, payload) {
      try {
        this.$axios
          .post("/providers/getAllAppointmentsForSpecificProvider", {
            specifyId: state.idForProviderWhoIn,
          })
          .then((resp) => {
            console.log(resp.data);
            commit("SET_ALL_APPOINTMENTS", resp.data.reverse());
          });
      } catch (error) {
        console.log(error);
      }
    },
    /////////////////////////////////////
    async bringAllProvidersWithSameRole({ commit, state }, payload) {
      try {
        await this.$axios
          .post("/providers/bringAllProvidersWithSameRole", {
            specifyRole: state.listingProviders,
            pageNumber: state.page,
          })
          .then((resp) => {
            commit(
              "SET_LISTING_PROVIDERS_WITH_RESPONSE",
              resp.data.rows.reverse()
            );
            commit("SET_PAGE_LENGTH", resp.data.count);
          });
      } catch (error) {
        console.log(error);
      }
    },
    ////////////////////
    async bringAllServicesForUpdateForm({ commit, state }, payload) {
      try {
        await this.$axios
          .post("/providers/bringAllServicesForUpdateForm", {
            specifySpeciality: state.specilityForProviderWhoIn,
          })
          .then((resp) => {
            console.log(resp);
            commit("SET_SERVICES_FOR_UPDATE_FORM", resp.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    ////////////////////
    async bringAllServicesForUpdateFormInElipseAction(
      { commit, state },
      payload
    ) {
      try {
        await this.$axios
          .post("/providers/bringAllServicesForUpdateFormInElipse", {
            specifySpeciality: state.specilityForProviderWhoInElipse,
          })
          .then((resp) => {
            console.log(resp);
            commit("SET_SERVICES_FOR_UPDATE_FORM_IN_ELIPSE", resp.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getMaxUuid(state) {
      console.log(state.getMaxUuid, "llllllllllllllllllllllllllllll");
      return state.getMaxUuid;
    },
    info(state) {
      return state.info;
    },
    getAllRoles(state) {
      return state.getAllRoles;
    },
    getAllHours(state) {
      return state.getAllHours;
    },
    getAllServicesWithProviders(state) {
      // console.log(state.getAllServicesWithProviders);
      return state.getAllServicesWithProviders;
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
    getPageNumber(state) {
      return state.page;
    },
    getPageLength(state) {
      return state.pageLength;
    },
    ///////////////////////////////getters for provider page
    idForProviderWhoIn(state) {
      return state.idForProviderWhoIn;
    },
    bringAllAppointmentsForSpecificProvider(state) {
      return state.getAllAppointmentsForSpecificProvider;
    },
    bringAllServicesForUpdateForm(state) {
      return state.getAllServicesForUpdateForm;
    },
    bringAllServicesForUpdateFormInElipse(state) {
      return state.getAllServicesForUpdateFormInElipse;
    },
  },
};

export default Provider;
