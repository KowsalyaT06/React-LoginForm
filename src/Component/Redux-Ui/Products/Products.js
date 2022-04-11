import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, deleteProducts } from "../Redux/Action/Action";
import {useNavigate } from "react-router-dom";


const Products = () => {
    const products = useSelector((state) => state.allProducts.products);



    console.log('productset', products)
    const dispatch = useDispatch();
    const [deletes, setDelete] = useState(false)


    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);
    console.log('productss', products)

    //for page refresh
    useEffect(() => {
        dispatch(setProducts())

    }, [deletes,dispatch])
    let navigate = useNavigate()




    const handleDelete = (product) => {
       
        dispatch(deleteProducts(product));
        setDelete(true)
    }

    const handleEdit = (product) => {
       
        navigate(`/EditPage/${product}`)
    }


    return (
        <>
            {products && products.map((product) => {
                return (
                    <>
                        <div className="container">


                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card border-primary mb-3">

                                        <div className="card-body">
                                            <div className="image">
                                                <img src={product.Url} className="card-img-top" alt={product.title} />
                                            </div>

                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.Content}</p>
                                            <h3 className="meta price">{product.Price}</h3>

                                            <Button variant="primary" className="me-2" onClick={(e) => handleEdit(e, product.id)}>Edit</Button>

                                            <Button variant="danger" onClick={(e) => handleDelete(e, product.id)}>Delete</Button>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div >




                    </>
                )



            })}

        </>
    )
}
export default Products