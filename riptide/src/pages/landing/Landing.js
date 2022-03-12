import {React,useEffect} from 'react'
import './landing.css'
import {Link} from "react-router-dom";
const TagCloud = require('TagCloud');

function Landing() {

  const container = '.content';
  const texts = [
    'JavaScript', 'CSS', 'HTML','C', 'C++', 'React','Python', 'Java', 'git','django', 'Node.js', 'OpenCV','GCP', 'MySQL', 'jQuery',
  ];
  const options = {
    radius: 250,
    direction: Math.random() * (180 - 1),
    initSpeed: 'fast',
    maxSpeed: 'fast',
    keep: true
};
  
  useEffect(() => {
    TagCloud(container, texts, options);
}, [])

  return (
    <div>
      <div className="landing-body">
        <div className="landing-nav-container">
        <a href='explore'><p className='landing-explore'>Explore</p></a>
         <a href='register'> <p className="landing-signup">Sign Up</p></a>
          <a href='login'><div className="landing-login-box">
            <p className="landing-login">Log In</p>
          </div>
          </a>
        </div>
        <div className='landing-content'>
          <div className='landing-text'>
            <p className='landing-title1'>Finding Projects,</p>
            <p className='landing-title2'>Made Easy.</p>
            <p className="landing-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet fermentum sem. Praesent ornare tempus erat nec ullamcorper. Maecenas pellentesque convallis sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut accumsan laoreet diam nec sagittis. Praesent at justo quis est tempus tincidunt nec vel tortor. Maecenas vulputate sodales justo, eu lacinia nibh tempor vel. Donec sed aliquam tellus. Curabitur blandit purus ut congue feugiat.</p>
            <a href='explore'><button className='landing-projects'>Check Projects</button></a>
          </div>
          <div className='landing-animation'>
            <span className='content'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing