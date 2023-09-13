
//export deafault

// function Fun(){
//     const love={
//         backgroundColor:'pink',
//         textAlign:'center'
//     }
//     return (
//         <>
//         <h1 style={love}>hello bby</h1>
//         </>
//     )
// }
// export default Fun;



// export function Day(){
//     return (
//         <>
//         <h1>this is sukh hubby ritik</h1>
//         </>
//     )
// }
// export function Day2(){
//     return (
//         <>
//         <h1>sukh loveeeee ritikkkk</h1>
//         </>
//     )
// }
import {useState} from "react";
function CountIn(){
    const [data,setdata]=useState(0);
    return(
        <>
        <h1>
            countVal:{data}
        </h1>
        <button onClick={()=>setdata(data+1)}>forIncrement</button>
        
        <button onClick={()=>setdata(data-1)}>Fordectrement</button>

        </>
    )

}
export default CountIn;