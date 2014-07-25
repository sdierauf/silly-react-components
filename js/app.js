/** @jsx React.DOM */

var React = require('react');

var SampleComponents = require('./components/SampleComponents.react');

React.renderComponent(
	<SampleComponents />,
	document.getElementById('samples')
);

