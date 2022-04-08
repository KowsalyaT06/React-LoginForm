import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, deleteProducts } from "../Redux/Action/Action";
import { Navigate, useNavigate } from "react-router-dom";


const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    const productsadd = useSelector((state) => state.AddProducts);
    console.log('productadddd', productsadd)

    console.log('productset', products)
    const dispatch = useDispatch();
    const [deletes, setDelete] = useState(false)


    useEffect(() => {
        dispatch(setProducts());
    }, []);
    console.log('productss', products)

    //for page refresh
    useEffect(() => {
        dispatch(setProducts())

    }, [deletes])
    let navigate = useNavigate()




    const handleDelete = (e, product) => {
        e.preventDefault()
        dispatch(deleteProducts(product));
        setDelete(true)
    }

    const handleEdit = (e, product) => {
        e.preventDefault()
        navigate(`/EditPage/${product}`)
    }

    const render = products.map((product) => {
        const { id, title, Price, Url, Content } = product;
        return (
            <>
                <div className="container">


                    <div className="row">
                        <div className="col-lg-3">

                            {/* // <div className="row">
                    //     <div className="col-3"> */}
                            {/* <div className="col-md-6 col-xl-4"> */}
                            <div className="card border-primary mb-3">

                                <div className="card-body">
                                    <div className="image">
                                        <img src={Url} className="card-img-top" alt={title} />
                                    </div>

                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{Content}</p>
                                    <h3 className="meta price">{Price}</h3>

                                    <Button variant="primary" className="me-2" onClick={(e) => handleEdit(e, product.id)}>Edit</Button>

                                    <Button variant="danger" onClick={(e) => handleDelete(e, product.id)}>Delete</Button>

                                </div>

                            </div>
                        </div>
                    </div>

                </div >




            </>
        )
    });
    return (
        <>


            {render}
        </>
    )
}
export default Products