export default {
    notesAddNew(state, payload) {
        state.notes = [payload, ...state.notes]
    },
    setNotes(state, payload) {
        state.notes = [...payload]
    },
    notesUpdated(state, payload) {
        state.notes = state.notes.map(
            note => note.id === payload.id
                ? payload
                : note
        )
    },
    notesDelete(state, payload) {
        state.notes = state.notes.filter(note => note.id !== payload);
    },
    openNoteDialog(state, { isFormToAdd, note }) {
        state.dialogStatus = true;
        state.isFormToAdd = isFormToAdd;
        state.currentNote = { ...note };
    },
    closeNoteDialog(state) {
        state.dialogStatus = false;
    }
}