import React from 'react';
import update from 'immutability-helper';
import request from 'superagent';
import BlogList from '../ui/BlogList';
import api from '../../config';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.like = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      api.url,
      {},
      (err, res) => this.setState({ items: res.body }),
    );
  }

  like(postId) {
    const index = this.state.items.findIndex(elem => elem.id === postId);
    const newState = update(this.state, {
      items: {
        [index]: {
          meta: {
            likes: { $apply: x => x + 1 },
          },
        },
      },
    });
    this.setState(newState);
  }

  render() {
    const { items } = this.state; // eslint-disable-line no-shadow
    return <BlogList items={items} like={this.like} />;
  }
}


export default BlogPage;
