import * as React from 'react';
import { View, Platform } from 'react-native';
import styled from 'styled-components';
import { propOr } from 'ramda';
import { If } from 'react-if';

import { Metrics } from '../../Themes';
import { AppScreenTitle, RowContainer } from './AppStyledComponents';

type HeaderContainerProps = {
	headerHeight?: string
}
const HeaderContainer = styled(View) <HeaderContainerProps>`
  height: ${props => propOr('50px', 'headerHeight', props)};
	width: 100%;
	padding-horizontal: ${Metrics.doubleBaseMargin - 2};
	flex-direction:row;
`

const headerMaxHeight = Platform.OS === 'android' ? '55px' : '60px'
type AppHeaderProps = {
	title: string,
	showSecondaryComponent?: boolean,
	SecondaryComponent?(): React.ReactElement
}
const AppHeader = (props: AppHeaderProps) => {
	const {
		title = 'Twic Store',
		showSecondaryComponent = false,
		SecondaryComponent = () => <></>
	} = props

	return (
		<HeaderContainer
			headerHeight={headerMaxHeight}
		>
			<RowContainer flex={1}>
				<AppScreenTitle>{title}</AppScreenTitle>
			</RowContainer>
			<If condition={showSecondaryComponent}>
				<SecondaryComponent />
			</If>
		</HeaderContainer>
	)
}

export default AppHeader