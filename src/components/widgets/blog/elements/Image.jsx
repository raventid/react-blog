import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/alt-text */
const Image = props => (
  <img {...props} />
);
/* eslint-enable jsx-a11y/alt-text */

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  width: '100px',
  height: '100px',
  alt: 'here should be a picture',
  src: '/path/to/nowhere',
};

export default Image;
