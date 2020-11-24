import moment from "moment";

const state = {
  startOnMonday: false,
  currentDate: moment(),
  dateContext: moment(),
  dateContextFirstDayNum: moment(
    moment().subtract(moment().get("date") - 1, "days")
  ).get("day"),
  dateContextFirstDay: moment(
    moment().subtract(moment().get("date") - 1, "days")
  ).format("dddd"),
  dayCount: moment().daysInMonth()
};

const getters = {
  calState: state => state
};

const actions = {
  toggleStartOnMonday({ commit }) {
    commit("TOGGLE_START_MONDAY");
  },
  monthChange({ commit }, int) {
    let newMonth = moment(state.dateContext).add(int, "month");
    commit("CHANGE_MONTH", newMonth);
  },
  goToToday({ commit }) {
    commit("GO_TO_TODAY");
  }
};

const mutations = {
  TOGGLE_START_MONDAY: state => (
    (state.startOnMonday = !state.startOnMonday),
    console.log(state.startOnMonday)
  ),
  CHANGE_MONTH: (state, newMonth) => (
    (state.dateContext = newMonth),
    ((state.dayCount = newMonth.daysInMonth()),
    (state.dateContextFirstDay = moment(state.dateContext)
      .subtract(state.dateContext.get("date") - 1, "days")
      .format("dddd"))),
    (state.dateContextFirstDayNum = moment(state.dateContext)
      .subtract(state.dateContext.get("date") - 1, "days")
      .get("day"))
  ),
  GO_TO_TODAY: state => (
    (state.dateContext = moment()),
    (state.dateContextFirstDay = moment(
      moment().subtract(moment().get("date") - 1, "days")
    ).format("dddd")),
    (state.dayCount = state.dateContext.daysInMonth()),
    (state.dateContextFirstDayNum = moment(state.dateContext)
      .subtract(state.dateContext.get("date") - 1, "days")
      .get("day"))
  )
};

export default {
  state,
  getters,
  actions,
  mutations
};
