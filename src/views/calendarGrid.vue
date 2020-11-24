<template>
  <v-container class="container">
    <div id="calContainer">
      <div
        v-for="gridNum in gridCount"
        :key="gridNum"
        class="cal-square"
        v-bind:class="{
          'in-month':
            calState.dateContextFirstDayNum + startDayOffset == gridNum ||
            calState.dateContextFirstDayNum + calState.dayCount == gridNum ||
            (gridNum >= calState.dateContextFirstDayNum + startDayOffset &&
              gridNum <= calState.dateContextFirstDayNum + calState.dayCount),
          'out-month': !(
            calState.dateContextFirstDayNum + startDayOffset == gridNum ||
            calState.dateContextFirstDayNum + calState.dayCount == gridNum ||
            (gridNum >= calState.dateContextFirstDayNum + startDayOffset &&
              gridNum <= calState.dateContextFirstDayNum + calState.dayCount)
          )
        }"
      >
        <span
          class="grid-num"
          v-if="
            gridNum - calState.dateContextFirstDayNum > 0 &&
              gridNum - calState.dateContextFirstDayNum <= calState.dayCount
          "
          >{{ gridNum - calState.dateContextFirstDayNum }}</span
        >
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["calState"]),
    gridCount: function() {
      if (this.calState.dateContextFirstDayNum + this.calState.dayCount > 35) {
        return 42;
      } else {
        return 35;
      }
    },
    startDayOffset: function() {
      if (this.calState.startOnMonday == false) {
        return 1;
      } else if (this.calState.dateContextFirstDayNum == 1) {
        return 0;
      } else {
        return 7;
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
}

.container {
  height: 100%;
}

#calContainer {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.cal-square {
  border: 1px solid blue;
  padding: 0.4rem;
  flex: 2 0 13.5%;
  border-radius: 5%;
  margin: 0.1em;
}

.cal-square:hover {
  background-color: rgb(225, 225, 225);
  cursor: pointer;
}

.in-month {
  background-color: darkgrey;
}
.out-month {
  opacity: 0.5;
}

.grid-num {
  float: right;
  font-weight: 700;
  font-size: 0.8rem;
  /* opacity: 0; */
}

/* .grid-num:hover {
  opacity: 1;
} */

@media (max-width: 550px) {
  #calContainer {
    display: block;
  }
}
</style>
