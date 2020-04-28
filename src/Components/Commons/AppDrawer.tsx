import * as React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

import {Metrics, Colors} from '../../Themes';

type DrawerContainer = {
  height?: number;
};
const DrawerContainer = styled(SafeAreaView)<DrawerContainer>`
  position: absolute;
  bottom: 0;
  width: ${Metrics.screenWidth};
  background-color: ${Colors.white};
  padding-horizontal: ${Metrics.doubleBaseMargin};
  border-top-left-radius: 9;
  border-top-right-radius: 9;
`;

const DrawerHandle = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 10;
`;
const DrawerHandlerIcon = styled.TouchableOpacity`
  height: 5;
  width: 35;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  background-color: ${Colors.darkGrey};
`;
const DrawerContentContainer = styled.View`
  align-items: center;
`;

type AppDrawer = {
  drawerHeight?: number;
  isDrawerOpen: boolean;
  onCloseHandler(): void;
  DrawerContent(): React.ReactNode;
};
const AppDrawer = (props: AppDrawer) => {
  const {isDrawerOpen = false, onCloseHandler, DrawerContent} = props;

  const onSwipeComplete = ({swipingDirection}) => {
    if (swipingDirection === 'down') onCloseHandler();
  };
  const onBackdropPress = () => onCloseHandler();

  return (
    <Modal
      style={{
        margin: 0,
      }}
      isVisible={isDrawerOpen}
      propagateSwipe
      useNativeDriver
      swipeDirection={['down']}
      onBackdropPress={onBackdropPress}
      swipeThreshold={30}
      onSwipeComplete={onSwipeComplete}
      onBackButtonPress={onBackdropPress}>
      {/* Container for the drawer's handle */}
      <DrawerContainer>
        {/* Drawer Handle */}
        <DrawerHandle>
          <DrawerHandlerIcon onPress={onCloseHandler} />
        </DrawerHandle>

        {/* Container for the drawer's content */}
        <DrawerContentContainer>{DrawerContent()}</DrawerContentContainer>
      </DrawerContainer>
    </Modal>
  );
};

export default AppDrawer;
