/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './dist/App';
import {name as appName} from './app.json';

//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
// GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;

// Disabling yellow warnings in app
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
