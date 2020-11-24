<template>
  <div id="date">
    <span class="date-nav-arrow" @click="changeMonth(-1)"
      ><v-icon large>mdi-arrow-left-bold</v-icon></span
    >
    <span>{{ displayContext(calState.dateContext) }}</span>

    <span class="date-nav-arrow" @click="changeMonth(1)"
      ><v-icon large>mdi-arrow-right-bold</v-icon></span
    >
    <br />
    <span class="small-text">
      First DoW: {{ calState.dateContextFirstDay }}
    </span>
    <span class="small-text"> Day Count: {{ calState.dayCount }} </span>
    <span class="small-text">
      <a href="#" @click="this.goToToday">Go to today</a>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["calState"]),
    currentDate: function() {
      return this.calState.dateContext.get("date");
    }
  },
  methods: {
    ...mapActions(["monthChange", "goToToday"]),
    displayContext: function(date) {
      return moment(date).format("MMMM YYYY");
    },
    changeMonth: function(int) {
      this.monthChange(int);
    }
  }
};
</script>

<style scoped>
#date {
  text-align: center;
  font-size: 3rem;
}

.date-nav-arrow {
  margin: 0 4rem;
}

.date-nav-arrow :hover {
  color: red;
}

.small-text {
  display: inline-block;
  font-size: 1rem;
  padding: 0 15px;
}
</style>
