import moment from 'moment';

const UNIQUE_PURCHASE_MS = moment().subtract(30, 'days').valueOf();

export default {
  AUTH: `/portal/employee/login`,
  RESET_PASSWORD: `/portal/employee/reset`,

  USER_PROFILE: `/api/settings/profile`,
};
