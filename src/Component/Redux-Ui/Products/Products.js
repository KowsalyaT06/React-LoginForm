import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Action/Action";
import { addProducts } from '../Redux/Action/Action';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log('productssd', products)
    const dispatch = useDispatch();


    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:3006/products')
            .catch((error) => {
                console.log('error', error)
            })
        dispatch(setProducts(response.data))
        console.log('res', response.data);
    }
    let navigate = useNavigate()
    const handleAdd = () => {
         navigate('/Details')

    }
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log('productss', products)

    const render = products.map((product) => {
        const { id, title, Price, Url, Content } = product;

       
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

                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>


                        </div>
                    </div>
                </div>

            </>
        )
    });
    return (
        <>
            {/* <Row>
                <Col xs={6}>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={12} xl={12} xxl={12}>
                        </Col>

                    </Row >
                </Col>
            </Row>
 */}

            {render}
        </>
    )
}
export default Products