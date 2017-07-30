import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import BlogItem from '../ui/BlogItem';
import api from '../../config';
import Link from '../elements/Link';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: 0,
        text: 'You found a post we dont have!',
        image: {
          src: 'http://www.hotel-r.net/im/hotel/bg/avangard-14.gif',
          width: '100',
          height: '100',
          alt: 'avangarde',
        },
        meta: {
          likes: 10,
          author: 'url_man',
          createdAt: '1998-12-10T11:13:25.541Z',
          updatedAt: '1998-12-11T11:13:25.541Z',
        },
      },
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request.get(
      `${api.url}/posts/${this.props.match.params.id}`,
      {},
      (err, res) => this.setState({ post: res.body }),
    );
  }

  render() {
    return (
      <div>
        <BlogItem {...this.state.post} />
        <div><Link to={'/'}>Back to homepage</Link></div>
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Post;
