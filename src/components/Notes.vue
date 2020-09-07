<template>
  <section>
    <v-container>
    
      <v-row dense>
        <v-spacer />
        <v-btn color="success" fab dark @click="openAddNoteDialog()">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-row>

      <v-row dense>
        <v-col
          v-for="(note, index) in notes"
          :key="index"
          class="px-3 mt-4"
          md="4"
          sm="6"
          xs="12"
        >
          <NoteCard :note="note" />
        </v-col>
      </v-row>

    </v-container>

    <NoteForm />
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { Note } from "../models";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("notes", ["notes"]),
  },
  mounted() {
    this.getUserNotes();
  },
  methods: {
    ...mapActions("notes", ["getUserNotes", "saveNote"]),
    ...mapMutations("notes", ["openNoteDialog"]),
    openAddNoteDialog() {
      this.openNoteDialog({ isFormToAdd: true, note: new Note() });
    },
  },
};
</script>
