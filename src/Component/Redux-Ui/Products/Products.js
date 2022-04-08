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
    const render = products.map((product) => {
        const { id, title, Price, Url, Content } = product;

        const handleDelete = (e, product) => {
            e.preventDefault()
            dispatch(deleteProducts(product));
            setDelete(true)
        }
       
        const handleEdit = (e, product) => {
            e.preventDefault()
            navigate(`/EditPage/${product}`)
        }
        return (
            <>


                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">

                        <div className="cards" key={id}>

                            <div class="card-body">
                                <div className="image">
                                    <img src={Url} class="card-img-top" alt={title} />
                                </div>

                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{Content}</p>
                                <h3 className="meta price">{Price}</h3>
                            </div>


                        </div>
                    </div>
                </div>
                <Button variant="primary" onClick={(e) => handleEdit(e, product.id)}>Edit</Button>
                <Button variant="danger" onClick={(e) => handleDelete(e, product.id)}>Delete</Button>
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