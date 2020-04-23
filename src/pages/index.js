import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import HomeHero from '../sections/HomeHero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
  </Layout>
)

export default IndexPage
