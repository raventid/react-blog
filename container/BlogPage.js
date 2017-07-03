import React from 'react';
import BlogItem from '../ui/BlogItem.js';
import Items from '../feed.js'

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Items };
  }

  render() {
    const { items } = this.state
    return <BlogList items={ items } />
  };
}


export default BlogPage;
