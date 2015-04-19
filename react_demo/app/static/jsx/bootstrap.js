var React = require('react');
var Component = require('./Component.jsx');

module.exports = function(props) {
    React.render(
        React.createElement(Component, props, null),
        document.getElementById('content')
    );
};
