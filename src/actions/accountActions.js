import authService from '../services/authService';
import authservice from '../services/authService';

const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authservice.signin(email, password);

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                user
            }
        })

    }
}

export {signIn};