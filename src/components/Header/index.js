import React from 'react';
import './style.css'

function Header(props) {
	const {title, subtitle, subtitle_hidden} = props;

	return (
		<section className="Header">
				<h1 className="Home__title">{title}</h1>
				<div className="Home__subtitle">
					<h2 className="Home__subtitle_a">{subtitle}</h2>
					<h2 className="Home__subtitle_b"> {subtitle_hidden} </h2>
				</div>
		</section >
	)
}

export default Header;