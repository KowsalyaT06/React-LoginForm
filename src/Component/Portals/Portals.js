import React from "react";
import  ReactDOM  from "react-dom";
import Modal from "./Modal";
import { useState } from "react";
function Portals(){
    const [ModalOpen,setModalOpen]=useState(false)
    console.log('ModalOpen',ModalOpen)
     return (
         <>
        <button onClick={()=>setModalOpen(true)}>Open</button>
        <Modal isOpen={ModalOpen}
        onClose={()=>setModalOpen(false)}
        message='Hii Welcome '></Modal>
        </>
     )
}
export default Portals