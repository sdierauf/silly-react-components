/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = require('./MarroneSwag.react');

var MarroneSwagApp = React.createClass({

	render: function() {
		
		return(
			<div id="marroneSwagApp">

				<MarroneSwag text={"SWAG"} />

				<MarroneSwag text={"fuck the haters"} />
				
			</div>
		);
	}
});

module.exports = MarroneSwagApp; 