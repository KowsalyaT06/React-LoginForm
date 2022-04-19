import React,{ useState } from "react";

function Portals(){
    const [ModalOpen,setModalOpen]=useState(false)
    console.log('ModalOpen',ModalOpen)
     return (
         <>
         <p>Hii Welcome to this page Click Me to Get a suprise message!!</p>
        <button onClick={()=>setModalOpen(true)}>Open Me</button>
      
        </>
     )
}
export default Portals