import * as React from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';

import styles from './Styles';
import {
  PrimaryButton,
  InputField,
  AppFooter,
  AppText,
  AnimatedLoader,
} from '../../Components';
import {isEmptyOrNil, useIsDeviceOrientationPortrait} from '../../Utils';
import {APP_ROUTES} from '../../Navigation';
import {Images, Colors, Metrics} from '../../Themes';
import {NavigationService} from '../../Services';
import {toggleAppScreenLoader} from '../../Actions';

const getEmailError = (email: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
  !isEmptyOrNil(email)
    ? 'Invalid e-mail address'
    : '';

const LoginScreen = (props) => {
  const {toggleAppLoader} = props;
  const [email, setEmail] = React.useState('');

  const toggleLoader = () => {
    toggleAppLoader(true);
    setTimeout(() => {
      toggleAppLoader(false);
      NavigationService.navigate(APP_ROUTES.PASSWORD_SCREEN);
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={styles.mainContainer}>
          <View style={styles.loginHeaderContainer}>
            <View style={styles.logoContainer}>
              <Image source={Images.appLogo} style={styles.logo} />
            </View>
          </View>
          <View style={styles.loginContentContainer}>
            <InputField
              label={'Enter your work e-mail address'}
              value={email}
              onChangeHandler={(email: string) => setEmail(email)}
              placeholder="work@email.com"
              errorMessage={
                isEmptyOrNil(email) ? 'Please enter your email' : ''
              }
              keyboardType="email-address"
              //onSubmitEditing={sendMagicLinkHandler}
            />
            <PrimaryButton
              fullWidth
              buttonColor={Colors.primary}
              //loading={loading}
              disabled={false}
              buttonLabel="Login"
              onClickHandler={() => toggleLoader()}
            />
          </View>

          <AnimatedLoader customStyle={{paddingTop: 10}} />
        </View>
      </KeyboardAvoidingView>

      <AppFooter>
        <AppText
          style={{
            ...styles.footerText,
            paddingLeft: !useIsDeviceOrientationPortrait()
              ? Metrics.doubleBaseMargin * 4
              : 0,
          }}>
          © All rights reserved. You agree to terms by signing in.
        </AppText>
      </AppFooter>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAppLoader: (params) => dispatch(toggleAppScreenLoader(params)),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
