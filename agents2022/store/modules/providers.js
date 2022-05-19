import requestBuilder from "../../requestBuilder";
const Provider = {
  // namespaced: true,
  state: {
    getMaxUuid: "",
    takeProviderRole: null,
    info: [],
    selectedCategory: null,
    servicesState: [],
    ////////////////////
    listingProviders: "",
    listingProvidersWithResponse: [],
    listingAssistants: [],
    listingSpecialists: [],
    //////////////////////
    getAllRoles: [],
    getAllHours: [],
    getProviderUuidInHr: "",
    getAllWorkingHoursForProvider: [],
    getAllServicesWithProviders: [],
    e1: 1,
    //////////////////////////
    ///pagination
    page: 1,
    pageAssistant: 1,
    pageSpecialist: 1,
    pageLength: "",
    pageLengthAssistant: "",
    pageLengthSpecialist: "",
    //////////////////////////
    idForProviderWhoIn: "",
    specilityForProviderWhoIn: "",
    specilityForProviderWhoInElipse: "",
    getAllAppointmentsForSpecificProvider: [],

    getAllTimeAttendanceInfo: [],
    getAllLeaveForProviders: [],
    getAllVacationsForProviders: [],
    uuidForProviderToGetAllRequests: null,

    ///balances
    setProviderUuidFromContract: null,
    setSickAndAnnualBalances: [],
    /////////////////////////////////////////////
    ///mapping tables data
    getAllServicesFromApi: [],
    getAllCategoriessFromApi: [],
  },

  mutations: {
    SET_MAX_UUID(state, payload) {
      return (state.getMaxUuid = payload);
    },
    ////////////////////////////////////
    SET_PROVIDER_ROLE(state, payload) {
      return (state.takeProviderRole = payload);
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
    ////////////////////////////////////////////////
    ///Hr working hours
    SET_PROVIDER_UUID_IN_HR(state, payload) {
      return (state.getProviderUuidInHr = payload);
    },
    SET_HOURS_FOR_PROVIDER(state, payload) {
      return (state.getAllWorkingHoursForProvider = payload);
    },
    SET_ALL_SERVICES_WITH_PROVIDERS(state, payload) {
      return (state.getAllServicesWithProviders = payload);
    },
    ////////////////////////////
    ///pagination
    SET_PAGE_NUMBER(state, payload) {
      // console.log(payload);
      return (state.page = payload);
    },
    SET_ASSISTANT_PAGE_NUMBER(state, payload) {
      // console.log(payload);
      return (state.pageAssistant = payload);
    },
    SET_SPECIALIST_PAGE_NUMBER(state, payload) {
      // console.log(payload);
      return (state.pageSpecialist = payload);
    },
    SET_PAGE_LENGTH(state, payload) {
      return (state.pageLength = payload);
    },
    SET_PAGE_LENGTH_ASSISTANT(state, payload) {
      return (state.pageLengthAssistant = payload);
    },
    SET_PAGE_LENGTH_SPECIALIST(state, payload) {
      return (state.pageLengthSpecialist = payload);
    },
    ///////////////////////////

    SET_SELECTED_CATEGORY(state, payload) {
      return (state.selectedCategory = payload);
    },
    SET_SERVICES_STATE(state, payload) {
      return (state.servicesState = payload);
    },
    //////////////////////////
    SET_LISTING_PROVIDERS(state, payload) {
      return (state.listingProviders = payload);
    },

    SET_LISTING_PROVIDERS_WITH_RESPONSE(state, payload) {
      return (state.listingProvidersWithResponse = payload);
    },
    SET_LISTING_ASSISTANTS(state, payload) {
      return (state.listingAssistants = payload);
    },
    SET_LISTING_SPECIALISTS(state, payload) {
      return (state.listingSpecialists = payload);
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

    ///////////////////////////////////////
    ///time attendance
    SET_TIME_ATTENDANCE_INFO(state, payload) {
      return (state.getAllTimeAttendanceInfo = payload);
    },
    ////////////////////////////////////
    ///leave work
    SET_lEAVE_WORK_PROVIDERS(state, payload) {
      return (state.getAllLeaveForProviders = payload);
    },
    ////////////////////////////////////
    ///vacations
    SET_VACATIONS_PROVIDERS(state, payload) {
      return (state.getAllVacationsForProviders = payload);
    },
    ////////////////////////////////////
    ///uuid for getting requests related to provider
    SET_UUID_TO_GET_ALLREQUEST_RELATED_TOPROVIDER(state, payload) {
      return (state.uuidForProviderToGetAllRequests = payload);
    },

    //////////////////////////////////////////
    /// balances info
    SET_PROVIDERUUID_FROM_CONTRACT(state, payload) {
      return (state.setProviderUuidFromContract = payload);
    },
    SET_SICK_AND_ANNUAL_BALANCES(state, payload) {
      return (state.setSickAndAnnualBalances = payload);
    },
    /////////////////////////////////////////
    ///mapping tables data
    SET_ALL_SERVICES_FROM_API(state, payload) {
      return (state.getAllServicesFromApi = payload);
    },
    SET_ALL_CATEGORIES_FROM_API(state, payload) {
      return (state.getAllCategoriessFromApi = payload);
    },
  },
  actions: {
    ///get max uuid
    async getMaxUuidAction({ commit, dispatch }) {
      try {
        await this.$axios.get("/providers/getMaxUuid").then((resp) => {
          commit("SET_MAX_UUID", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    ///////////////////////
    ///get provider role
    actionForProviderRole({ commit }, payload) {
      commit("SET_PROVIDER_ROLE", payload);
      // console.log(payload);
    },
    //  let path = await this.$axios(
    //         requestBuilder("providers", "/providers", "get", {
    //           RoleId: 1,
    //           status: "latest",
    //         })
    //       ).then((results) => console.log("resultsresults", results));
    /// get provider actions
    async getProviders({ commit, state }, payload) {
      try {
        let path = await this.$axios(
          requestBuilder("providers", "/providers", "post", {
            uuid: payload,
          })
        )
          // this.$axios
          //   .post("/providers/providers", {
          //     uuid: state.idForProviderWhoIn,
          //   })
          .then((resp) => {
            commit("SET_INFO", resp.data);
          });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider roles
    async getRoles({ commit }) {
      try {
        // let path = await this.$axios(
        //   requestBuilder("providers", "/roles", "get")
        // )
        await this.$axios.get("/providers/roles").then((resp) => {
          commit("SET_ROLES", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    /// get provider hours
    async getProviderWorkingHours({ commit }) {
      try {
        let path = await this.$axios(
          requestBuilder("providers", "/workingHours", "post")
        ).then((resp) => {
          // console.log(resp.data);
          commit("SET_HOURS", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    setUuidForProviderInHr({ commit, dispatch }, payload) {
      commit("SET_PROVIDER_UUID_IN_HR", payload);
      dispatch("getWorkingHoursForSpecificProvider");
    },
    getWorkingHoursForSpecificProvider({ commit, state, dispatch }) {
      try {
        let path = this.$axios(
          requestBuilder("providers", "/workingHours", "post", {
            providerUuid: state.getProviderUuidInHr,
          })
        ).then((resp) => {
          commit("SET_HOURS_FOR_PROVIDER", resp.data);
        });
      } catch (err) {
        res.send(err.toString());
      }
    },
    /// get provider services
    async getProviderServices({ commit, dispatch }) {
      try {
        let path = await this.$axios(
          requestBuilder("providers", "/serviceswithproviders", "get")
        ).then((resp) => {
          // console.log(resp.data);
          commit("SET_ALL_SERVICES_WITH_PROVIDERS", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    ////////////////////////////////////////////get all services from external API
    ///
    async actionForGetAllServicesFromApi({ commit }) {
      try {
        let path = await this.$axios(
          requestBuilder("services", "/services", "get")
        ).then((resp) => {
          // console.log(resp.data);
          commit("SET_ALL_SERVICES_FROM_API", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    async actionForGetAllCategoriesFromApi({ commit }) {
      try {
        let path = await this.$axios(
          requestBuilder("services", "/category", "get")
        ).then((resp) => {
          // console.log(resp.data);
          commit("SET_ALL_CATEGORIES_FROM_API", resp.data);
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
    setAssistant({ commit }, payload) {
      commit("SET_LISTING_ALL_ASSISTANTS", payload);
    },
    setSpecialist({ commit }, payload) {
      commit("SET_LISTING_ALL_SPECIALISTS", payload);
    },

    //actions for provider page
    async setIdForProvider({ commit, dispatch }, payload) {
      await commit("SET_PROVIDER_ID", payload);
      dispatch("getProviders");
    },
    async getAllAppointmentsForSpecificProvider({ commit, state }, payload) {
      try {
        await this.$axios
          .post("/providers/getAllAppointmentsForSpecificProvider", {
            specifyId: state.idForProviderWhoIn,
          })
          // let path = await this.$axios(
          //   requestBuilder(
          //     "providers",
          //     "/getAllAppointmentsForSpecificProvider",
          //     "post",
          //     {
          //       specifyId: state.idForProviderWhoIn,
          //     }
          //   )
          // )
          .then((resp) => {
            console.log(resp.data);
            commit("SET_ALL_APPOINTMENTS", resp.data);
          });
      } catch (error) {
        console.log(error.toString());
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
          // let path = await this.$axios(
          //   requestBuilder(
          //     "providers",
          //     "/bringAllProvidersWithSameRole",
          //     "post",
          //     {
          //       specifyRole: state.listingProviders,
          //       pageNumber: state.page,
          //     }
          //   )
          // )
          .then((resp) => {
            commit(
              "SET_LISTING_PROVIDERS_WITH_RESPONSE",
              resp.data.rows.reverse()
            );
            commit("SET_PAGE_LENGTH", resp.data.count);
          });
      } catch (error) {
        console.log(error.toString());
      }
    },
    ///////////////////
    async bringAllAssistants({ commit, state }, payload) {
      try {
        await this.$axios
          .post("/providers/bringAllAssistants", {
            specifyRole: 2,
            pageNumber: state.pageAssistant,
          })
          // let path = await this.$axios(
          //   requestBuilder("providers", "/bringAllAssistants", "post", {
          //     specifyRole: 2,
          //     pageNumber: state.pageAssistant,
          //   })
          // )
          .then((resp) => {
            commit("SET_LISTING_ASSISTANTS", resp.data.rows.reverse());
            commit("SET_PAGE_LENGTH_ASSISTANT", resp.data.count);
          });
      } catch (error) {
        console.log(error.toString());
      }
    },
    ///////////////////
    async bringAllSpecialists({ commit, state }, payload) {
      try {
        await this.$axios
          .post("/providers/bringAllSpecialists", {
            specifyRole: 3,
            pageNumber: state.pageSpecialist,
          })
          // let path = await this.$axios(
          //   requestBuilder("providers", "/bringAllSpecialists", "post", {
          //     specifyRole: 3,
          //     pageNumber: state.pageSpecialist,
          //   })
          // )
          .then((resp) => {
            commit("SET_LISTING_SPECIALISTS", resp.data.rows.reverse());
            commit("SET_PAGE_LENGTH_SPECIALIST", resp.data.count);
          });
      } catch (error) {
        console.log(error);
      }
    },
    ////////////////////

    //////////////////////////////
    ///actions for time attendance
    async actionForGettingAllTimeAttendance({ commit, dispatch }) {
      try {
        let path = await this.$axios(
          requestBuilder("providers", "/getAllTimeAttendance", "get")
        )
          // await this.$axios
          //   .get("/providers/getAllTimeAttendance")
          .then((resp) => {
            commit("SET_TIME_ATTENDANCE_INFO", resp);
          });
      } catch (error) {
        console.error(error);
      }
    },
    //////////////////////////////
    ///actions for leave work
    async actionForGettingAllLeaveWork({ commit, dispatch, state }) {
      try {
        // await this.$axios
        //   .$post("/providers/getAllLeavingsForProviders", {
        //     providerUuid: state.uuidForProviderToGetAllRequests,
        //   })
        let path = await this.$axios(
          requestBuilder("providers", "/getAllLeavingsForProviders", "post", {
            providerUuid: state.uuidForProviderToGetAllRequests,
          })
        ).then((resp) => {
          commit("SET_lEAVE_WORK_PROVIDERS", resp.data);
        });
      } catch (error) {
        console.error(error.toString());
      }
    },
    //////////////////////////////
    ///actions for leave work
    async actionForGettingAllVacations({ commit, dispatch, state }) {
      try {
        // await this.$axios
        //   .$post("/providers/getAllVacationsForProviders", {
        //     providerUuid: state.uuidForProviderToGetAllRequests,
        //   })
        let path = await this.$axios(
          requestBuilder("providers", "/getAllVacationsForProviders", "post", {
            providerUuid: state.uuidForProviderToGetAllRequests,
          })
        ).then((resp) => {
          commit("SET_VACATIONS_PROVIDERS", resp.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    ////////////////////////////
    ///action for uuid related to provider to get all requests
    setUuidForProviderToGetRequests({ commit }, payload) {
      commit("SET_UUID_TO_GET_ALLREQUEST_RELATED_TOPROVIDER", payload);
    },

    ////////////////////////////////////////////////////
    ///actions for balances
    actionForProviderUuidFromContract({ commit }, payload) {
      commit("SET_PROVIDERUUID_FROM_CONTRACT", payload);
    },
    async actionsForGettingAllBalances({ commit, state }) {
      try {
        await this.$axios
          .post("/providers/getAllSickAndAnnualBalances", {
            providerUuid: state.setProviderUuidFromContract,
          })
          .then((resp) => {
            commit("SET_SICK_AND_ANNUAL_BALANCES", resp.data);
          });
      } catch (error) {
        console.error(error);
      }
    },
  },

  getters: {
    getMaxUuid(state) {
      return state.getMaxUuid;
    },
    //////////////////
    ///getter for provider services
    getProviderRole(state) {
      return state.takeProviderRole;
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
    getAllWorkingHoursForProvider(state) {
      return state.getAllWorkingHoursForProvider;
    },
    getAllServicesWithProviders(state) {
      // console.log(state.getAllServicesWithProviders);
      return state.getAllServicesWithProviders;
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
    listingAssistants(state) {
      return state.listingAssistants;
    },
    listingSpecialists(state) {
      return state.listingSpecialists;
    },
    //////////////////////////
    ///pagination
    getPageNumber(state) {
      return state.page;
    },
    getPageNumber(state) {
      return state.pageAssistant;
    },
    getPageNumber(state) {
      return state.pageSpecialist;
    },
    getPageLength(state) {
      return state.pageLength;
    },
    getPageLengthAssistant(state) {
      return state.pageLengthAssistant;
    },
    getPageLengthSpecialist(state) {
      return state.pageLengthSpecialist;
    },
    ///////////////////////////////getters for provider page
    idForProviderWhoIn(state) {
      return state.idForProviderWhoIn;
    },
    bringAllAppointmentsForSpecificProvider(state) {
      return state.getAllAppointmentsForSpecificProvider;
    },

    ///////////////////////////
    ///getters for time attendance
    getAllTimeAttendanceInfo(state) {
      return state.getAllTimeAttendanceInfo;
    },
    ///////////////////////////
    ///getters for leave worl
    getAllLeaveForProviders(state) {
      return state.getAllLeaveForProviders;
    },
    ///////////////////////////
    ///getters for vacations
    getAllVacationsForProviders(state) {
      return state.getAllVacationsForProviders;
    },

    //////////////////////
    /// getters for balances
    setSickAndAnnualBalances(state) {
      return state.setSickAndAnnualBalances;
    },
    //////////////////////
    /// getters for services
    getAllServicesFromApi(state) {
      return state.getAllServicesFromApi;
    },
    //categories
    getAllCategoriessFromApi(state) {
      return state.getAllCategoriessFromApi;
    },
  },
};

export default Provider;
