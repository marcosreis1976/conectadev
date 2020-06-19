import React, { useEffect, useCallback} from 'react';
import { useDispatch } from 'react-redux';

import { setUserData } from '../../actions/accountActions';
import authservice from '../../services/authService';

function Auth ({children}) {
    const dispatch = useDispatch();

    const initAuth = useCallback(async () => {
        if (authservice.isAuthenticated()) {
            //Recuperar os dados novamente do usuário logado
            await dispatch(setUserData());
        }

    }, [dispatch])

    useEffect(() => {
        initAuth();
    }, [initAuth])

    return children
}

export default Auth;