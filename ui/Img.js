import React from 'react';

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

export default Img;
