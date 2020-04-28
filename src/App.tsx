import * as React from 'react';
import {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View, Text, SafeAreaView} from 'react-native';
import {AppNavigator} from './Navigation';
import NetInfo from '@react-native-community/netinfo';
import {If, Then, Else} from 'react-if';

import {NavigationService} from './Services';
import {
  AppScreenLoader,
  AppErrorDialog,
  AppErrorBoundary,
  AppNotification,
} from './Components';
import {APP_CONSTANTS} from './Constants';
import {Colors} from './Themes';
import {clearImagesCache} from './Components/Commons/CachedImageBackground';

const {AppFlashMessage} = AppNotification;

//@ts-ignore
Text.defaultProps = {
  //@ts-ignore
  ...Text.defaultProps,
  maxFontSizeMultiplier: 1.1,
};

const AppContainer = (props) => {
  const {isAppError} = props;
  const ref = React.useRef(null);

  React.useEffect(() => {
    NavigationService.setTopLevelNavigator(ref);
  });

  return (
    <Fragment>
      <AppErrorBoundary>
        <StatusBar backgroundColor={Colors.rose} barStyle="default" />
        <If condition={isAppError}>
          <Then>
            <NavigationContainer ref={ref}>
              <AppNavigator />
            </NavigationContainer>
          </Then>
          <Else>
            <View style={{flex: 1}}>
              <AppErrorDialog
                isModalVisible={!isAppError}
                errorMessage={APP_CONSTANTS.APP_ERROR_MESSAGE}
                title="Technical Difficulties"
                showButton={false}
              />
            </View>
          </Else>
        </If>
      </AppErrorBoundary>
    </Fragment>
  );
};

const App = () => {
  const [isConnected, toggleNetwork] = React.useState(false);

  const handleConnectivityChange = async () => {
    const checkConnectivity = await NetInfo.fetch();
    const {isConnected} = checkConnectivity;
    toggleNetwork(isConnected);
    clearImagesCache();
  };

  React.useEffect(() => {
    NetInfo.addEventListener((change) => handleConnectivityChange());
  }, [isConnected]);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <AppScreenLoader />
        <AppContainer isAppError={isConnected} />
        <AppFlashMessage />
      </SafeAreaView>
    </>
  );
};

export default App;
