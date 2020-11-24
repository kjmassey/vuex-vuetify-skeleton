<template>
  <v-container class="container">
    <div
      id="dayContainer"
      v-if="this.calState.startOnMonday == false"
      transition="scale-transition"
      key="startSun"
    >
      <div v-for="day in dayNameList" :key="day" class="day-name-square">
        {{ day }}
      </div>
    </div>
    <div
      id="dayContainer"
      v-if="this.calState.startOnMonday == true"
      transition="scale-transition"
      key="startMon"
      :class="{ hidden: this.calState.startOnMonday == true }"
    >
      <div v-for="day in dayNameListMon" :key="day" class="day-name-square">
        {{ day }}
      </div>
    </div>
  </v-container>
</template>

<script>
import { DAY_NAME_LIST, DAY_NAME_LIST_MON } from "../store/service";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dayNameList: DAY_NAME_LIST,
    dayNameListMon: DAY_NAME_LIST_MON
  }),
  computed: {
    ...mapGetters(["calState"])
  }
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

#dayContainer {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.day-name-square {
  flex: 1 0 13.5%;
  border-radius: 5%;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
}

@media (max-width: 550px) {
  #dayContainer {
    display: none;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.hidden {
  display: none;
}
</style>
