//we want to create a new component and this component should produce some HTML

//take this generated HTML and put it in the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import youTubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBl22I1k7pqQBwz4ZmVABaEfpDoSBORW-Y';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    youTubeSearch({key: API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ videos: videos });
      // when you have key and value pairs with matching names you can do the following
      // this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));

