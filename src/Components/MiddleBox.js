import React from "react"
import LandingText from "./LandingText";
import About from "./otherpages/About";
import Plans from "./otherpages/Plans";
import Portfolio from "./otherpages/Portfolio";
import Contacts from "./otherpages/Contacts";



export default ({x_move,y_move, receiveProps}) => {

// useEffect(()=> console.log( `the state changed to ${x_move} ${y_move}`))

    return <section className="card-slider">
    
        <div  className="card-wrapper" style={{ transform: `translate(${x_move}vw, ${y_move}vh) scale(1)`,  transition: "transform 1.5s cubic-bezier(0.900, 0.750, 0.500, 1)"}}>
<div className="card top-card"><About/></div>
<div className="card left-card"><Plans/></div>
<div className="card middle-card"> <LandingText /></div>

<div className="card right-card"> <h1> <Portfolio/></h1></div>
<div className="card bottom-card"> <h1><Contacts/></h1></div>
        </div>
    </section>
}