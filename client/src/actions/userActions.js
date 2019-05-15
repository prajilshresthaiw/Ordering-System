import { USER } from '../constants/actionTypes';
import { setCookie, destroyCookie } from '../helpers/cookie';
import * as userService from '../services/userService';

export const fetchUser = () => async (dispatch) => {
   try {
      const { data: { data } } =  await userService.getById('5ca4efe333131835798342e9');
      dispatch({ type: USER.FETCH_USER, payload: data});
   } catch(e) {
      dispatch({ type: USER.FETCH_ERROR, payload: e.message });
   }
}

export const loginUser = ({ email, password }) => async (dispatch) => {
   dispatch({ type: USER.LOGIN_REQUEST });

   try {
      const { data: { data } } =  await userService.login({ email, password });
      setCookie('order', data.token, { path: '/' });
      dispatch({ type: USER.LOGIN_SUCCESS, payload: data });
   } catch(e) {
      dispatch({ type: USER.LOGIN_FAILURE, payload: e.message });
   }
}

export const logoutUser = () => async (dispatch) => {
   dispatch({ type: USER.LOGOUT_REQUEST });

   destroyCookie('order');
   dispatch({ type: USER.LOGOUT_SUCCESS });
}

export const registerUser = (userData) => async (dispatch) => {
   dispatch({ type: USER.REGISTER_REQUEST });

   try {
      const { data: response } = await userService.register(userData);
      if(response.status === 200) {
         dispatch({ type: USER.REGISTER_SUCCESS });
      } else {
         dispatch({ type: USER.REGISTER_ERROR, payload: response.error });
      }

   } catch(e) {
      dispatch({ type: USER.REGISTER_FAILURE });
   }

}