// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { addProducts } from '../Redux/Action/Action';
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { Button } from "bootstrap";

// const Details = () => {
//     //     const [title,setTitle] = useState('');
//     //     const [Content,setContent] = useState('');


//     //     const postData = {
//     //         title,
//     //         Content,
//     //     };

//     //    const handleSubmit = (e) => {
//     //        e.preventDefault();


//     //    }
//     const Add = useSelector((state) => state.allProducts.products);
//     const dispatch = useDispatch();
   
//     const fetchProducts = async () => {
//         const response = await axios.post('http://localhost:3006/products')
//             .catch((error) => {
//                 console.log('error', error)
//             })
//         dispatch(addProducts(response.data))
//         console.log('responnse', response.data);
//     }
//     useEffect(() => {
//         fetchProducts();
//     }, []);
//     return (
//         <>
//             <h1>PRODUCT DETAILS</h1>
//             {/* <div>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Title</label>
//                 <div>
//                     <input type='text' 
//                     className="border border-gray-500 w-full px-1"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}/>
//                 </div>
//             </div>
//         </form>
//     </div>
//             <div>
//                 <label>Content</label>
//                 <div>
//                     <textarea className="border border-gray-500 px-1 w-full h-28"
//                      value={Content}
//                      onChange={(e) => setContent(e.target.value)}/>
//                 </div>
//             </div>
//             <div>
//                 <button type="submit" className="px-2 py-1 bg-color-red text-black" >POST</button>
//             </div>
//          */}
//         </>
//     )
// }

// export default Details