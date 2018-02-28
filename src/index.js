//we want to create a new component and this component should produce some HTML

//take this generated HTML and put it in the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youTubeSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyBl22I1k7pqQBwz4ZmVABaEfpDoSBORW-Y';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfing');
  }

  videoSearch(searchTerm) {
    youTubeSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      // when you have key and value pairs with matching names you can do the following
      // this.setState({ videos });
    });
  }

  // render() {
  //   return (
  //     <div>
  //       <SearchBar onSearchTermChange={ term => this.videoSearch(term) }/>
  //       <VideoDetail video={ this.state.selectedVideo }/>
  //       <VideoList 
  //         onVideoSelect={ video => this.setState({selectedVideo: video}) }
  //         videos={ this.state.videos } />
  //     </div>
  //   );
  // }

  // using lodash to debounce search function

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500 );
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onVideoSelect={ video => this.setState({selectedVideo: video}) }
          videos={ this.state.videos } />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));

