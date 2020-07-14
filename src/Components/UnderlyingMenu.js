import React from "react";
import homeBTN from "../resources/thumbs_at_work_Logo_white.svg"


export default ({receiveProps})=> {

    

    return <div className="menu">
        <ul>
            <li><button className="btn-home" onClick={()=> receiveProps(-100, -100)}><img src={homeBTN} alt="home-button"/></button></li> {/*home middle*/}
            <li><button className="btn-plans" onClick={()=> receiveProps(0, -100)}><img src={homeBTN} alt="plans-button"/></button></li> {/*plans |left */}
            <li><button className="btn-about" onClick={()=> receiveProps(-100, 0)}><img src={homeBTN} alt="about-button"/></button></li> {/*about | top */}
            <li><button className="btn-portfolio" onClick={()=> receiveProps(-200, -100)}><img src={homeBTN} alt="portfolio-button"/></button></li> {/*portifolio | right */}
            <li><button className="btn-contacts" onClick={()=> receiveProps(-100, -200)}><img src={homeBTN} alt="contacts-button"/></button></li> {/*contacts | bottom */}
           
        </ul>
    </div>
}