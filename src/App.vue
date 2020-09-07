<template>
  <v-app>
    <v-main>
      <Loader v-if="isLoading" />
      <AppBar v-if="!isLoading" />
      <router-view v-if="!isLoading" />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.checkUserAuth();
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapActions("auth", ["checkUserAuth"]),
  },
};
</script>
