import BlogItem from "./BlogItem.js"

const BlogList = ({items}) => (
  <div>
    { items.map((item) => <BlogItem {...item} key={item.id} />) }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default BlogList;
