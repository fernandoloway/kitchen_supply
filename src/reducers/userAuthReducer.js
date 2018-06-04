import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from 'lodash.isempty';

const initialState = {
  userIsAuthenticated: false,
  user: {}
}

export default (state = initialState, action ={}) => {
  switch (action.type) {

  case SET_CURRENT_USER:
    return { 
      userIsAuthenticated: !isEmpty(action.user),
      user: action.user
     }

  default:
    return state
  }
}


