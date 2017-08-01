import React, { PropTypes } from 'react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({item, like}) => item ? <BlogItem {...item} like={like} /> : false

Post.propTypes = {
  item: PropTypes.object,
};

export default Post;
