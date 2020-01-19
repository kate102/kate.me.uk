'use strict';

console.log('App.js is running');

// JSX Javascripit synatx extension
// Provided my React
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Kates App'
    ),
    React.createElement(
        'h2',
        null,
        'Education'
    ),
    React.createElement(
        'h2',
        null,
        'Work Experience'
    ),
    React.createElement(
        'h2',
        null,
        'Roles and Responsibilites'
    ),
    React.createElement(
        'h2',
        null,
        'Hobbies'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
