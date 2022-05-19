import requestBuilder from "../../requestBuilder";
const Hr = {
  state: {
    ////////////////
    ///get all salaries (external api)
    getSalaryForEmployee: null,
    //////////////////
    ///get all expenses (external api)
    getExpensesForEmployee: [],
  },

  mutations: {
    /////////////////
    ///mutation for get basic salary for specific provider from external api
    SET_SALARY_FOR_PROVIDER(state, payload) {
      return (state.getSalaryForEmployee = payload);
    },
    /////////////////
    ///mutation for get basic salary for specific provider from external api
    SET_EXPENSES_FOR_PROVIDER(state, payload) {
      return (state.getExpensesForEmployee = payload);
    },
  },
  actions: {
    //////////////////////////////////////////
    ///Aaction for get basic salary
    async actionForGettingSalaryForProvider({ commit }, payload) {
      try {
        let path = await this.$axios(
          requestBuilder("billing", "/ProviderSalaries/:id", "get", {
            id: payload,
          })
        ).then((resp) => {
          commit("SET_SALARY_FOR_PROVIDER", resp.data);
        });
      } catch (error) {
        console.error(error.toString());
      }
    },
    //////////////////////////////////////////
    ///Aaction for get expenses
    async actionForGettingExpensesForProvider({ commit }, payload) {
      try {
        let path = await this.$axios(
          requestBuilder(
            "billing",
            "/ProviderExpenses/Provider/all/Expenses/:id",
            "get",
            {
              id: payload,
            }
          )
        ).then((resp) => {
          commit("SET_EXPENSES_FOR_PROVIDER", resp.data);
        });
      } catch (error) {
        console.error(error.toString());
      }
    },
  },

  getters: {
    ////////////////////////
    ///getter for basic salary
    getSalaryForEmployee(state) {
      return state.getSalaryForEmployee;
    },
    ////////////////////////
    ///getter for expenses
    getExpensesForEmployee(state) {
      return state.getExpensesForEmployee;
    },
  },
};

export default Hr;
