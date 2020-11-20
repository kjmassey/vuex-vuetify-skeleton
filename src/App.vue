<template>
  <v-app>
Get your app on!
  </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "App",
  computed: {...mapGetters()},
  components: {
  },
  methods: {
    ...mapActions([])
  },

  data: () => ({
    //
  })
};
</script>
