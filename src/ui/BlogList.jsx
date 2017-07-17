import React from 'react';
import BlogItem from "./BlogItem"
import PropTypes from 'prop-types';

const BlogList = ({items, like}) => (
  <div>
    { items.map((item) => <BlogItem {...item} key={item.id} like={like}/>) }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  like: PropTypes.func
};

export default BlogList;
