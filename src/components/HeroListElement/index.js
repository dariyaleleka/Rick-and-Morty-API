import React from 'react';
function  HeroListElement (props) {

		const {id, image, name, status, species, gender, origin, location} = props.hero;

	return (
		<section>
			<article className="CharacterCard_Wrapper">
				<div data="card header" className="CharacterCard__ImgWrapper">
					<div className="card-image"><img src={image} alt={name}/></div>
					<div className="CharacterCard__Title">
						<h2 className="CharacterCard__Name">{name}</h2>
						<p className="CharacterCard__Description">id: {id}</p>
					</div>
				</div>
				<div data="card info" className="CharacterCard__InfoWrapper">
					<div className="CharacterCard__TextWrapper">
						<span>STATUS</span><p>{status}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>SPECIES</span><p>{species}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>GENDER</span><p>{gender}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>ORIGIN</span><p>{origin.name}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>LAST LOCATION</span><p>{location.name}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<a href={'/personage/${id'}>Show More</a>
					</div>
				</div>

			</article>
		</section>
	)
}

export default  HeroListElement;