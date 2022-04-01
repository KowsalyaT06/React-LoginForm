import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { pro } from './Datafetch'

// const ApiModal = (props) => {
//     const [add, setAdd] = useState({
//         id: props.users.id,
//         firstname: props.users.firstname,
//         Lastname: props.users.Lastname,
//         email: props.users.email
//     })
//     // const Access = useContext(pro);

//     useEffect(() => {
//         if (props.users)
//             setAdd(props.users)
//         console.log('showww', props.users)
//     }, [props.users])
//     const handleChange = (e) => {
//         setAdd({ ...add, [e.target.name]: e.target.value })
//     }
//     const handleput = () => {
//         props.sending(add)
//         console.log('finall', add)
//     }
//     return (
//         // <Modal.Dialog>
//         //     <Modal show={Access.show} onHide={props.close}>
//         //         <Modal.Header closeButton>
//         //             <Modal.Title>User Details</Modal.Title>
//         //         </Modal.Header>




//         //         <Modal.Footer>


//         //         </Modal.Footer>
//         //     </Modal>
//         // </Modal.Dialog>
//     )
// }
// export default ApiModal;