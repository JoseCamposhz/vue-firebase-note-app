import { db, querySnapshot } from '../../../firebase';

export default {

    async saveNote({ commit, rootState }, newNote) {

        const uid = rootState.auth.user.uid;

        const doc = await db.collection(`users/${uid}/notes`).add({
            ...newNote
        });

        commit('notesAddNew', { id: doc.id, ...newNote });

        commit('setSnack', {
            isOpen: true,
            text: "Nota Creada",
            color: "success",
        }, { root: true });
    },

    async getUserNotes({ commit, rootState }) {

        const uid = rootState.auth.user.uid;

        const notesSnap = await db.collection(`users/${uid}/notes`).get();
        const notes = querySnapshot(notesSnap);

        commit('setNotes', notes);
    },

    async updateNote({ commit, rootState }, note) {

        const uid = rootState.auth.user.uid;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`users/${uid}/notes/${note.id}`).update(noteToFirestore);

        commit('notesUpdated', { id: note.id, ...noteToFirestore });

        commit('setSnack', {
            isOpen: true,
            text: "Nota Actualizada",
            color: "success",
        }, { root: true });
    },

    async deleteNote({ commit, rootState }, noteId) {

        const uid = rootState.auth.user.uid;

        await db.doc(`users/${uid}/notes/${noteId}`).delete();

        commit('notesDelete', noteId);

        commit('setSnack', {
            isOpen: true,
            text: "Nota Eliminada",
            color: "success",
        }, { root: true });
    },
}