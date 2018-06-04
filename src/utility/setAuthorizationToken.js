import axios from 'axios';

export default function setAuthorizationToken(token){
    // jika ada token maka set default header Authorization = Bearer token
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}