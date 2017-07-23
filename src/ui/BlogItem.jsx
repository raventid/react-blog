import React from 'react';
import PropTypes from 'prop-types';
import Image from './Img';
import MetaBlock from './MetaBlock';
import Like from './Like';
import Link from '../elements/Link';
import { postsPath } from '../routes/paths';

const BlogItem = ({ id, text, image, meta, like }) => (
  <div>
    <Image {...image} />
    <div><Link to={postsPath(id)}>{text}</Link></div>
    <Like {...{ id, likes: meta.likes, like }} />
    <MetaBlock {...meta} />
    <hr />
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  image: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  like: PropTypes.func.isRequired,
};

BlogItem.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'http://www.hotel-r.net/im/hotel/bg/avangard-14.gif', alt: 'Empty photo' },
};


export default BlogItem;
