<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/notes.png"
        transition="scale-transition"
        width="40"
      />

      <span class="headline">NoteApp</span>
    </div>

    <v-spacer />

    <div v-if="user === null">
      <v-btn text to="/auth/login">
        <span class="hidden-sm-and-down">Iniciar Sesión</span>
        <v-icon class="hidden-sm-and-up">mdi-login</v-icon>
      </v-btn>

      <v-btn class="ml-2" text to="/auth/register">
        <span class="hidden-sm-and-down">Registro</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn>
    </div>

    <div v-if="user !== null" class="align-center">
      <span class="user-name">{{ user.name.toUpperCase() }}</span>

      <v-btn class="ml-3" text @click="startLogout()">
        <span class="hidden-sm-and-down">Cerrar Sesión</span>
        <v-icon class="hidden-sm-and-up">mdi-logout</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["startLogout"]),
  },
};
</script>

<style>
.user-name {
  font-size: 0.875rem;
  vertical-align: middle;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
}
</style>
