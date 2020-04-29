import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import HomeHero from '../sections/HomeHero';
import ServiceIntroSection from '../sections/ServiceIntroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <ServiceIntroSection />
  </Layout>
)

export default IndexPage
