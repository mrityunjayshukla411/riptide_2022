import React from 'react'
import "./dashboard.css";
import TabsComponent from './tabs';

function Dashboard() {
  return (
    <>
      <div className='dashboard'>
        <div className="circle">
          ss
        </div>
        <div className="upper">
          <div className="name">shreyas shah</div>
        </div>
        <div className="lower">
          <div className="username">shreyaslshah</div>
          <div className="email">shreyaslshah@gmail.com</div>
          <div className="change-password">Change Password</div>
        </div>
      </div>
      <TabsComponent/>
    </>
  )
}

export default Dashboard;