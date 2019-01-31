import React, {Component} from 'react';
import HeroListElement from "../HeroListElement";
import { Redirect } from "react-router-dom";
class SingleHero extends Component {
  state = {
    hero: {},
	error: false
  };
  render (){
	console.log(this.props.match.params.id);
	const {hero, error} = this.state;
	if(error) {
	  return (
		<Redirect push to="/"/>
	  )
	}
    return (
	  <section className="Home__showCaseWrapper">
		<div className="Home__showCaseInner">

		  {
			Object.keys(hero).length?
			  <HeroListElement hero={hero}/>
			  		:
			  <div>No data yet</div>
		  }

		</div>
	  </section>
	)
  }

  componentDidMount (){
	console.log("componentDidMount");
	const {id} = this.props.match.params;
	fetch(`https://rickandmortyapi.com/api/character/${id}`)
	  .then(res => res.json())
	  .then (res => {
		this.setState({
		  hero: res
		})
	  })
	  .catch(err => {
		console.log(err)
		this.setState({
		  error: true
		})
	  })
  }
}

export default SingleHero;