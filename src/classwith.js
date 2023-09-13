import { Component } from "react";
import "./App.css";


class Right extends Component{
    render(){
        return(
            <div className="Left" style={{backgroundColor:'purple'}}>
            
            <h1>This is created using Class Based Component</h1>
            <h3>This is done using external Css</h3>
            <h3>This is done inline Css</h3>
            </div>
        )
    }
}
export default Right;