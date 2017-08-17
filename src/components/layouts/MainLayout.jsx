import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

import SearchFormContainer from 'containers/SearchFormContainer';

const MainLayout = ({ children }) => (
  <div>
    <Logo />
    <div>
      <Grid>
        <Row className="show-grid">
          <SearchFormContainer />
          <Col xs={12} md={8}>{children}</Col>
          <Col xs={6} md={4} />
        </Row>
      </Grid>
    </div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MainLayout;

const Logo = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <PageHeader>Julian notes. <small>Personal. Tasty. About everything.</small></PageHeader>
  </div>
);

const Footer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    raventid©
  </div>
);
