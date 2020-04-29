import React from 'react';

import Section from '../components/Section';
import Container from '../components/Container';
import { Flex, Box } from '../components/Grid';
import Typography from '../components/Typography';
import Button from '../components/Button';
import VectorImage from '../components/VectorImage';

import HeroImage from '../images/graphics/mobile-development.inline.svg';


const HomeHero = () => {


	return(
		<Section
			variant="intro"
			height="80vh"
			position="relative"
			overflow="hidden"
		>
			<Container>
				<Flex
					alignItems="center"
				>
			    <Box width={[ 1, 1/2 ]}>
			      <Typography tag="h2">Starategic design and technology agency</Typography>
			      <Typography>Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.</Typography>
			      <Button>Get in Touch</Button>
			    </Box>
			    <Box width={[ 1, 1/2 ]}>
			      <VectorImage image={HeroImage} />
			    </Box>
			  </Flex>
		  </Container>
		</Section>
	)
}

export default HomeHero;