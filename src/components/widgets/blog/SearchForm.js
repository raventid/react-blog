import React, { PropTypes } from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ term: e.currentTarget.value });
    }

    render() {
        return (
                <div>
                  <form onSubmit={() => this.props.search(this.state.term)}>
                    <label>
                      Name:
                      <input type="text"  onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
        );
    }
}

SearchForm.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchForm;
