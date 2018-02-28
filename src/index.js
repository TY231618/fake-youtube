//we want to create a new component and this component should produce some HTML

//take this generated HTML and put it in the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youTubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBl22I1k7pqQBwz4ZmVABaEfpDoSBORW-Y';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    youTubeSearch({key: API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      // when you have key and value pairs with matching names you can do the following
      // this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onVideoSelect={ video => this.setState({selectedVideo: video}) }
          videos={ this.state.videos } />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));

