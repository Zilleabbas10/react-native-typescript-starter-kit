import * as React from 'react';
import HTML from 'react-native-render-html';

import { Metrics, Fonts, Colors } from '../../Themes'
import { Platform } from 'react-native';

const fontStyle = {
  fontSize: Fonts.size.medium,
  lineHeight: 18,
  fontFamily: 'TTCommons-Regular'
};

const tagsStyles = {
  b: {
    marginVertical: 7,
    fontFamily: 'TTCommons-DemiBold',
    fontWeight: Platform.OS === 'android' ? '900' : 'bold',
    color: Colors.black,
    fontSize: Fonts.size.small
  },
  p: {
    marginVertical: 5,
    padding: 0,
    fontFamily: 'TTCommons-Regular'
  }
};

const RenderHtml = (props) => {
	return (
    <HTML
      style={{ lineHeight: 18, fontFamily: 'TTCommons-Regular' }}
      baseFontStyle={fontStyle}
      tagsStyles={tagsStyles}
      allowFontScaling={false}
      {...props}
    />
	)
}

export default RenderHtml