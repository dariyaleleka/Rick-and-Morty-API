import React from 'react';
function  HeroListElement (props) {

		const {id, image, name, status, species, gender, origin, location} = props.hero;

	return (
		<section>
			<article className="CharacterCard_Wrapper">
				<div data="card header" className="CharacterCard__ImgWrapper">
					<div className="card-image"><img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" alt="Commander Rick"/>
					</div>
					<div className="CharacterCard__Title">
						<h2 className="CharacterCard__Name">Commander Rick</h2>
						<p className="CharacterCard__Description">id: 69 - created a year ago</p>
					</div>
				</div>
				<div data="card info" className="CharacterCard__InfoWrapper">
					<div className="CharacterCard__TextWrapper">
						<span>STATUS</span><p>Dead</p></div>
					<div className="CharacterCard__TextWrapper">
						<span>SPECIES</span><p>Human</p></div>
					<div className="CharacterCard__TextWrapper">
						<span>GENDER</span><p>Male</p></div>
					<div className="CharacterCard__TextWrapper">
						<span>ORIGIN</span><p>unknown</p></div>
					<div className="CharacterCard__TextWrapper">
						<span>LAST LOCATION</span><p>Citadel of Ricks</p></div>
				</div>

			</article>
		</section>
	)
};

export default  HeroListElement;