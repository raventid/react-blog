import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const MetaInfo = ({ createdAt, updatedAt, author }) => (
  <div style={{ marginTop: '10px' }}>
    <div style={{ fontSize: '11px' }}>Author: {author}</div>
    <div style={{ fontSize: '11px' }}>Created at: { moment(createdAt).format('LL') }</div>
    <div style={{ fontSize: '11px' }}>Updated at: { moment(updatedAt).format('LL') }</div>
  </div>
);

MetaInfo.propTypes = {
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  author: PropTypes.string,
};

MetaInfo.defaultProps = {
  createdAt: '1970-01-01T00:00:00.000Z',
  updatedAt: '1970-01-01T00:00:00.000Z',
  author: 'anonymous',
};

export default MetaInfo;
