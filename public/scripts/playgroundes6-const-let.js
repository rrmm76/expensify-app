'use strict';

//import React from "react";
//import ReactDOM from "react-dom";
console.log('app.js is running');

var app = {
    title: 'Eng',
    subtitle: 'mom',
    location: "Cairo",
    age: 56,
    options: ['one', 'tow']
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'UNKnown';
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title : 'No Title',
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        'Locatio :',
        getLocation(app.location),
        ' '
    ),
    app.age >= 50 && React.createElement(
        'p',
        null,
        'Age is ',
        app.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'T1'
        ),
        React.createElement(
            'li',
            null,
            'T2 '
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
