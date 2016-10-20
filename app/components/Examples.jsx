var React = require('react');
var {Link} =require('react-router');

// refactor to arrow with everything from the render function

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examle locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA</Link>
        </li>
        <li>
          <Link to='/?location=Nairobi'>Nairobi, Kenya</Link>

        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
