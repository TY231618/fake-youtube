//we want to create a new component and this component should produce some HTML

//take this generated HTML and put it in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBl22I1k7pqQBwz4ZmVABaEfpDoSBORW-Y';

const App = () => {

  return <div>hi</div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));

