import axios from 'axios';
import setAuthorizationToken from '../utility/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';


export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    };
}


export function authUserLogin(data){
    return dispatch => {
        var url='http://localhost:7000/api/auth';
        return axios.post(url, data)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                // SIMPAN USER KE STORE REDUX
                // console.log(jwt.decode(token));
                dispatch(setCurrentUser(jwt.decode(token)));
            });
    }
}

export function userLogout(){
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}