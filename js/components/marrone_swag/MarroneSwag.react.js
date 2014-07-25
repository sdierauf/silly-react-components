/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = React.createClass({

	

	render: function() {

		var marroneImg = "http://i.imgur.com/K0sD3G8.jpg";

		var text = this.props.text;
		var swagStyle = {
			color: 'white',
			backgroundImage: 'url(' + marroneImg + ')',
			backgroundSize: 'cover',
			width: '384px',
			height: '512px',
			textAlign: 'center',
			verticalAlign: 'bottom',
			margin: '10px',
			WebkitTextStroke: '3px black'
		};

		var textStyle = {
			fontSize: '50pt',
			fontFamily: 'Impact, sans-serif',
			margin: '0px'	
		}

		return (
			<div style={swagStyle}>
				<h1 style={textStyle}>{text}</h1>
			</div>
		);
	}


});

module.exports = MarroneSwag; 