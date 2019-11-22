import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import LoadSpinner from './LoadSpinner';

const Layout = ({ children, pending }) => (
  <section>
    <Header />
    {children}
    {pending &&
      <LoadSpinner />}
  </section>
);

const mapSatateToProps = ({ pending }) => ({
  pending,
});

export default connect(mapSatateToProps, null)(Layout);
