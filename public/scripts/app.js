'use strict';

console.log('App.js is running');

// JSX Javascripit synatx extension
// Provided my React

var appOutline = {
    appTitle: 'Kates App',
    appSubtitle1: 'Education',
    appSubtitle2: 'Work Experience',
    appSubtitle3: 'Roles and Responsibilites',
    appSubtitle4: 'Hobbies'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appOutline.appTitle
    ),
    React.createElement(
        'h2',
        null,
        appOutline.appSubtitle1
    ),
    React.createElement(
        'h2',
        null,
        appOutline.appSubtitle2
    ),
    React.createElement(
        'h2',
        null,
        appOutline.appSubtitle3
    ),
    React.createElement(
        'h2',
        null,
        appOutline.appSubtitle4
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
