import React from 'react';
import PropTypes from 'prop-types';
import Image from './elements/Image';
import MetaInfo from './elements/MetaInfo';
import Link from '../../elements/Link';
import { postsPath } from 'helpers/routes';
import LikeContainer from 'containers/LikeContainer';

const Item = ({ id, text, image, meta }) => (
  <div>
    <Image {...image} />
    <div><Link to={postsPath(id)}>{text}</Link></div>
    <LikeContainer postId={id} />
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
};

Item.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'http://www.hotel-r.net/im/hotel/bg/avangard-14.gif', alt: 'Empty photo' },
};


export default Item;
