import React, {Component, Fragment} from 'react';
import  Header  from './components/Header';
import HeroList from './components/HerosList';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
		<Router>
			<Fragment>
			  <Header
				title= "The Rick and Morty Api"
				subtitle= "Hey, did you ever want to hold a Terry fold?"
				subtitle_hidden="&nbsp; &nbsp; &nbsp; I got one right here, grab my terry flap&nbsp; &nbsp; &nbsp; "
			  />
			  <Route path="/" exact component={HeroList}/>
			</Fragment>
		</Router>
    );
  }
}

export default App;
