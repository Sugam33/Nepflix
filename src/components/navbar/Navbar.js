import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
      <div className="left">
        <span>Home Page</span>
        <span>Series</span>
        <span>Movies</span>
        <span>Popular</span>
        <span>My List</span>
      </div>
      <div className="right">
        <SearchIcon className='icon'/>
        <span>KID</span>
        <NotificationsIcon className='icon'/>
         <AccountBoxIcon className='icon'/> 
         <ArrowDropDownIcon className='icon'/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
