import React, { Component } from 'react';

const socialLinks = [
	{
		link: 'https://www.facebook.com/ismsf',
		iconURL: '/images/facebook.svg'
	},
	{
		link: 'https://twitter.com/ism_sf',
		iconURL: '/images/twitter.svg'
	},
	{
		link: 'https://www.instagram.com/ism_sf/',
		iconURL: '/images/instagram.svg'
	},
	{
		link: 'https://www.youtube.com/channel/UCm70NdwCysuQ5WIpTT0YOtw',
		iconURL: '/images/youtube.svg'
	}
];

class Social extends React.Component {
	

	render() {

		var socialItems = this.props.socialItems.map(function(socialLinks, index) {
			return (
				<li key = { index }>
					<a href={ socialLinks.link } target="_blank">
						<img src={ socialLinks.iconURL } alt="Social Icon" />
					</a>
				</li>
			)
		}, this);
		
		return (
			<ul className="social-links clear list-inline">
				{ socialItems }				
			</ul>
		)
	}
}

export default class Footer extends Component {

	render() {
		return(
			<footer id="footer" className="container-padding-h">
				<div className="footer-holder d-flex justify-content-between align-items-center">

					<a className="logo d-none d-lg-block" href="https://www.ism-sf.com">
						<img src="/images/logo.png" alt="ISM Logo" />
					</a>

					<span>A project brought to you by ISM.</span>

					<Social socialItems = { socialLinks }/>
				</div>
			</footer>
		)
	}
}