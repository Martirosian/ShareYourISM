import React, { Component } from 'react';

import Hero from '../components/Hero.jsx';
import Cards from '../components/Cards.jsx';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Hero />
				
				<Cards cardsList={ this.props.cardsList }/>
			</div>
		);
	}
}