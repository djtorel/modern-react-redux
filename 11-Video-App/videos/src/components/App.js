import React from 'react';

import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    term: '',
    selectedVideo: null,
    nextPageToken: '',
    prevPageToken: '',
    isPrevDisabled: false,
  };

  componentDidMount() {
    this.onTermSubmit('synthwave');
  }

  onTermSubmit = async (term, pageToken) => {
    const { data } = await youtube.get(`/search`, {
      params: {
        q: term,
        pageToken,
      },
    });
    const isPrevDisabled = data.prevPageToken ? false : true;
    this.setState({
      term,
      videos: data.items,
      selectedVideo: data.items[0],
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
      isPrevDisabled,
    });
  };

  onClickNext = () => {
    this.onTermSubmit(this.state.term, this.state.nextPageToken);
  };

  onClickPrevious = () => {
    this.onTermSubmit(this.state.term, this.state.prevPageToken);
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render = () => (
    <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit} />
      <div className="ui grid segment">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              term={this.state.term}
              onVideoSelect={this.onVideoSelect}
              onClickNext={this.onClickNext}
              onClickPrevious={this.onClickPrevious}
              isPrevDisabled={this.state.isPrevDisabled}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
