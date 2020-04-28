import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { If, Then, Else } from 'react-if';
import styled from 'styled-components/native';
import { propOr } from 'ramda';

import { Metrics, Fonts, Colors } from '../../../Themes';
import { AppText, AppHeading } from '../AppStyledComponents';

type CardContainerProps = {
  backgroundColor?: string,
}
export const CardContainer = styled(TouchableOpacity) <CardContainerProps>`
  flex-direction:row;
  margin-vertical: ${Metrics.smallMargin};
  padding-vertical: ${Metrics.baseMargin};
  padding-horizontal: ${Metrics.doubleBaseMargin};
  shadow-color: ${Colors.lightGrey};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.75;
  shadow-radius: 2;
  elevation: 2;
  border-radius: 5;
  background-color: ${(props) => propOr(Colors.white, 'backgroundColor', props)};
`
export const UnCheckedCheckboxContainer = styled(View) <any>`
  top: 3.5
  height: 20;
  width: 20;
  border-radius: 50;
  background-color: ${Colors.lightGrey}
`
export const CheckedCheckboxContainer = styled(View) <any>`
  top: 3.5
  height: 20;
  width: 20;
  border-radius: 50;
  align-items: center;
  justify-content: center;
  border-width: 1.5;
  border-color: ${Colors.white} 
`
export const DotInCheckedCheckboxContainer = styled(View) <any>`
  height: 7;
  width: 7;
  border-radius: 50;
  background-color: ${Colors.white}
`

export type RadioButtonProps = {
  isSelected: boolean,
  label: string,
  onCheckboxChange(value): void
}
const RadioButton = (props: RadioButtonProps) => {
  const { isSelected = false, label = '', onCheckboxChange } = props

  const backgroundColor = isSelected ? Colors.black : Colors.white
  const textColor = isSelected ? Colors.white : Colors.black

  return (
    <CardContainer backgroundColor={backgroundColor} onPress={() => onCheckboxChange(!isSelected)}>
      <If condition={isSelected}>
        <Then>
          <CheckedCheckboxContainer>
            <DotInCheckedCheckboxContainer />
          </CheckedCheckboxContainer>
        </Then>
        <Else>
          <UnCheckedCheckboxContainer />
        </Else>
      </If>
      <View style={{ paddingLeft: Metrics.doubleBaseMargin, justifyContent: 'center' }}>
        <AppHeading color={textColor} fontSize={Fonts.size.medium}>{label}</AppHeading>
      </View>
    </CardContainer>
  )
}

export default RadioButton