import Axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

const BASE_URL = `www.beta.com`;
// const BASE_URL = `www.production.com`
const cache = new LRU({max: 10});
export let axiosInstance: any;

type ApiConfigParams = {
  isLoggedIn: boolean;
  authToken: string | null | undefined;
};
const initApiConfig = (params: ApiConfigParams) => {
  const {isLoggedIn, authToken = ''} = params;

  const prefix = isLoggedIn ? 'proxy.' : '';
  axiosInstance = Axios.create({
    baseURL: `https://${prefix}${BASE_URL}`,
    timeout: 60000,
    headers: {
      ...(isLoggedIn ? {'x-auth-token': authToken} : {}),
    },
  });
  configure({axios: axiosInstance, cache});
};

export default initApiConfig;
