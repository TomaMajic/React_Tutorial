import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './components/search_bar'; // Cili path ako je nas exportani file

const API_KEY = 'AIzaSyCUiin13ljpY6V8PhrN7HsY5WJJFWg7LyE';


// Create a new component.
// This component should produce some HTML.
const App = () => {
  return (
  	<div>
  		<SearchBar />
  	</div>
  );
}

// Put this component into the DOM
ReactDOM.render(<App />, $('.container')[0]);

