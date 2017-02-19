import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // Cili path ako je nas exportani file
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCUiin13ljpY6V8PhrN7HsY5WJJFWg7LyE';


// Create a new component.
// This component should produce some HTML.
class App extends Component {

	constructor(props) {
		super(props);
	
	  	this.state = { videos: [] };

	  	YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
			this.setState({ videos }); // Ovo je isto ko da pise setState({ videos: videos })
	  	});
	}

	render() {
  		return (
  			<div>
  				<SearchBar />
  				<VideoList videos={this.state.videos} />
  			</div>
  		);
	}

}

// Put this component into the DOM
ReactDOM.render(<App />, $('.container')[0]);

