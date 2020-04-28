import * as React from 'react';

import {NavigationService} from '../Services';
import APP_ROUTES from '../Navigation/AppRoutes';
import {AppHeading} from '../Components';

const AuthLoadingScreen = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      NavigationService.replaceScreen(APP_ROUTES.AUTH_STACK);
    }, 0);
  }, []);

  return null;
};

export default AuthLoadingScreen;
