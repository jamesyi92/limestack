import React from 'react';
import styled from 'styled-components';

import Typography from './Typography';
import { IoLogoIonic } from "react-icons/io";

const Card = styled.div`
	padding: 3.2rem;
	background: #ffffff;
	box-shadow: 0px 3px 10px 0px rgba(38, 59, 94, 0.1);
`

const Icon = styled.svg`
	height: 6.4rem;
	width: auto;
	margin-bottom: 1.6rem;
`

const ServiceCard = () => (
	<Card>
		<Icon as={IoLogoIonic} />
		<Typography tag="h3">Service 1</Typography>
		<Typography tag="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facere, vero nisi ipsam dolores, architecto ad libero. Maxime, natus voluptatum saepe quam mollitia rem asperiores nostrum. Culpa ipsam voluptas nesciunt!</Typography>
	</Card>
)

export default ServiceCard;