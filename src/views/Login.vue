<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="8" md="4">
        <v-card class="elevation-12 text-center">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              v-model="loginForm"
              ref="loginForm"
              onsubmit="return false;"
              @submit="startLoginEmailPassword(credenciales)"
            >
              <v-text-field
                v-model="credenciales.email"
                placeholder="Correo"
                prepend-icon="mdi-email"
                type="email"
              />
              <v-text-field
                v-model="credenciales.password"
                placeholder="Contraseña"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-btn color="primary" style="margin: auto" type="submit"
                >Ingresar</v-btn
              >
            </v-form>

            <div class="mt-3">
              <p>Iniciar Sesión con redes sociales</p>

              <v-btn class="justify-center align-center" @click="startGoogleLogin()">
                <img
                  class="py-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                  height="28"
                />
                Ingresar con Google
              </v-btn>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginForm: true,
      credenciales: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["startLoginEmailPassword", "startGoogleLogin"]),
  },
};
</script>
