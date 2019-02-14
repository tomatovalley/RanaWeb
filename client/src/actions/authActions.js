import { GET_ERRORS } from './types';
import axios from 'axios';

//REGISTRO
export const registrousuario = (userData, history) => dispatch => {
    axios
        .post('/api/users/registro', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};