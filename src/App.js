import React, { Component } from "react"
import "./styles/App.css"
import Header from "./Components/header/Header"
import UnderlyingMenu from "./Components/UnderlyingMenu"
import MiddleBox from "./Components/MiddleBox"

class App extends Component {

    constructor(props){
        super(props);
        this.state={movement:{x_move: `-100`, y_move: `-100` }}}

        receiveProps =( xstate, ystate )=>{
         this.setState({movement:{ x_move: `${xstate}`, y_move: `${ystate}`}})
        }

    render(){
        const {x_move, y_move} = this.state.movement

        return <div className="main-container">
            <Header/>
            <MiddleBox x_move={x_move} y_move={y_move}  />

            <UnderlyingMenu receiveProps={this.receiveProps}  />
            </div>
    }

}
export default App;