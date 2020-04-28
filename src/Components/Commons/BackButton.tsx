import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import {Fonts, Colors} from '../../Themes';

const BackButtonContainer = styled.TouchableOpacity`
  height: 45;
  width: 45;
  border-radius: 50;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};

  shadow-color: ${Colors.darkGrey};
  shadow-offset: 0 0;
  shadow-opacity: 0.5;
  shadow-radius: 1;
  elevation: 2;
`;

type BackButtonProps = {
  iconName?: string;
  customStyle?: object;
  onPressHandler(): void;
};

const BackButton = (props: BackButtonProps) => {
  const {iconName, onPressHandler, customStyle = {}} = props;
  const icon = iconName ? iconName : 'arrow-left';
  return (
    <BackButtonContainer style={customStyle} onPress={onPressHandler}>
      <Icon
        name={icon}
        style={{fontSize: Fonts.size.large + 5, color: Colors.black}}
      />
    </BackButtonContainer>
  );
};

export default BackButton;
