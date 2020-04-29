import React from 'react';
import styled from 'styled-components';
import { typography, color, space } from 'styled-system';

const StyledTypography = styled.p`
	${typography}
	${color}
	${space}
`

const Typography = ({ children, tag, ...props }) => (
	<StyledTypography {...props} as={tag}>
		{ children }
	</StyledTypography>
)

StyledTypography.defaultProps = {
	mb: 4
}

export default Typography;