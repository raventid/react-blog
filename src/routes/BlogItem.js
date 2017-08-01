import { postsPath } from 'helpers/routes';
import PostContainer from 'containers/PostContainer';
import  { fetchPost } from 'actions/Post';

const BlogItem = {
  exact: true,
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default BlogItem;
