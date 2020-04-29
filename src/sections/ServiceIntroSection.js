import React from 'react';

import Section from '../components/Section';
import Container from '../components/Container';
import { Flex, Box } from '../components/Grid';
import Typography from '../components/Typography';

import ServiceCard from '../components/ServiceCard';

const ServiceIntroSection = () => (
	<Section
		bg="#f9f9fc"
	>
		<Container>
			<Flex
				justifyContent="center"
				textAlign="center"
			>
				<Box width={3/4}>
					<Typography mb={4} tag="h2">Lorem ipsum dolor</Typography>
					<Typography mb={5} fontSize={3}>consectetur adipisicing elit. Eius alias sequi dignissimos, sed aspernatur quas?</Typography>
				</Box>
			</Flex>
			<Flex>
				<Box width={[1/3]}>
					<ServiceCard />
				</Box>
				<Box width={[1/3]}>
					<ServiceCard />
				</Box>
				<Box width={[1/3]}>
					<ServiceCard />
				</Box>
			</Flex>
		</Container>
	</Section>
)

export default ServiceIntroSection;