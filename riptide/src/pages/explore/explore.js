import React from 'react'
import DashboardCard from '../dashboard/dashBoardCards/dashBoardCard';
import "./explore.css";

function Explore() {
  return (
    <>
      <div className='explore-container'>
        <div className='navbar'>
          <div className="logo">logo</div>
          <div className="search-profile">
            <input placeholder='search' className="search"></input>
            <div className="profile"></div>
          </div>
        </div>
        <div className="selection">
          <select name="university" className="university">
            <option value="" disabled selected>organisations</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
          <select name="domains" className="domains">
          <option value="" disabled selected>domains</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
          <input type="radio" id='completed' name='duration' value={"completed"} />
          <label htmlFor="completed">completed</label>
          <input type="radio" id='ongoing' name='duration' value={"ongoing"} />
          <label htmlFor="ongoing">ongoing</label>
          <input type="radio" id='both' name='duration' value={"both"} />
          <label htmlFor="both">both</label>
        </div>

        <DashboardCard/>
        <DashboardCard/>
      </div>
    </>
  )
}

export default Explore;