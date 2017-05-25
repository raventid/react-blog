import React from 'react';
import BoxWrapper from './BoxWrapper.js';
import Img from './Img.js';
import TextBox from './TextBox.js';

const BlogItem = (item) => (
  React.createElement(
    BoxWrapper,
    { key: item.index },
    React.createElement(Img, item.image),
    React.createElement(TextBox, item)
  )
);

export default BlogItem;
