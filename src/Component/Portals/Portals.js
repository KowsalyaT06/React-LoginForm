import React from "react";
import  ReactDOM  from "react-dom";
import Modal from "./Modal";
import { useState } from "react";
function Portals(){
    const [ModalOpen,setModalOpen]=useState(false)
    console.log('ModalOpen',ModalOpen)
     return (
         <>
         <p>Hii Welcome to this page Click Me to Get a suprise message!!</p>
        <button onClick={()=>setModalOpen(true)}>Open Me</button>
        <Modal isOpen={ModalOpen}
        onClose={()=>setModalOpen(false)}
        message='Hii Welcome to this Page!! Enjoy reading React-Portals '></Modal>
        </>
     )
}
export default Portals