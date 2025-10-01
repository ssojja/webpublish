import { logIn, logOut } from './authSlice.js';
import { validateFormCheck } from '../../utils/validate.js';

export const getLogIn = (formData, param) => async (dispatch) => {
    if(validateFormCheck(param)){
        if("test" === formData.id && "1234" === formData.pwd){
            dispatch(logIn({"userId":formData.id}));
            return true;
        }
    }
    return false;
}

export const getLogOut = () => async (dispatch) => {
    dispatch(logOut());
    return true;
}