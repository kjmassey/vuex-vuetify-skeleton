<template>
  <v-menu absolute offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, viewMenu }">
      <v-btn
        fab
        absolute
        right
        color="blue"
        class="btn"
        v-bind="viewMenu"
        v-on="on"
        ><v-icon large>mdi-eye</v-icon></v-btn
      >
    </template>
    <v-list dense nav>
      <v-list-item><span class="menu-header">View Settings:</span></v-list-item>
      <v-divider />
      <v-list-item>
        <v-switch @click="this.toggleStartOnMonday" /> Start week on Monday
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    startOnMonday: false
  }),
  computed: {
    ...mapGetters(["calState"])
  },
  methods: {
    ...mapActions(["toggleStartOnMonday"])
  }
};
</script>

<style>
.btn {
  margin-top: 1.5rem;
}
.menu-header {
  font-size: 1rem;
  font-weight: 400;
}
</style>
