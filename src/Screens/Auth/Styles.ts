import { StyleSheet, Platform, Dimensions } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create<any>({
  container: ApplicationStyles.container,
  mainContainer: ApplicationStyles.mainContainer,
  logoContainer: {
    paddingTop: Metrics.doubleBaseMargin * 2,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 30,
  },
  magicLinkContainer: {
    marginTop: Metrics.doubleBaseMargin * 2,
    alignItems: 'center'
  },
  magicLink: {
    resizeMode: 'contain',
    height: Platform.OS === 'android' ? (width / 5) : 100,
    marginBottom: Metrics.doubleBaseMargin
  },
  loginHeaderContainer: {
    flex: 1,
  },
  loginContentContainer: {
    flex: 1.5,
    alignItems: 'center'
  },
  footerText: {
    fontSize: Fonts.size.small,
    textAlign: 'center',
    color: Colors.primaryText
  }
})
