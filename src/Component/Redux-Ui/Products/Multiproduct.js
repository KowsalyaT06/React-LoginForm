import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setMultiProducts,
  deleteMultiProducts,
} from "../Redux/Action/MultiAction";
import { useNavigate } from "react-router-dom";

const Multiproductss = () => {
  const Multiproduct = useSelector(
    (state) => state.multiProducts.Multiproducts
  );
  console.log("store", Multiproduct);

  const dispatch = useDispatch();
  const [deletes, setDelete] = useState(false);

  useEffect(() => {
    dispatch(setMultiProducts());
  }, [dispatch]);
  console.log("effect", Multiproduct);

  //for page refresh
  useEffect(() => {
    dispatch(setMultiProducts());
  }, [deletes]);
  let navigate = useNavigate();

  const handleDelete = (e, productset) => {
    e.preventDefault();
    dispatch(deleteMultiProducts(productset));
    setDelete(true);
  };

  const handleEdit = (e, productset) => {
    e.preventDefault();
    navigate(`/Multiedit/${productset}`);
  };

  const handladd = () => {
    navigate("/Multiadd");
  };
  const renderss = Multiproduct.map((productset) => {
    const { title, Price, Url, Content } = productset;
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

                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={(e) => handleEdit(e, productset.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={(e) => handleDelete(e, productset.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 " href="#">
            COLLECTIONS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="Button">
              <a
                href=""
                className="btn btn-outline-dark ms-2"
                onClick={handladd}
              >
                ADD PRODUCT
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1>ALL PRODUCTS</h1>
      {renderss}
    </>
  );
};
export default Multiproductss;
