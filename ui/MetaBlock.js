import Like from "./Like.js"

const MetaBlock = ({created_at, updated_at, author}) => (
  <div style={{marginTop: `10px`}}>
    <div style={{fontSize: `11px`}}>Author: {author}</div>
    <div style={{fontSize: `11px`}}>Created at: {created_at}</div>
    <div style={{fontSize: `11px`}}>Updated at: {updated_at}</div>
  </div>
);

MetaBlock.propTypes = {
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  author: PropTypes.string
};

MetaBlock.defaultProps = {
  created_at: '1970-01-01T00:00:00.000Z',
  updated_at: '1970-01-01T00:00:00.000Z',
  author: 'anonymous'
};

export default MetaBlock;
