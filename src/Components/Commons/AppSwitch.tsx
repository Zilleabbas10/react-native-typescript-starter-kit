import * as React from 'react';
import { Switch } from 'react-native-switch';
import { Colors } from '../../Themes';

export type AppSwitchProps = {
  onValueChange(): void,
  value: boolean,
  circleSize?: number,
  circleActiveColor?: string,
  circleInActiveColor?: string,
  barHeight?: number,
  backgroundActive?: string,
  backgroundInactive?: string,
  disabled?: boolean
}
const AppSwitch = (props: AppSwitchProps) => {
  const {
    onValueChange,
    value,
    disabled = false,

    circleSize = 20,
    circleActiveColor = Colors.black,
    circleInActiveColor = Colors.black,

    barHeight = 20,
    backgroundActive = Colors.lightGrey,
    backgroundInactive = Colors.lightGrey
  } = props

  return (
    <Switch
      onValueChange={onValueChange}
      disabled={disabled}
      value={value}
      changeValueImmediately

      circleSize={circleSize}
      circleActiveColor={circleActiveColor}
      circleInActiveColor={circleInActiveColor}
      circleBorderWidth={0}

      barHeight={barHeight}
      backgroundActive={backgroundActive}
      backgroundInactive={backgroundInactive}
    />
  )
}

export default AppSwitch