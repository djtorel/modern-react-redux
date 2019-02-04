import './VideoItem.css';

import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => (
  <div onClick={() => onVideoSelect(video)} className="video-item item">
    <img
      className="ui small image"
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
    />
    <div className="middle aligned content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
);

export default VideoItem;
