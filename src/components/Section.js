import styled from 'styled-components';
import { space, layout, color, flexbox, position } from 'styled-system';

const Section = styled.section`
	${space}
	${layout}
	${color}
	${flexbox}
	${position}
`

Section.defaultProps = {
	display: 'flex',
	alignItems: 'center',
	py: 6
}

export default Section;