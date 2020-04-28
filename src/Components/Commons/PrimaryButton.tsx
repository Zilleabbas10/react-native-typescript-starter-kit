import * as React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components/native';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import * as Animatable from 'react-native-animatable'
import { If } from 'react-if'
import { propOr, prop } from 'ramda'

import { Colors, Metrics, Fonts } from '../../Themes'
import { _Text } from './AppStyledComponents';

const buttonWidth = Metrics.screenWidth - Metrics.doubleBaseMargin * 2
const smallButtonWidth = buttonWidth / 2
interface ButtonContainerType {
	fullWidth?: boolean,
	buttonColor?: string,
	width?: number
}

const ButtonContainer = styled(TouchableOpacity) <ButtonContainerType>`
	width: ${props => props.fullWidth ? buttonWidth : prop('width', props)};
	height: 45px;
	padding: 12px;
	border-radius: 10px;
	align-items:center;
	justify-content:center;
	background-color: ${props => propOr(Colors.primary, 'buttonColor', props)};
	shadow-color: ${props => propOr(Colors.primary, 'buttonColor', props)};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.75;
  shadow-radius: 2;
  elevation: 2;
`;

const ButtonLabel = styled(_Text)`
	font-size: ${Fonts.size.medium};
	color: ${Colors.white};
	font-family: TTCommons-DemiBold;
	font-weight: ${Platform.OS === 'android' ? '400' : 'bold'};
	text-align: center;
`;

const ButtonIcon = styled(EvilIcon)`
	font-size: ${Fonts.size.h1};
	color: ${Colors.white};
	font-weight: bold;
	text-align: center;
`
const ButtonLoaderIcon = () => <Animatable.View iterationCount={"infinite"} animation='rotate'><ButtonIcon name='spinner-3' /></Animatable.View>

interface ButtonType {
	buttonLabel: string;
	buttonColor?: string;
	fullWidth?: boolean;
	width?: number;
	activeOpacity?: number;
	onClickHandler(): void;
	disabled?: boolean;
	loading?: boolean
}
const PrimaryButton = (props: ButtonType) => {
	const {
		buttonLabel = 'Primary Button',
		fullWidth = false,
		width = smallButtonWidth,
		onClickHandler,
		activeOpacity = 0.2,
		disabled = false,
		loading = false,
		buttonColor
	} = props;
	return (
		<ButtonContainer
			activeOpacity={activeOpacity}
			onPress={onClickHandler}
			fullWidth={fullWidth}
			width={width}
			disabled={disabled || loading}
			buttonColor={buttonColor}
		>
			<If condition={loading}><ButtonLoaderIcon /></If>
			<If condition={!loading}><ButtonLabel>{buttonLabel}</ButtonLabel></If>
		</ButtonContainer>
	)
}

export default PrimaryButton