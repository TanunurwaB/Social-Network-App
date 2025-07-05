import React from 'react'
import "./leftbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import friend from "/assets/friend.png"
import Groups from "/assets/2.png"    
import Market from "/assets/3.png"
import Watch from "/assets/4.png"
import Memories from "/assets/5.png"
import Events from "/assets/6.png"
import Gaming from "/assets/7.png"
import Gallery from "/assets/8.png"
import Videos from "/assets/9.png"
import Messages from "/assets/10.png"
import Tutorials from "/assets/11.png"
import Courses from "/assets/12.png"
import Fund from "/assets/13.png"



const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div
            className="user"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PersonIcon />
            <span>John C</span>
          </div>
          <div className="item">
            <img src={friend} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
       
          <hr />
          <div className="menu">
            <span style={{ fontSize: "12px", color: "gray" }}>
              Your shortcuts
            </span>
            <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <hr />
        <div className="menu">
          <span style={{fontSize:"12px", color:"gray"}}>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar