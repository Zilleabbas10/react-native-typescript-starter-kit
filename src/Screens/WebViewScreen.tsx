import * as React from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator, SafeAreaView} from 'react-native';
import {If} from 'react-if';
import {defaultTo, propOr} from 'ramda';
import styled from 'styled-components/native';

import {ApplicationStyles, Colors} from '../Themes';
import {isEmptyOrNil} from '../Utils';
import {AppText} from '../Components';

const WebViewLoader = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.transparent};
`;

const WebViewScreen = (props) => {
  const [loader, setLoader] = React.useState(false);
  const {navigation, source} = props;

  const getParam = propOr(() => '', 'getParam', navigation);
  //@ts-ignore
  const uriFromParam = defaultTo('', getParam('url'));
  const uri = propOr(uriFromParam, 'uri', source);

  return (
    <SafeAreaView style={ApplicationStyles.container}>
      <View style={ApplicationStyles.container}>
        <If condition={loader}>
          <WebViewLoader>
            <ActivityIndicator animating={loader} color={Colors.primary} />
          </WebViewLoader>
        </If>
        <If condition={isEmptyOrNil(uri)}>
          <WebViewLoader>
            <AppText>404: URL Not Found</AppText>
          </WebViewLoader>
        </If>

        <WebView
          onLoadStart={() => setLoader(true)}
          onLoadEnd={() => setLoader(false)}
          {...props}
          source={{uri}}
        />
      </View>
    </SafeAreaView>
  );
};
export default WebViewScreen;
