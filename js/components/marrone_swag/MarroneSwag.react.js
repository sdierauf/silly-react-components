/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = React.createClass({

	var marroneImg = "http://i.imgur.com/K0sD3G8.jpg";

	render: function() {

		var text = this.props.text;

		return (
			<div class="marroneSwag">
				<h1>{text}</h1>
			</div>
		);
	}


});

module.exports = MarroneSwag; 