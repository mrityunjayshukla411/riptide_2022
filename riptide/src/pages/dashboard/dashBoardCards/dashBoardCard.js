import React from 'react'
import "./dashBoardCard.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Chip from '@mui/material/Chip';

function DashboardCard() {


  return (
    <>
    <div className='project-card'>
      <div className="details">
        <div className="profile-image"></div>
        <div className="names">
          <div className="project-name">project name</div>
          <div className="university-name">university name</div>
        </div>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac libero ligula. Etiam elementum ligula vitae ex tempus, eget porttitor est lobortis. Praesent leo metus, molestie in arcu non, tempor euismod odio. Praesent volutpat rutrum est, vel condimentum risus pharetra nec. Read more
      </div>
      <img src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" alt="project-image" className="project-image" />
    <span>
        <FavoriteIcon fontSize="large" className="like-btn" onClick={console.log("helloof")}/>
        <span className="like-text">Like</span>
    </span>
    <span>
    <PersonAddAltIcon fontSize="large" className="collab-btn"/>
        <span className="like-text">Collab</span>
    </span>
        <span className="domain-text">Domains</span>
    <Chip label="Chip Outlined" variant="outlined" className="tags"/>

    </div>
      <br/>
    </>
    
  )
}

export default DashboardCard