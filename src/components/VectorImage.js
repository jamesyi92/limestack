import React from 'react';
import styled from 'styled-components';
import { layout, space, position, system } from 'styled-system';

const transform = system({
	prop: 'transform',
	cssProperty: 'transform'
})

const StyledImage = styled.svg`
	${layout}
	${space}
	${position}
	${system({
		transform: true
	})}
`

const VectorImage = ({ image, ...props }) => {
	return(
		<StyledImage {...props} as={image} />
	)
}
	
VectorImage.defaultProps = {
	width: '100%',
	height: 'auto'
}

export default VectorImage