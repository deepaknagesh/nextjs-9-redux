import React, { Component } from 'react';
// import Layout from '../../containers/App/layout';

export default ComposedComponent => props => (
  // <Layout {...props}>
  <ComposedComponent {...props} />
  // </Layout>
);
