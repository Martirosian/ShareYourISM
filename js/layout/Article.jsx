import React, { Component } from 'react';

import Cards from '../components/Cards.jsx';


export default class Article extends Component {

	constructor(props) {
		super(props);
	}

	createMarkup() {
		return {__html: this.props.card.content.rendered};
	}

	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render() {
		
		return (
			<div id="article">
				<div className="container">
					<div className="row justify-content-center">
						<article className="col-md-7 article-content" >
							<h2 className="text-center">"{ this.props.card.title.rendered }"</h2>
							<div dangerouslySetInnerHTML={this.createMarkup()}></div>
						</article>
					</div>	
				</div>
				<div className="bg-gray">
					<h3 className="text-center">More Stories</h3>
					<Cards cardsList={ this.props.allCards }/>
				</div>
			</div>
		);
	}
}
