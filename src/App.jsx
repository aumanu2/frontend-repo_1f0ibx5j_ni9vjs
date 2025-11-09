import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Insights from './components/Insights';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Team />
      <Insights />
      <Contact />
    </Layout>
  );
}
