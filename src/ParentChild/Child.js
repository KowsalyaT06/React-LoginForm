import React from "react";
function Child(props) {
    
   
return(
    <div>
   <h1>Child</h1>
    <button onClick={() => props.changeColor('Blue')}>Change Color</button>
    </div>
);
}
export default Child;