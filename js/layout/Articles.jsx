import React, { Component } from 'react';

import Cards from '../components/Cards.jsx';


export default class About extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="articles">
				<h1 className="text-center">{ this.props.categoryName }</h1>
				<Cards cardsList={ this.props.cardsList } filterBy={ this.props.categoryName } />
			</div>
		);
	}
}
