import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


// Create a new component.
// This component should produce some HTML.
const App = () => {
  return <div>Hi with jQuery!</div>;
}

// Put this component into the DOM
ReactDOM.render(<App />, $('.container')[0]);
