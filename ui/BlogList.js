import BlogItem from "./BlogItem.js"

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
