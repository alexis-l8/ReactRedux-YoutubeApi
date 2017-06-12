import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term} // having this means that input is now a controlled component. Value changes when state changes
          onChange={event => this.setState({ term: event.target.value })}
        />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
