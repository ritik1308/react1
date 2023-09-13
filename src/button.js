import {useState} from "react"; 
import "./App.css";

 import Left from "./functional";
 import Right from "./classwith";
function Clicker(){
    const  [data,setdata]=useState(0);
    const[count,setcount]=useState(0);
    

    return(

        <>
        {/* <Left></Left> */}
        <h1 className="mainHeading">Styling using Function and the Class Component</h1>
        <div className="buttonEdit">
        <button onClick={()=>setdata(!data)
        
        
        }>to see stylish function Component
        
        </button>
        <button onClick={()=>setcount(!count)}>to see stylish with class Component
    
        
        </button>
        </div>
      {data?<Left/>:" "}
      {count?<Right/>:" "}
        </>
    )
}
 //import Left from "./functional";
// import Right from "./classwith";
export default Clicker;