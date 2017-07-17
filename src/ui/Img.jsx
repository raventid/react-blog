import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <img {...props} />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  width: '100px',
  height: '100px'
};

export default Image;
