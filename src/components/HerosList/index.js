import React, {Component} from 'react';
import HeroListElement from '../HeroListElement';
import './style.css'

class HeroList extends Component  {

    constructor(props){
        super(props);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    state = {
        heroes: [],
        info: {}
    };

    createHeroesListHTML = () => {
        const {heroes} = this.state;

        if(heroes.length) {
            return heroes.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
        }
        return <div className="Home__SubTitle_a">No Hero yet</div>
    };

    render() {
        console.log("render");
        return(
             <section className="Home__showCaseWrapper">
                 <div className="Home__showCaseInner">
                     {this.createHeroesListHTML()}
                 </div>
             </section>
        )
    }
    componentDidMount (){
        console.log("componentDidMount");
        // this.setState({
        // 	heroes: [1, 2, 3]
        // });

        fetch("https://rickandmortyapi.com/api/character/")
            .then(res => res.json())
            .then (res => {
                this.setState({
                    heroes: res.results,
                    info: res.info
                })
            })
    }
}

export default HeroList;