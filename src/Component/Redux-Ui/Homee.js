import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Homee = () => {
  return (
    <>
      <div className="home">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://content.sintelly.com/articles/pc92b30WlWHj13lUpfBK/content/how-does-online-shopping-affect-the-local-economy-0-@sintelly.jpeg"
            className="card-img"
            alt="bg"
            height="600px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0" style={{ color: 'yellow' }}>
                SUMMER OFFERS:)
              </h5>
              <p className="card-text" style={{ color: 'yellow' }}>
                CHECK OUT THE OFFERS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">OFFER PRODUCTS</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homee;
