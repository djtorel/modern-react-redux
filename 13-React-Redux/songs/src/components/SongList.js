import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
  renderList = () => {
    const { songs, selectSong } = this.props;
    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="middle aligned content">
          <div className="description">
            <p>{song.title}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => selectSong(song)}
            className="ui right floated button primary"
          >
            Select
          </button>
        </div>
      </div>
    ));
  };
  render = () => {
    return <div className="ui divided items">{this.renderList()}</div>;
  };
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong,
  }
)(SongList);
