import React from 'react'
import {Link} from'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
            <Link className="logo" to='/popular'>UMC Movie</Link>
            <div className='nav-right-wrap'>
                <ul>
                    <li>
                        <Link className="nav-item" to='/'>회원가입</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/popular'>Popular</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/nowplaying'>Now Playing</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/toprated'>Top Rated</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/upcoming'>Upcoming</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
