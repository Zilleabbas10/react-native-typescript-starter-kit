import setCookie from 'set-cookie-parser';
import {find, propEq, propOr, pathOr} from 'ramda';
import AsyncStorageService from '../AsyncStorageService';
import {APP_CONSTANTS} from '../../Constants';
import {AppNotification} from '../../Components';
import NavigationService from '../NavigationService';
import AppRoutes from '../../Navigation/AppRoutes';

type findCookieParams = {
  cookieData: string;
  cookieKey: string;
};

/**
 * returns the cookie's value after parsing the cookie header
 *
 *
 * @param {findCookieParams} params
 * @returns
 */
const findCookieFromSetCookie = (params: findCookieParams) => {
  const {cookieData, cookieKey} = params;

  const cookieHeaders = setCookie.splitCookiesString(cookieData);
  const cookies = setCookie.parse(cookieHeaders);
  const requiredValue = find(propEq('name', cookieKey), cookies);

  return propOr('', 'value', requiredValue);
};

const logoutOn401 = (error: any) => {
  const status = pathOr(0, ['response', 'status'], error) as number;
  switch (status) {
    case 401:
      AsyncStorageService.removeKeyFromAsyncStorage(APP_CONSTANTS.AUTH_TOKEN);
      AppNotification.toggleErrorNotification({
        message: 'Session Expired',
        description: 'Please log in again.',
        duration: 5000,
      });

      setTimeout(() => {
        NavigationService.navigate(AppRoutes.AUTH_STACK);
      }, 500);
      return;
    default:
      console.log('unknown error', error);
      return;
  }
};

export default {
  findCookieFromSetCookie,
  logoutOn401,
};
