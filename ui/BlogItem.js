import React from 'react';
import BoxWrapper from './BoxWrapper.js';
import Img from './Img.js';
import TextBox from './TextBox.js';

const BlogItem = ({item}) => (
  React.createElement(
    BoxWrapper,
    null,
    React.createElement(Img, item.image),
    React.createElement(TextBox, {text: item.text})
  )
);

export default BlogItem;
