import React from 'react'
import "./projectCard.css"
import {TiTick} from 'react-icons/ti'

function ProjectCard() {
  return (
    <>
      <div className='project-card'>
        <div className="heading">
          <div className="details">
            <div className="profile-image"></div>
            <div className="names">
              <div className="project-name">project name</div>
              <div className="university-name">university name</div>
            </div>
          </div>
          <div className="status">
            <TiTick className='tick'/>
            completed
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac libero ligula. Etiam elementum ligula vitae ex tempus, eget porttitor est lobortis. Praesent leo metus, molestie in arcu non, tempor euismod odio. Praesent volutpat rutrum est, vel condimentum risus pharetra nec. Read more
        </div>
        <img src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" alt="project-image" className="project-image" />
      </div>
      <br />
    </>

  )
}

export default ProjectCard