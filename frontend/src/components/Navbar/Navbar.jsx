import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div className='navbar1'>
        <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738654508/oj7qqwdo1uimyam74bvh.png" alt="Trazex-logo" />

        <div className="elements">
           <Link to="/home"> <div className='element1'>Home</div></Link>
            <Link to="/newcontents"> <div className='element1'>Contents</div></Link>
           <Link to="/mycontest"> <div className='element1'>My Contents</div></Link>
           <Link to='/myteams'><div className='element1'>Teams</div></Link>
            <div className='element1'>LeaderBoard</div>
           <Link to="/aboutus"> <div className='element1'>About us</div></Link>
        </div>

        <div className="icons">
            <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738735332/romxcfbmkjipvlo9cxuv.png" alt="Wallet" />
            <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738735235/g1mx54wxmywg4livi0lr.png" alt="Bell" />
            <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738735114/jlsr9c1sfzufu3krjlql.png" alt="Profile-Icon" />
        </div>
    </div>
    </>
  )
}

export default Navbar