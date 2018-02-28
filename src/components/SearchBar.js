import React from 'react';
import ReactDOM from 'react-dom';

// class SearchBar extends React.Component {

//   render() {
//     return <input onChange={this.handleInputChange}/>
//   }

//   handleInputChange(event) {
//     console.log(event.target.value);
//   }
// }

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchTerm: 'start search' };
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })} />
        <br />
        value of input: { this.state.searchTerm }
      </div>
    );
  }
}

export default SearchBar;

