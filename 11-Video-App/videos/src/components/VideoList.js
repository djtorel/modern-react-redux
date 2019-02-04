import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({
  videos,
  onVideoSelect,
  onClickNext,
  onClickPrevious,
  isPrevDisabled,
}) => {
  const renderedList = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <div>
      <div className="ui relaxed divided items">{renderedList}</div>
      <div className="ui segment">
        <button
          onClick={onClickPrevious}
          className={`ui left floated labeled icon button ${
            isPrevDisabled ? 'disabled' : ''
          }`}
        >
          <i className="left arrow icon" />
          Back
        </button>
        <button
          onClick={onClickNext}
          className="ui right labeled icon button right floated"
        >
          <i className="right arrow icon" />
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoList;
