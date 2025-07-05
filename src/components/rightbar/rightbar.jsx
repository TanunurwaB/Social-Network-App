import React from 'react'
import "./rightbar.scss"

const rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <span> Jane Doe</span>
            </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <span> Jane Doe</span>
            </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            
          </div>
          
        </div>
      </div>



       <div className="container">
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <span> Jane Doe</span>
            </div>
              <div className="buttons">
                <span>Changed their cover picture</span>
                <span>1 min ago</span>
              </div>
            
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <span> Jane Doe</span>
            </div>
              <div className="buttons">
                <span>Changed their cover picture</span>
                <span>1 min ago</span>
              </div>
            
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <span> Jane Doe</span>
            </div>
              <div className="buttons">
                <span>Changed their cover picture</span>
                <span>1 min ago</span>
              </div>
            
          </div>

          
          
        </div>
      </div>


       <div className="container">
        <div className="item">
          <span>Online Activty</span>
          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <div className="online">
                </div>
              <span> Jane Doe</span>
              
              
            </div>
           
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <div className="online"></div>
              <span> Jane Doe</span>
              
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <div className="online"></div>
              <span> Jane Doe</span>
              
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="/cool-profile-picture.jpg" alt="" />
              <div className="online"></div>
              <span> Jane Doe</span>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default rightbar