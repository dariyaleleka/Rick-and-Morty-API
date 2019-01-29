import React from 'react';
import HeroListElement from '../HeroListElement';
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
		<section className="Home__show">
				<div className="Home__showInner">
					<article className="CharacterCard__Wrapper-sc-19ezuaf-0 fbjIjh">

					<div data="card header" class="CharacterCard__ImgWrapper-sc-19ezuaf-1 bMUkNs">
					<div class="card-image"><img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" alt="Commander Rick"/>
					</div>
					<div class="CharacterCard__Title-sc-19ezuaf-3 cJYIzS">
					<h2 class="CharacterCard__Name-sc-19ezuaf-4 gsRlJi">Commander Rick</h2>
					<p class="CharacterCard__Description-sc-19ezuaf-5 jFxto">id: 69 - created a year ago</p>
					</div>
					</div>
					<div data="card info" class="CharacterCard__InfoWrapper-sc-19ezuaf-2 duzZxp"><div class="CharacterCard__TextWrapper-sc-19ezuaf-6 ABEdB"><span>STATUS</span><p>Dead</p></div><div class="CharacterCard__TextWrapper-sc-19ezuaf-6 ABEdB"><span>SPECIES</span><p>Human</p></div><div class="CharacterCard__TextWrapper-sc-19ezuaf-6 ABEdB"><span>GENDER</span><p>Male</p></div><div class="CharacterCard__TextWrapper-sc-19ezuaf-6 ABEdB"><span>ORIGIN</span><p>unknown</p></div><div class="CharacterCard__TextWrapper-sc-19ezuaf-6 loCIhT"><span>LAST LOCATION</span><p>Citadel of Ricks</p></div></div>

					</article>
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