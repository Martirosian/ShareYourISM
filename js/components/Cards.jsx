import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Cards extends Component {

	constructor(props) {
		super(props);

		this.allCards = this.props.cardsList;
		this.categoryName = this.props.filterBy;

		this.filteredCards;
	
	}

	filterCards() {
		
		if( typeof( this.categoryName ) !== "undefined" && this.categoryName != "All" ){
			var categoryName = this.categoryName;

			return this.filteredCards = this.allCards.filter(function(el) {

				return el.pure_taxonomies.categories[0].name == categoryName;
			})
		}
		else{
			return this.allCards;
		}
	}

	render() {

		var cardItems = this.filterCards().map(function(cardsList, index) {

			var subcategory;

			if( typeof( cardsList.pure_taxonomies.tags ) === 'undefined' ){
				subcategory = cardsList.pure_taxonomies.categories[0].name;
			}
			else{
				subcategory = cardsList.pure_taxonomies.tags[0].name;
			}


			return (

				<article className="cards-item col-md-6" key={ index }>
					<Link to={['/', cardsList.pure_taxonomies.categories[0].name, '/', cardsList.slug].join('')} >
						<img src={ cardsList.better_featured_image.source_url } alt={ cardsList.title } className="img-fluid"/>
					</Link>
					<h3>
						{ cardsList.acf.author }
					</h3>
					<span>
						{ subcategory }
					</span>
					<p>
						"{ cardsList.title.rendered }"
					</p>
					<Link className="btn btn-primary" to={['/', cardsList.pure_taxonomies.categories[0].name, '/', cardsList.slug].join('')} >READ STORY</Link>
				</article>
			);
		}, this);

		return (
			<section className="cards container-padding-h">
				<div className="row">
					{cardItems}
				</div>
			</section>
		)
	};
}