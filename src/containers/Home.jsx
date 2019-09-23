import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Register from './Register';
import '../assets/styles/TravelApp.scss';

const Home = () => (
  <Layout>
    <Header />
    <Register />
  </Layout>
);

export default Home;
