import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-bottom: 10px;
  margin-left: -2px;
  background-color: #008CBA;
  color: white
`

const Like = ({ likes, like }) => (
  <Button onClick={() => like()}>
    I like this! [{likes}]
  </Button>
);

Like.propTypes = {
  likes: PropTypes.number,
  like: PropTypes.func.isRequired,
};

Like.defaultProps = {
  likes: 0,
};

export default Like;

