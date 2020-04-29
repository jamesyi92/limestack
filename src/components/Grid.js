import styled from 'styled-components';
import { space, layout, color, flexbox, typography } from 'styled-system';

export const Flex = styled.div`
	display: flex;
	${space}
	${layout}
	${flexbox}
	${color}
	${typography}
`

Flex.defaultProps = {
	flexWrap: 'wrap',
	mx: -3
}

export const Box = styled.div`
	${space}
	${layout}
	${color}                     
`

Box.defaultProps = {
	px: 3
}
