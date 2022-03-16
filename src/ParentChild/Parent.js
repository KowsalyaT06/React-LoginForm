import React,{useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Child from './Child';
function Parent(){
   const[input,setInput] = useState('Red');

 
 
    return(
        <div>
             <p>{input}</p>
       <Child changeColor={input => setInput(input)} />
      
       </div>
    );


    };
    export default Parent