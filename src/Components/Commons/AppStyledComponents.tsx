import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { propOr, isNil, has } from 'ramda'

import { Fonts, Colors, Metrics } from '../../Themes';

const FONT_WEIGHT = Platform.OS === 'android' ? '400' : 'bold'
const FONT_SIZE = Platform.OS === 'android' ? Fonts.size.small : Fonts.size.medium

export const _Text = (props) => <Text {...props} maxFontSizeMultiplier={1.1}>{props.children}</Text>

/* 
* HEADINGS STYLED COMPONENTS 
*/
type AppScreenTitleProps = {
  textTransform?: 'lowercase' | 'uppercase' | 'full-width' | 'inherit' | 'capitalize',
  textAlign?: 'left' | 'right' | 'center'
}
export const AppScreenTitle = styled(_Text) <AppScreenTitleProps>`
  font-weight: ${FONT_WEIGHT};
  font-size: ${Fonts.size.h1};
  color: ${Colors.primaryText};
  font-family: TTCommons-DemiBold;
  text-transform: ${props => propOr('none', 'textTransform', props)};
  ${props => props.textAlign ? `text-align: ${props.textAlign}` : ''}
`

export const AppSectionTitle = styled(_Text)`
  font-size: ${Fonts.size.h2};
  font-weight: ${FONT_WEIGHT};
  font-family: TTCommons-DemiBold;
  color: ${Colors.primaryText};
`
type AppHeading = {
  color?: string, //Colors
  paddingTop?: number,
  paddingBottom?: number,
  paddingRight?: number, //pixels
  textTransform?: 'lowercase' | 'uppercase' | 'full-width' | 'inherit' | 'capitalize',
  width?: number,
  textAlign?: string,
  fontSize?: number
}
export const AppHeading = styled(_Text) <AppHeading>`
  padding-top: ${props => propOr(5, 'paddingTop', props)};
  padding-bottom: ${props => propOr(0, 'paddingBottom', props)};
  font-size: ${(props) => propOr(FONT_SIZE, 'fontSize', props)};
  padding-right: ${props => propOr(0, 'paddingRight')(props)};
  font-weight: ${FONT_WEIGHT};
  font-family: TTCommons-DemiBold;
  color: ${(props) => propOr(Colors.primaryText, 'color', props)};
  text-transform: ${props => propOr('none', 'textTransform', props)};
  text-align: ${props => propOr('left', 'textAlign', props)};
  width: ${props => propOr('auto', 'width', props)};
`

type SectionTitleTextProps = {
  color?: string,
  textAlign?: string,
  fontWeight?: string,
  fontSize?: string | number,
}

export const SectionTitle = styled(_Text) <SectionTitleTextProps>`
  font-size: ${props => propOr(Fonts.size.regular, 'fontSize', props)};
  font-weight: ${props => propOr(FONT_WEIGHT, 'fontWeight')(props)};
  font-family: TTCommons-DemiBold;
  text-align: ${props => propOr('left', 'textAlign')(props)};
  flex: 1;
  flex-direction: row;
  color: ${props => propOr('black', 'color', props)};
`

/* 
* TEXTS STYLED COMPONENTS 
*/
type AppTextProps = {
  color?: string, //Colors
  paddingTop?: number, //pixels
  paddingLeft?: number, //pixels
  paddingRight?: number, //pixels
  paddingBottom?: number, //pixels
  textAlign?: 'left' | 'right' | 'center',
  fontWeight?: string,
  fontSize?: string | number,
  textDecorationLine?: string,
  textTransform?: 'lowercase' | 'uppercase' | 'full-width' | 'inherit' | 'capitalize',
  width?: number | 'auto'
}
export const AppText = styled(_Text) <AppTextProps>`
  padding-top: ${props => propOr(0, 'paddingTop')(props)};
  padding-left: ${props => propOr(0, 'paddingLeft')(props)};
  padding-right: ${props => propOr(0, 'paddingRight')(props)};
  padding-bottom: ${props => propOr(0, 'paddingBottom')(props)};
  font-size: ${props => propOr(FONT_SIZE, 'fontSize', props)};
  font-family: TTCommons-Regular;
  font-weight: ${props => propOr('300', 'fontWeight')(props)};
  color: ${props => propOr(Colors.primaryText, 'color', props)};
  text-decoration-line: ${props => propOr('none', 'textDecorationLine')(props)};
  text-transform: ${props => propOr('none', 'textTransform', props)};
  width: ${props => propOr('auto', 'width', props)};
  ${props => props.textAlign ? `text-align: ${props.textAlign}` : ''}
`

type AppTextExtraSmall = {
  color?: string
}
export const AppTextExtraSmall = styled(_Text) <AppTextExtraSmall>`
  font-size: ${Fonts.size.extraSmall};
  color: ${props => !isNil(props.color) ? Colors[props.color] : Colors.primaryText};
  font-family: TTCommons-Regular;
`
/* 
* CONTAINERS STYLED COMPONENTS 
*/
type AppScreenTitleContainer = {
  customStyle?: object,
  children: any
}
export const AppScreenTitleContainer = (props: AppScreenTitleContainer) => {
  const { customStyle = {} } = props;
  return (
    <View style={{
      paddingVertical: Metrics.baseMargin,
      paddingHorizontal: Metrics.doubleBaseMargin - 2,
      ...customStyle
    }}>
      {props.children}
    </View>
  )
}

type RowContainer = {
  flex?: number,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-evenly' | 'space-between',
}
export const RowContainer = styled(View) <RowContainer>`
  margin-vertical: 10;
  align-items: center;
  justify-content: ${props => propOr('flex-start', 'justifyContent', props)};
  flex-direction: row;
  ${props => has('flex', props) ? `flex: ${props.flex}` : ''}
`

type RoundedBadgeContainer = {
  color?: string,
}
export const RoundedBadgeContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5;
  padding-horizontal: 10;
  padding-vertical: 5;
  background-color: ${Colors.white};
  border-width: 0.5px;
  border-color: ${Colors.lightGrey};

  shadow-color: ${props => propOr(Colors.lightGrey, 'color', props)};
  shadow-offset: 0.5px 2px;
  shadow-opacity: 0.75;
  shadow-radius: 2;
  elevation: 2;
`