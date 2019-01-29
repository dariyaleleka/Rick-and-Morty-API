import React, { Component } from 'react';
import  Header  from './components/Header';
import HeroList from './components/HerosList';

import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header 
			title= "The Rick and Morty Api"
			subtitle= "Hey, did you ever want to hold a Terry fold?"
			subtitle_hidden="&nbsp; &nbsp; &nbsp; I got one right here, grab my terry flap&nbsp; &nbsp; &nbsp; "
			/>
			<HeroList />
		</div>
    );
  }
}

export default App;
