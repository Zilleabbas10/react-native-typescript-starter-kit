import {axiosInstance} from './api.config';
import APP_ENDPOINTS from './endpoints';
import ApiHelpers from './helpers';

type loginUserWithPassword = {
  email: string;
  password: string;
};
const loginUserWithPassword = async (data: loginUserWithPassword) => {
  try {
    const response = await axiosInstance.post(APP_ENDPOINTS.AUTH, data);
    return {...response};
  } catch (error) {
    return {error, data: null};
  }
};

const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get(APP_ENDPOINTS.USER_PROFILE);
    return {...response};
  } catch (error) {
    ApiHelpers.logoutOn401(error);
    return {error, data: null};
  }
};

const sendResetLinkToEmail = async (data: object) => {
  try {
    const response = await axiosInstance.post(
      APP_ENDPOINTS.RESET_PASSWORD,
      data,
    );
    return {...response};
  } catch (error) {
    return {error, data: null};
  }
};

// const updateUserAvatar = async (data: FormData) => {
//   try {
//     const config = {
//       'headers': {
//         'Content-Type': 'multipart/form-data'
//       }
//     }
//     const response = await axiosInstance.post(APP_ENDPOINTS.UPLOAD_AVATAR, data, config)

//     return { ...response }
//   } catch (error) {
//     ApiHelpers.logoutOn401(error)
//     return { error, data: null };
//   }
// }

export default {
  loginUserWithPassword,
  getUserProfile,
  sendResetLinkToEmail,
  //updateUserAvatar
};
