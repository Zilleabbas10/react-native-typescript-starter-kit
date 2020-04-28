import * as React from 'react';
import { If } from 'react-if';
import styled from 'styled-components/native';
import FontAwseomeIcon from 'react-native-vector-icons/FontAwesome';

import { Colors, Fonts, Metrics } from '../../Themes'
import { AppText, RoundedBadgeContainer } from '../Commons'
import { isEmptyOrNil } from '../../Utils'

const FilterIcon = styled(FontAwseomeIcon)`
  font-size: ${Fonts.size.regular};
  font-family: TTCommons-DemiBold;
  font-weight: bold;
  color: ${Colors.primaryText};
  margin-left: 5;
  margin-right: 5;
  padding-top: 3;
`

type FilterToggleProps = {
  label: string,
  isActive: boolean,
  iconPlacement?: 'left' | 'right',
  iconName?: string,
  onPressHandler(): void
}
const FilterToggleButton = (props: FilterToggleProps) => {
  const {
    label,
    isActive = false,
    iconPlacement = 'right',
    iconName = 'caret-down',
    onPressHandler = () => { }
  } = props;

  const activeStyle = {
    color: isActive ? Colors.white : Colors.primaryText,
    fontFamily: 'TTCommons-DemiBold'
  }

  return (
    <RoundedBadgeContainer
      onPress={onPressHandler}
      style={{
        backgroundColor: isActive ? Colors.black : Colors.white,
        paddingRight: Metrics.baseMargin
      }}
    >
      <If condition={!isEmptyOrNil(iconName) && iconPlacement == 'left'}>
        <FilterIcon name={iconName} style={activeStyle} />
      </If>
      <AppText width='auto' fontWeight='bold' style={activeStyle} textTransform='capitalize'>{label}</AppText>
      <If condition={!isEmptyOrNil(iconName) && iconPlacement == 'right'}>
        <FilterIcon name={iconName} style={activeStyle} />
      </If>
    </RoundedBadgeContainer>
  )
}

export default FilterToggleButton