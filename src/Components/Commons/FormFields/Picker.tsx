import * as React from 'react';
import {View, Platform, StyleProp} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {If} from 'react-if';
import Icon from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-elements';

import {AppText, AppHeading} from '../AppStyledComponents';
import {Metrics, Colors, Fonts} from '../../../Themes';
import {isEmptyOrNil} from '../../../Utils';

const PickerIcon = (props) => {
  const {color} = props;
  const pickerStyle: StyleProp<any> =
    Platform.OS === 'android'
      ? {position: 'absolute', top: Metrics.smallMargin, right: 5, color: color}
      : {color: color};

  return (
    <Icon
      name="caretdown"
      style={pickerStyle}
      size={Fonts.size.small}
      color={color}
    />
  );
};

export type PickerProps = {
  label: string;
  placeholderText?: string;
  value: string;
  onValueChange(value: any): void;
  onDonePress?(): void;
  items: Array<any>;
  showError?: boolean;
  errorMessage?: string;
  customInputStyle?: object;
  customErrorContainerStyle?: object;
};

const Picker = (props: PickerProps) => {
  const {
    label,
    placeholderText,
    value,
    onValueChange,
    onDonePress,
    items,
    errorMessage = '',
    customInputStyle = {},
    customErrorContainerStyle = {},
  } = props;
  const isDisabled = items.length === 0;
  const color = isDisabled ? Colors.secondaryText : Colors.black;
  const dividerColor = isDisabled ? Colors.secondaryText : Colors.darkGrey;
  const platformSpecificStyling =
    Platform.OS === 'ios'
      ? {
          color,
        }
      : {
          style: {
            color,
          },
        };

  const DividerStyles = {
    backgroundColor: !isEmptyOrNil(errorMessage)
      ? Colors.primary
      : dividerColor,
    height: Platform.OS === 'ios' ? 1 : 1.1,
    marginTop:
      Platform.OS === 'android' ? Metrics.baseMargin : Metrics.baseMargin - 3,
  };

  return (
    <View style={{paddingTop: 1.5}}>
      <AppHeading paddingBottom={Metrics.baseMargin} fontSize={18}>
        {label}
      </AppHeading>
      <RNPickerSelect
        style={{}}
        placeholder={{
          label: `${placeholderText}`,
          value: null,
        }}
        key={items.length}
        Icon={() => <PickerIcon color={color} />}
        textInputProps={{
          //fontSize: Fonts.size.medium,
          //padding: 0,
          //margin: 0,
          //fontFamily: 'TTCommons-Regular',
          maxFontSizeMultiplier: 1.1,
          ...platformSpecificStyling,
          ...customInputStyle,
        }}
        useNativeAndroidPickerStyle={false}
        value={value}
        onValueChange={onValueChange}
        onDonePress={onDonePress}
        items={items}
        disabled={isDisabled}
      />
      <Divider style={DividerStyles} />
      <View
        style={{
          flex: 1,
          height: 15,
          marginTop: 5,
          marginBottom: Metrics.doubleBaseMargin,
          ...customErrorContainerStyle,
        }}>
        <If condition={!isDisabled && !isEmptyOrNil(errorMessage)}>
          <AppText color={Colors.error} fontSize={Fonts.size.small}>
            {errorMessage}
          </AppText>
        </If>
      </View>
    </View>
  );
};

export default Picker;
