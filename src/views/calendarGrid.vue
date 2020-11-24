<template>
  <v-container class="container">
    <div id="calContainer">
      <!-- BLANK PADDING CELLS -->
      <div
        v-for="(blank, index) in preOffset"
        :key="'blank' + index"
        class="cal-square out-month"
      ></div>
      <!-- DATES IN CURRENT MONTH -->
      <div
        v-for="(cell, index) in calState.dayCount"
        :key="'date' + index"
        class="cal-square in-month"
      >
        {{ index + 1 }}
      </div>
      <!-- BLANK PADDING CELLS -->
      <div
        v-for="(blank, index) in postOffset"
        :key="'blank2' + index"
        class="cal-square out-month"
      ></div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["calState"]),
    preOffset: function() {
      if (!this.calState.startOnMonday) {
        return this.calState.dateContextFirstDayNum;
      } else {
        if (this.calState.dateContextFirstDayNum == 0) {
          return 6;
        } else {
          return this.calState.dateContextFirstDayNum - 1;
        }
      }
    },
    postOffset: function() {
      let offset = 0;
      let cellCount = this.preOffset + this.calState.dayCount;

      if (cellCount > 35) {
        offset = 42 - cellCount;
      } else {
        offset = 35 - cellCount;
      }
      return offset;
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
