import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // Cili path ako je nas exportani file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCUiin13ljpY6V8PhrN7HsY5WJJFWg7LyE';


// Create a new component.
// This component should produce some HTML.
class App extends Component {

	constructor(props) {
		super(props);
	
	  	this.state = { 
	  		videos: [],
	  		selectedVideo: null
	  	};

	  	this.videoSearch('');
	}

	videoSearch(term) {

	 	YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0] 
			}); 
	  	});

	}

	render() {

		const videoSearch = _.debounce((term) => {
			this.videoSearch(term) 
		}, 300);

  		return (
  			<div>
  				<SearchBar 
  					onVideoSearch={videoSearch}
  				/>
  				<VideoDetail video={this.state.selectedVideo}/>
  				<VideoList 
  					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // Ko da pise sV: sV
  					videos={this.state.videos} 
  				/>
  			</div>
  		);
	}

}

// Put this component into the DOM
ReactDOM.render(<App />, $('.container')[0]);

