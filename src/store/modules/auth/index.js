import router from '@/router';
import actions from './actions';

const state = {
    isAuth: false,
    user: null
}

const mutations = {
    login(state, { uid, displayName }) {
        state.isAuth = true;
        state.user = {
            uid,
            name: displayName
        };

        if (location.pathname !== '/notes') router.push('/notes');
        
    },
    logout(state) {
        state.isAuth = false;
        state.user = null;
        
        if (!location.pathname.includes('auth')) router.push('/auth/login');
    }
};

export default {
    namespaced: true,
    state,
    getters: {},
    actions,
    mutations
}