import React from "react";
import '../style/style.css'

const MainPage=()=>{
    return(
        <div>
            <welcomecontainer>
            <welcome>환영합니다</welcome>
        </welcomecontainer>

        <bluecontainer>
            <searchtext>Find your movies!</searchtext>
                <input type="text"  placeholder="search!"></input>
        </bluecontainer>
        </div>
        
    );    
};

export default MainPage;