import * as React from 'react';
import {SafeAreaView, View, Image, KeyboardAvoidingView} from 'react-native';

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

const getEmailError = (email: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
  !isEmptyOrNil(email)
    ? 'Invalid e-mail address'
    : '';

const LoginScreen = (props: any) => {
  const [email, setEmail] = React.useState('');

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
              onClickHandler={() =>
                NavigationService.navigate(APP_ROUTES.PASSWORD_SCREEN)
              }
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

export default LoginScreen;
