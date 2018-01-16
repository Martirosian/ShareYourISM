import React, { Component } from 'react';

const heroParams = {
	title     : 'The Creative Journey',
	text      : 'These are the stories of creatives living in the digital age. We wanted to learn about their struggles and their triumphs; their creative processes; how they strive to continually get better at their craft.',
	imageURL  : 'images/hero.jpg',
	tag       : '#ShareYourISM'
};

const heroImageStyle = {
	backgroundImage  : "url('" + heroParams.imageURL + "')"
}


export default class Hero extends Component {

	render() {
		return(
			<section className="hero container-padding-h" style={heroImageStyle}>
				<div className="row align-items-center full-height">
					<div className="col-xl-7 col-md-9">
						<h1>{ heroParams.title }</h1>
						<p>{ heroParams.text }</p>
						<span>{ heroParams.tag }</span>
					</div>
				</div>
			</section>
		)
	}
}