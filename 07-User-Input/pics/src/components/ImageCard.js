import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
      loaded: false,
    };

    this.imageRef = React.createRef();
  }

  // componentDidMount() {
  //   this.imageRef.current.addEventListener('load', this.onImgLoad);
  // }

  onImgLoad = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5 + 1);

    this.setState({ spans, loaded: true });
  };

  setAltText = description => (this.state.loaded ? description : '');

  render = () => {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          onLoad={this.onImgLoad}
          ref={this.imageRef}
          src={urls.regular}
          alt={this.setAltText(description)}
        />
      </div>
    );
  };
}

export default ImageCard;
