import React from 'react';
import PropTypes from 'prop-types';

const MetaBlock = ({ createdAt, updatedAt, author }) => (
  <div style={{ marginTop: '10px' }}>
    <div style={{ fontSize: '11px' }}>Author: {author}</div>
    <div style={{ fontSize: '11px' }}>Created at: { createdAt }</div>
    <div style={{ fontSize: '11px' }}>Updated at: { updatedAt }</div>
  </div>
);

MetaBlock.propTypes = {
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  author: PropTypes.string,
};

MetaBlock.defaultProps = {
  createdAt: '1970-01-01T00:00:00.000Z',
  updatedAt: '1970-01-01T00:00:00.000Z',
  author: 'anonymous',
};

export default MetaBlock;
