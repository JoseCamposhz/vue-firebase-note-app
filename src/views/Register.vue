<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="8" md="4">
        <v-card class="elevation-12 text-center">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registro</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="registerForm" ref="registerForm">
              <v-text-field
                v-model="newUser.name"
                :rules="nameRules"
                placeholder="Nombre"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                v-model="newUser.email"
                :rules="emailRules"
                placeholder="Correo"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-text-field
                v-model="newUser.password"
                :rules="passwordRules"
                placeholder="Contraseña"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-text-field
                v-model="newUser.repeat_password"
                :rules="[
                  newUser.password === newUser.repeat_password ||
                    'Las contraseñas deben ser iguales',
                ]"
                placeholder="Repetir Contraseña"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
            <v-btn class="m-auto mr-1" @click="reset()">Limpiar</v-btn>
            <v-btn
              :disabled="!registerForm"
              color="success"
              class="m-auto ml-1"
              @click="startRegisterWithEmailPasswordName()"
            >
              Registro
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { Register } from "../models";
export default {
  data() {
    return {
      registerForm: false,
      newUser: new Register(),
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) => (v && v.length >= 3) || "El nombre debe tener a lo menos 3 caracteres",
      ],
      emailRules: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser valido",
      ],
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 6) || "La contraseña debe tener a lo menos 6 caracteres",
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["startRegisterWithEmailPasswordName"]),
    reset() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style></style>
