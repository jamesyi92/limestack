import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';

const StyledContainer = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1.6rem;
	padding-left: 1.6rem;
	${layout};
`

const Container = ({ children }) => (
	<StyledContainer maxWidth={['54rem', '72rem', '96rem', '130rem']}>
		{ children }
	</StyledContainer>
)

StyledContainer.defaultProps = {

}

export default Container;