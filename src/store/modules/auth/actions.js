import { firebase, googleAuthProvider } from '../../../firebase/firebase.config';

export default {

    startLoginEmailPassword({ commit }, { email, password }) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                commit('login', user);
            })
            .catch(e => {
                console.log(e);
            })
    },

    startRegisterWithEmailPasswordName({ commit }, { name, email, password }) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });
                commit('login', user);

            })
            .catch(e => {
                console.log(e);
            })
    },

    startGoogleLogin({ commit }) {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                commit('login', user);
            });
    },

    async startLogout({ commit }) {
        await firebase.auth().signOut();
        commit('logout');
    },

    checkUserAuth({ commit }) {

        firebase.auth().onAuthStateChanged( async(user) => {
    
            if ( user?.uid )  commit('login', user);
            else  commit('logout');

            // Seteamos "isLoading" a false para mostrar la vista correspondiente.
            // Los 200 miliseconds son para evitar que el usuario vea una vista que no corresponda a su estado actual
            setTimeout(() => commit('setLoading', false, { root: true }), 200);
    
        });
    }
}