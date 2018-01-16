import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { browserhistory } from 'react-router'

import axios from 'axios';

// Layouts
import Home from './layout/Home.jsx'
import About from './layout/About.jsx'
import Article from './layout/Article.jsx'
import Articles from './layout/Articles.jsx'

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';




const cardsList = [
	{
		imageURL    : 'http://68.media.tumblr.com/2db25e6338a1c01e5431a6f834812c1b/tumblr_nbloyir9j91rp1a6ao1_1280.jpg',
		title       : 'tobias van schneider',
		tag         : 'design',
		subCategory : 'Product design',
		text        : 'It will be much easier as you are already in motion. My goal is to be walking at all times',
		id      	: 'article1'
	},
	{
		imageURL    : 'http://68.media.tumblr.com/2db25e6338a1c01e5431a6f834812c1b/tumblr_nbloyir9j91rp1a6ao1_1280.jpg',
		title       : 'TERESA VU',
		tag         : 'design',
		subCategory : 'Product design',
		text        : 'It will be much easier as you are already in motion. My goal is to be walking at all times',
		id      	: 'article2'
	},
	{
		imageURL    : 'http://68.media.tumblr.com/2db25e6338a1c01e5431a6f834812c1b/tumblr_nbloyir9j91rp1a6ao1_1280.jpg',
		title       : 'SABA',
		tag         : 'engineering',
		subCategory : 'Product design',
		text        : 'It will be much easier as you are already in motion. My goal is to be walking at all times',
		id      	: 'article3'
	},
	{
		imageURL    : 'http://68.media.tumblr.com/2db25e6338a1c01e5431a6f834812c1b/tumblr_nbloyir9j91rp1a6ao1_1280.jpg',
		title       : 'tobias van schneider',
		tag         : 'style',
		subCategory : 'Product design',
		text        : 'It will be much easier as you are already in motion. My goal is to be walking at all times',
		id      	: 'article4'
	}
]

export default class App extends Component {

	constructor() {
		super();
		this.state = { 
			canRender   : false,
			categories	: [],
			posts		: [],
			secondaryNav: [{
				name: 'About', 
				slug: 'https://ism-sf.com/pages/our-story' 
			}]
		};

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	getAjaxData(URL, stateName) {
		axios
		.get(URL)
		.then(res => {
			this.setState({ [stateName]: res.data }) 

			if(this.state.posts.length > 0){
				this.setState({ canRender: true }) 
			}
		})
		.catch(err => console.log(err))
	}

	componentDidMount(){

		const categoriesData = {
			URL: 'http://shareyourism.com/wp/wp-json/wp/v2/categories/',
			stateName: 'categories'
		}
		const postsData = {
			URL: 'http://shareyourism.com/wp/wp-json/wp/v2/posts/',
			stateName: 'posts'
		}

		this.getAjaxData( categoriesData.URL, categoriesData.stateName )
		this.getAjaxData( postsData.URL, postsData.stateName )

	}

	render() {

		var navRouteList = this.state.categories.map(function(mainNavItem, index) {
			return (
				<Route exact key={ index } path={['/', mainNavItem.slug ].join('')} render={(props) => ( <Articles categoryName={ mainNavItem.name } cardsList={ this.state.posts }/> )} />
			);
		}, this);

		var cardsRouteList = this.state.posts.map(function(cardsListItem, index) {
			return (
				<Route exact key={ index } path={['/', cardsListItem.pure_taxonomies.categories[0].name, '/', cardsListItem.slug ].join('')} render={(props) => ( <Article card={ cardsListItem } allCards={ this.state.posts }/> )} />
			);
		}, this);

		var loadingStyle = {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			margin: 'auto'
		};

		if(this.state.canRender){
			return (
				<div>
					<Header mainNav={ this.state.categories } secondaryNav={ this.state.secondaryNav }/>
					<main>
						<Switch history={browserhistory} >
							<div>
								<Route exact path='/' render={(props) => ( <Home cardsList={ this.state.posts }/> )} />
								<Route path='/about' component={ About }/>
								{ navRouteList }
								{ cardsRouteList }
							</div>
						</Switch>
					</main>
					<Footer />
				</div>
			);
		}
		else{
			return(
				<div className="loading">
					<img src="images/loading.gif" alt="Loading" style={loadingStyle}/>
				</div>
			);
		}
	}
}
