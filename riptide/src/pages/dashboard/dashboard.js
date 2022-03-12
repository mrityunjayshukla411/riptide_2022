import React from 'react'
import CreatePost from '../createPost/createPost';
import "./dashboard.css";
import TabsComponent from './tabs';


function Dashboard() {
  return (
    <>
      <CreatePost className='create-post'/>
    <div className="dashboard-container">
      <div className='dashboard'>
        <div className="circle">
          UN
        </div>
        <div className="upper">
          <div className="name">University Name</div>
        </div>
        <div className="lower">
          <div className="username">university@uni.com</div>
          <div className="email"></div>
          <div className="change-password">Post Project</div>
        </div>
      </div>
      <TabsComponent/>
    </div>
    </>
  )
}

export default Dashboard;