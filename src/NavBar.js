import React from 'react'
import { NavLink }from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

const NavBar=()=> {
    return (
        <>
        <div className="navbar">
        <div className='nav1'>
            <NavLink to="/"><h1> Tr<span className="red">Av</span>El</h1></NavLink>
            <div className="line"></div>
        </div>
        <div className="nav2">
            <NavLink  activeclassname="active" to='/'> <h2>Home</h2> </NavLink>
            <NavLink  activeclassname="active" to='/services'> <h2>Service</h2> </NavLink>
            <NavLink  activeclassname="active" to='/about'> <h2>About</h2> </NavLink>
            <NavLink  activeclassname="active" to='/contact'> <h2>Contact</h2> </NavLink>
        </div>
        <div className="nav3">
        <div className="Bar">
              <input type="text" placeholder="Search Bar"></input>
              <span className="search"><SearchIcon/></span>
         </div>
        </div>
        </div>
            
        </>
    )
}

export default NavBar
