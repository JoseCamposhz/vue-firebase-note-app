<template>
  <v-card shaped>
    <v-card-text>
      <v-chip class="my-2" :color="getPriorityColor(note.priority)">
        {{ note.priority }}
      </v-chip>
      <v-checkbox
        v-model="note.status"
        :label="note.description"
        @click="setCheckbox()"
      />
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="openEditNoteDialog()">
        <v-icon color="primary">mdi-pencil</v-icon>
      </v-btn>
      <v-btn text @click="deleteNote(note.id)">
        <v-icon color="error">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { Note } from "../models";
export default {
  props: {
    note: {
      type: Object,
      default: () => {
        return new Note();
      },
    },
  },
  methods: {
    ...mapMutations("notes", ["openNoteDialog"]),
    ...mapActions("notes", ["updateNote", "deleteNote"]),
    openEditNoteDialog() {
      this.openNoteDialog({ isFormToAdd: false, note: this.note });
    },
    setCheckbox() {
      this.updateNote(this.note);
    },
    getPriorityColor(value) {
      if (value === "Normal") return "success";
      if (value === "Urgente") return "warning";
      if (value === "Muy Urgente") return "error";
    },
  },
};
</script>
