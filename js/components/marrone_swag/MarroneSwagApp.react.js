/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = require('./MarroneSwag.react');

var MarroneSwagApp = React.createClass({

	render: function() {
		
		return(
			<div id="marroneSwagApp">
				<MarroneSwag
					text={"swag"} />
			</div>
		);
	}
});

module.exports = MarroneSwagApp; 