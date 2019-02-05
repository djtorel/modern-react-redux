import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = ({ title, duration }) => {
  let content = <div>Select a Song</div>;
  if (title) {
    content = (
      <div>
        <h3>Details for:</h3>
        <p>Title: {title}</p>
        <p>Duration: {duration}</p>
      </div>
    );
  }
  return <div>{content}</div>;
};

const mapStateToProps = ({ selectedSong }) => {
  const { title, duration } = selectedSong
    ? selectedSong
    : { title: '', duration: '' };
  return { title, duration };
};

export default connect(mapStateToProps)(SongDetail);
