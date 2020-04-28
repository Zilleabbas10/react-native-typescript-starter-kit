import * as React from 'react';
import VersionInfo from 'react-native-version-info';
import {AppText} from './AppStyledComponents';

const AppVersion = () => {
  return <AppText>© App v{VersionInfo.appVersion}</AppText>;
};

export default AppVersion;
