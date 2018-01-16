import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Burger extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
		}

		this.burgerToggle = this.burgerToggle.bind(this);
	};

	burgerToggle() {
		this.setState({
			toggle: !this.state.toggle
		});
	};

	render() {
		return (
			<div className={['hamburger js-hamburger d-lg-none', this.state.toggle ? 'is-active' : ''].join(' ')} 
				 onClick={ this.burgerToggle }>
				<div className="hamburger-box">
					<div className="hamburger-inner"></div>
				</div>
			</div>
		)
	};
}

class Nav extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentCategory: 'All',
		}

		this.updateTitle = this.updateTitle.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	updateHeaderTitle() {
		document.querySelector('.mobile-nav-title > p').innerHTML = this.state.currentCategory;
		document.querySelector('.hamburger').click();
	}

	updateTitle(event) {
		let currentCategory = event.currentTarget.textContent;

		this.setState({
			currentCategory: currentCategory
		}, this.updateHeaderTitle );
	}

	onClick(event){
		this.updateTitle(event);
	}

	render() {

		var listItems = this.props.navItems.map(function(navItems, index) {
			return (
				<li key={ index }>
					{/* 
					<Link to={['/', navItems.slug ].join('')} onClick={this.onClick}>{ navItems.name }</Link>
					*/}

					<a href="https://ism-sf.com/pages/our-story" target="_blank">About</a>
				</li>
			);
		}, this);

		return (
			<nav className={ this.props.className }>
				<ul className="clear">
					{ listItems }
				</ul>
			</nav>
		)
	};	
}

class MobileNav extends React.Component {

	triggerBurger() {
		document.querySelector('.hamburger').click()
	}

	render() {
		return(
			<div className="mobile-nav">
				<div className="mobile-nav-title">
					<p onClick={this.triggerBurger}>All</p>
				</div>
				<div className="mobile-nav-holder">
					{/* <Nav className="main-nav" navItems={ this.props.mainNav } /> */}
					<Nav className="secondary-nav" navItems={ this.props.secondaryNav } />
				</div>
			</div>
		)
	};
}

export default class Header extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		const mainNav = this.props.mainNav;
		const secondaryNav = this.props.secondaryNav;

		return (
			<header id="header" className="container-padding-h">
				<div className="nav-holder d-flex justify-content-between align-items-center">
					
					<Burger />
					<Link to='/' className="logo d-none d-lg-block">
						<img src="/images/logo.png" alt="ISM Logo" />
					</Link>
									
					{/* <Nav className="main-nav d-none d-lg-block" navItems={ mainNav }/>*/}
					<Nav className="secondary-nav text-uppercase d-none d-lg-block" navItems={ this.props.secondaryNav } />

					<MobileNav mainNav={ mainNav } secondaryNav={ this.props.secondaryNav } />
				</div>
			</header>
		);
	}
}
