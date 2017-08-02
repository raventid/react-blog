import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatTime from 'helpers/views/datetime'

const Body = styled.div`
  margin-top: 10px;
`

const Note = styled.div`
  font-size: 11px;
`

const MetaInfo = ({ createdAt, updatedAt, author }) => (
  <Body>
    <Note>Author: {author}</Note>
    <Note>Created at: { formatTime(createdAt) }</Note>
    <Note>Updated at: { formatTime(updatedAt) }</Note>
  </Body>
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
