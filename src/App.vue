<template>
  <v-app>
    <monthNav />
    <dowHeader />
    <calendarGrid />
    <viewButton />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import calendarGrid from "./views/calendarGrid";
import dowHeader from "./views/dowHeader";
import viewButton from "./views/viewButton";
import monthNav from "./views/monthNav";

export default {
  name: "App",
  computed: { ...mapGetters(["calState"]) },
  components: {
    calendarGrid,
    dowHeader,
    viewButton,
    monthNav
  },
  methods: {
    ...mapActions([])
  },

  data: () => ({
    //
  })
};
</script>
