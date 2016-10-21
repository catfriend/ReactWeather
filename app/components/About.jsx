var React = require('react');

//var About = React.createClass({
  //render: function () {
    //return (
      //<h3>About Component</h3>
    //)
  //}
//});

// refactor stateless with arrow function

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built with the React.js framework.</p>
      <p>Tools used for this project include:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I linked to Open Weather Map's API to search for weather data by city name.
        </li>
        <li>
          <a href="https://github.com/webpack/webpack">Webpack</a> - I used webpack for my bundler.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - I used Foundation for styling.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
