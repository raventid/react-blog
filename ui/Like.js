const Like = ({likes, like, id}) => (
  <button
    style={{
      marginBottom: `10px`,
      marginLeft: `-2px`,
      backgroundColor: `#008CBA`,
      color: `white`}}
    onClick={e => like(id)}
  >
    I like this! [{likes}]
  </button>
)

Like.propTypes = {
  likes: PropTypes.number,
  like: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Like.defaultProps = {
  likes: 0
};

export default Like;
