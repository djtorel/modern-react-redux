import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render = () => (
    <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
