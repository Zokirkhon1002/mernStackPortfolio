/* eslint-disable no-console */
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';




// sign in
export const signin = (formData,router) => async (dispatch) => {
    try {
        // log in the user...
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push("/")
    } catch (err) {
        console.log(err.response.data)
    }
}


// sign up
export const signup = (formData,router) => async (dispatch) => {
    try {
        // sign up the user...
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push("/")
    } catch (err) {
        console.log(err.response.data)
    }
}