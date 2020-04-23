import styled from 'styled-components';
import { space, layout, variant } from 'styled-system';
import { Link } from 'gatsby';


const Button = styled(Link)`
	border-radius: 4px;
	box-shadow: 0px 20px 24px 0px rgba(0, 11, 40, 0.1);
	text-decoration: none;
	transition: all .2s ease-in-out;
	${space}
	${layout}
	${variant({
		variants: {
			primary: {
				background: 'primary',
				color: '#ffffff',
				'&:hover': {
					background: '#ffffff',
					color: 'primary'
				}
			},
			white: {
				background: '#ffffff',
				color: 'primary',
				'&:hover': {
					background: 'primary',
					color: '#ffffff'
				}
			}
		}
	})}
`

Button.defaultProps = {
	display: 'inline-block',
	padding: '1.6rem 3.2rem',
	variant: 'primary'
}

export default Button;