import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//REGISTRO
export const registrousuario = (userData, history) => dispatch => {
    axios
        .post('/api/users/registro', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
};

//LOGIN TOKEN
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            try {
                //GUARDAR LOCAL 
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                //PONERLO EN HEADER
                setAuthToken(token);
                //DECODIFICAR TOKEN
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            } catch (error) {
                console.log(res.data);
            }
        })
        .catch(err =>

            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
}