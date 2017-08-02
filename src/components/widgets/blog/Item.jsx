import React from 'react';
import PropTypes from 'prop-types';
import Image from './elements/Image';
import MetaInfo from './elements/MetaInfo';
import Like from './elements/Like';
import Link from '../../elements/Link';
import { postsPath } from 'helpers/routes';

const Item = ({ id, text, image, meta, like }) => (
  <div>
    <Image {...image} />
    <div><Link to={postsPath(id)}>{text}</Link></div>
    <Like {...{ id, likes: meta.likes, like }} />
    <MetaInfo {...meta} />
    <div><Link to={'/'}>Back to homepage</Link></div>
    <hr />
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  image: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  like: PropTypes.func.isRequired,
};

Item.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'http://www.hotel-r.net/im/hotel/bg/avangard-14.gif', alt: 'Empty photo' },
};


export default Item;
