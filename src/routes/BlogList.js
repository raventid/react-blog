import PostsContainer from 'containers/PostsContainer';
import  { fetchPosts } from 'actions/Posts';

const BlogList = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default BlogList;
