import actions from './actions';
import mutations from './mutations';
import { Note } from '../../../models';

const state = {
    notes: [],
    currentNote: new Note(),
    dialogStatus: false,
    isFormToAdd: true
}

export default {
    namespaced: true,
    state,
    getters: {},
    actions,
    mutations
}