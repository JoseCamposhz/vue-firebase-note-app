export default {
    setSnack(state, payload) {
        state.snackbar.isOpen = payload.isOpen;
        state.snackbar.text = payload.text;
        state.snackbar.color = payload.color;
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    }
}