import React from 'react'
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SOCIAL</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon style={{cursor: "pointer"}} />
        <GridViewIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PeopleIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className="user">
          <img src="/cool-profile-picture.jpg" alt="" />
          <span>John C</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar