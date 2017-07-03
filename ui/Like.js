class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button
        style={{
          marginBottom: `10px`,
          marginLeft: `-2px`,
          backgroundColor: `#008CBA`,
          color: `white`}}
        onClick={this.handleClick}>
        I like this! [{this.state.count}]
      </button>
    );
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1 });
  }
}

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};

export default Like;
