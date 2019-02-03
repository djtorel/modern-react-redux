import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render = () => (
    <div className="ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label htmlFor="search">Image Search</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for something"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
