import * as React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
//import RNExitApp from 'react-native-exit-app';

import {Colors, Fonts, Metrics} from '../../Themes';
import {ExclamationMarkSvgIcon} from '../SvgIcons';
import {AppText, RowContainer, AppHeading} from './AppStyledComponents';
import IconWithBadge from './IconWithBadge';
import PrimaryButton from './PrimaryButton';
import {If} from 'react-if';

const ModalTitleText = styled(AppHeading)`
  color: ${Colors.darkPrimary};
  font-size: ${Fonts.size.regular}px;
  padding: 0;
`;
const ModalTitle = (props) => (
  <RowContainer style={{marginVertical: 5}}>
    <IconWithBadge
      iconStyle={{
        marginRight: 10,
      }}
      useSvgIcon
      RenderSvgIcon={() => <ExclamationMarkSvgIcon />}
    />
    <ModalTitleText>{props.title}</ModalTitleText>
  </RowContainer>
);

const ModalContentContainer = styled.View`
  background-color: ${Colors.white};
  position: absolute;
  bottom: ${Metrics.baseMargin};
  padding-horizontal: ${Metrics.baseMargin};
  padding-vertical: ${Metrics.baseMargin};
  border-radius: 10px;
  width: ${Metrics.screenWidth - Metrics.baseMargin * 4};
`;

type AppErrorDialog = {
  isModalVisible: boolean;
  title: string;
  errorMessage: string;
  showButton: boolean;
  onPrimaryClickHandler?(): void;
};
const AppErrorDialog = (props: AppErrorDialog) => {
  const {isModalVisible = false, title, errorMessage, showButton} = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => setModalVisible(isModalVisible), [isModalVisible]);

  //const exitApp = () => RNExitApp.exitApp();

  return (
    <Modal isVisible={modalVisible}>
      <ModalContentContainer>
        {/* Modal Title */}
        <ModalTitle title={title} />

        {/* modal content */}
        <RowContainer>
          <AppText>{errorMessage}</AppText>
        </RowContainer>

        {/* Modal Button */}
        <If condition={showButton}>
          <RowContainer justifyContent="center">
            <PrimaryButton
              buttonLabel="Got it"
              onClickHandler={() => console.log('exit App')}
              //onClickHandler={exitApp}
              width={Metrics.screenWidth - Metrics.baseMargin * 7}
            />
          </RowContainer>
        </If>
      </ModalContentContainer>
    </Modal>
  );
};

export default AppErrorDialog;
