import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css'
import {useNavigate} from "react-router-dom";




    
const Navbar=()=>{

    const [isLogin, setIsLogin] = useState("로그인");
    const navigate = useNavigate();
    const goMain = () => {
        navigate(`/`);
        }
    const handleLogin = () => {
        if (isLogin === "로그인") {
            setIsLogin("로그아웃");
        } else {
            setIsLogin("로그인");
        }
    };

    return(
        <div>   
            <nav>
                <headnav> <Link to ='/'>UMC Movie</Link></headnav>
                <navleft>
                    <Link to="#"onClick={handleLogin}>{isLogin}</Link>
                    <Link to="/Popular">Popular</Link>
                    <Link to="/Nowcoming">Nowcoming</Link>
                    <Link to="/TopRated">Top Rated</Link>
                    <Link to="/UpComing">Up Coming</Link>
                </navleft>
            </nav>
        </div>

    );
};

export default Navbar;