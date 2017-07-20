import React from 'react';
import PropTypes from 'prop-types';

const TextBox = props => (
  <span>{props.children}</span>
);

TextBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TextBox;
