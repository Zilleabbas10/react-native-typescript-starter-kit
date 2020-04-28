import * as React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {isEmpty} from 'ramda';
import {If, Then} from 'react-if';

import styles from './Styles';
import {
  PrimaryButton,
  InputField,
  AppFooter,
  ClickableText,
  AppText,
  AppAlert,
  AppHeading,
} from '../../Components';
import {Images, Colors, Metrics, Fonts} from '../../Themes';
import {isEmptyOrNil} from '../../Utils';
import {string} from 'prop-types';

const validatePassword = (password: string) =>
  !isEmpty(password) ? '' : 'Invalid password.';

const ResetLinkComponent = (email: string) => {
  const ResetPasswordConfirmationAlertOptions = {
    title: `We've sent a password reset email to ${email}.`,
    message: `Open your email and click on the link to reset your password.`,
    alertActions: [
      {
        text: 'Done',
        onPress: () => console.log('Done'),
      },
      {
        text: 'Open Mail',
        onPress: () => console.log('open email app'),
      },
    ],
  };

  const ResetPasswordAlertOptions = {
    title: `Do you want to reset password for ${email}?`,
    message: `We will send you an email with instruction on how to reset the password.`,
    alertActions: [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => console.log('cancelled'),
      },
      {
        text: 'Reset',
        onPress: () => {
          AppAlert(ResetPasswordConfirmationAlertOptions);
        },
      },
    ],
  };

  return (
    <ClickableText
      label={'Reset Password'}
      fontWeight="bold"
      onLinkPress={() => AppAlert(ResetPasswordAlertOptions)}
    />
  );
};

const PasswordScreen = (props: any) => {
  const [password, setPassword] = React.useState('');

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <ScrollView style={styles.mainContainer}>
          <View
            style={{
              ...styles.loginHeaderContainer,
              marginBottom: Metrics.doubleBaseMargin,
            }}>
            <View style={styles.logoContainer}>
              <Image source={Images.appLogo} style={styles.logo} />
            </View>
          </View>

          <View style={styles.loginContentContainer}>
            <InputField
              inputFieldStyle={{marginTop: 5}}
              label={'or you can always enter your password'}
              value={password}
              onChangeHandler={(value: string) => setPassword(value)}
              showInputLinkComponent
              InputLinkComponent={() => ResetLinkComponent('abc@gmail.com')}
              placeholder="password"
              secureTextEntry
              errorMessage={
                isEmptyOrNil(password) ? 'Please Fill your password' : ''
              }
            />
            <PrimaryButton
              buttonLabel="Log In"
              fullWidth
              //loading={isLoading}
              disabled={false}
              buttonColor={Colors.primary}
              onClickHandler={() => alert('signup')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <AppFooter>
        <AppText style={styles.footerText}>
          © All rights reserved. You agree to terms by signing in.
        </AppText>
      </AppFooter>
    </View>
  );
};

export default PasswordScreen;
