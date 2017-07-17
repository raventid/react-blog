import React from 'react';
import Image from './Img';
import TextBox from './TextBox';
import MetaBlock from './MetaBlock';
import PropTypes from 'prop-types';
import Like from './Like';

const BlogItem = ({id, text, image, meta, like}) => (
  <div>
    <Image {...image} />
    <div>{text}</div>
    <Like {...{id: id, likes: meta.likes, like: like}}/>
    <MetaBlock {...meta}/>
    <hr/>
  </div>
);

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.object,
  like: PropTypes.func
};

BlogItem.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'http://www.hotel-r.net/im/hotel/bg/avangard-14.gif', alt: 'Empty photo' }
};


export default BlogItem;
