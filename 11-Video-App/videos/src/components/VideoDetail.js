import React from 'react';

const VideoDetail = ({ video }) => {
  let content = <div>Loading...</div>;
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    content = (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} frameBorder="0" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">
            {video.snippet.title}
            <div className="sub header">{video.snippet.channelTitle}</div>
          </h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
  return content;
};

export default VideoDetail;
