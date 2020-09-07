<template>
  <v-dialog
    v-model="dialogStatus"
    max-width="520"
    @click:outside="closeNoteDialog()"
  >
    <v-card>
      <v-card-title class="headline">
        {{ isFormToAdd ? "Nueva Nota" : "Editar Nota" }}
      </v-card-title>
      <v-card-text>
        <v-form v-model="noteForm" ref="noteForm">
          <v-text-field
            v-model="currentNote.description"
            :rules="noteRules"
            label="Descripción"
            placeholder="Descripción"
          />
          <v-chip
            v-for="(priority, index) in priorities"
            :key="index"
            :color="currentNote.priority === priority.value ? priority.color : 'default'"
            @click="setPriority(priority.value)"
            class="ma-2"
          >
            {{ priority.value }}
          </v-chip>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeNoteDialog()">
          Cancelar
        </v-btn>
        <v-btn color="primary" text @click="sendForm()">
          {{ isFormToAdd ? "Agregar" : "Actualizar" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      noteForm: true,
      noteRules: [
        (value) => !!value || "Campo requerido",
        (value) => (value && value.length >= 3) || "Mínimo 3 caracteres",
      ],
      priorities: [
        { value: "Normal", color: "success" },
        { value: "Urgente", color: "warning" },
        { value: "Muy Urgente", color: "error" }
      ],
    };
  },
  computed: {
    ...mapState("notes", ["dialogStatus", "isFormToAdd", "currentNote"]),
  },
  methods: {
    ...mapMutations(["setSnack"]),
    ...mapMutations("notes", ["closeNoteDialog"]),
    ...mapActions("notes", ["saveNote", "updateNote"]),
    setPriority(priority) {
      this.currentNote.priority = priority
    },
    sendForm() {
      if (this.$refs.noteForm.validate()) {
        // Verificamos que tipo formulario es
        this.closeNoteDialog();
        if (this.isFormToAdd) this.saveNote(this.currentNote);
        else this.updateNote(this.currentNote);
      } else {
        this.setSnack({
          isOpen: true,
          text: "Formulario inválido",
          color: "error",
        });
      }
    },
  },
};
</script>
