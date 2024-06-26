import React from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css'

const Navbar=()=>{
    return(
        <div>   
            <nav>
                <headnav> <Link to ='/'>UMC Movie</Link></headnav>
                <navleft>
                    <Link to="#">회원가입</Link>
                    <Link to="/Popular">Popular</Link>
                    <Link to="/TopRated">Top Rated</Link>
                    <Link to="/UpComing">Up Coming</Link>
                </navleft>
            </nav>
        </div>

    );
};

export default Navbar;