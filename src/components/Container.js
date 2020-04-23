import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';

const StyledContainer = styled.div`

	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;

	${layout};

`

const Container = ({ children }) => (
	<StyledContainer maxWidth={['54rem', '72rem', '96rem', '120rem']}>
		{ children }
	</StyledContainer>
)

StyledContainer.defaultProps = {

}

export default Container;