import React, {Component} from 'react';
import HeroListElement from '../HeroListElement';
import './style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HeroList extends Component  {
	
	constructor(props){
		super(props)
	}

	state = {
		heros: [],
		info: {}
	};

	createHerosListHtml = () => {
		const {heros} = this.state;

		if(heros.length) {
			return heros.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
		}
		return <div className="Home__SubTitle">No Hero yet</div>
	};

	render() {

	return (
		<section className="Home__showCaseWrapper">
				<div className="Home__showCaseInner">
					<HeroListElement/>
				</div>
		</section>
	 )
	}
		componentsDidMount (){
		
			// heros: [1,2,3,4]
		
		fetch("https://rickandmortyapi.com/api/character/")
			.then(res => res.json())
			.then (res => {
				this.setState({
					heros: res.results
				})
			})
	}
}

export default HeroList;