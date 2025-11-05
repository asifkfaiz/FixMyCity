import React from 'react'
import Navbar from '../../components/Navbar'
import LeftSideBar from '../../components/LeftSideBar'
import CentreFeed from '../../components/CentreFeed'
import RightSideBar from '../../components/RightSideBar'
import '../../styles/citizenhomepage.css'


function CitizenHomePage() {
  return (
    <div className="hp">
    
    <Navbar/>
    <div className="homefeed">
        <div className="leftsidebar">
            <LeftSideBar/>
        </div>
        <div className="centrefeed">
            <CentreFeed/>
        </div>
        <div className="rightsidebar">
            <RightSideBar/>
        </div>
    </div>

    </div>
  )
}

export default CitizenHomePage