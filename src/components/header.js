import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';

import LimeStackLogo from '../images/logos/limestack.inline.svg';


const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 3.2rem 0;
	background: transparent;
`

const Logo = styled(LimeStackLogo)`
	width: 16.5rem;
	height: auto;
`

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Links = styled.div`
	display: flex;
	font-weight: 500;
`

const LinkItem = styled.div`
	&:not(:last-child) {
		margin-right: 3.2rem;
	}
`

const Header = () => {
	return(
		<StyledHeader>
			<Container>
				<Nav>
				<Logo />
				<Links>
					<LinkItem>
						Services
					</LinkItem>
					<LinkItem>
						Portfolio
					</LinkItem>
					<LinkItem>
						About
					</LinkItem>
					<LinkItem>
						Resources
					</LinkItem>
				</Links>
				<Button to="/contact">Contact</Button>
				</Nav>
			</Container>
		</StyledHeader>
	)
}

export default Header
