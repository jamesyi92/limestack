import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Grid, Cell } from "styled-css-grid";
import Container from '../components/Container';
import Section from '../components/Section';


const HomeHero = () => {

	const imageData = useStaticQuery(graphql`
		query {
      homeGraphic: file(relativePath: { eq: "graphics/banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
	`)

	return(
		<Section bg="primary" color="#ffffff" py="7">
			<Container>
				<Grid columns="repeat(auto-fit,minmax(300px,1fr))" gap="3rem">
			    <Cell>Column1</Cell>
			    <Cell>Column2</Cell>
			  </Grid>
		  </Container>
		</Section>
	)
}

export default HomeHero;