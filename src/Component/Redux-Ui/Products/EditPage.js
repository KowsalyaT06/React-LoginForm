import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { editProducts } from "../Redux/Action/Action";
const EditPage = () => {
  const [send, setSend] = useState({});
  const [add, setAdd] = useState({
    title: send.title,
    Price: send.Price,
    Url: send.Url,
    Content: send.Content,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  let { id } = useParams();
  console.log(id, "param");
  useEffect(() => {
    axios
      .get(`http://localhost:3006/products/${id}`)
      .then((response) => {
        console.log(response, "hii");
        setSend(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (send) {
      setAdd(send);
    }
  }, [send]);

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProducts(add, id));

    navigate("/Nav");
  };
  return (
    <>
      <h1>EDIT PRODUCT DETAILS</h1>
      <div>
        <form>
          <div className="style">
            <input
              placeholder="Add title"
              name="title"
              value={add.title}
              onChange={handleChange}
            />
            <br></br>

            <input
              placeholder="Add price"
              name="Price"
              value={add.Price}
              onChange={handleChange}
            />
            <br></br>

            <input
              placeholder="Add url"
              name="Url"
              value={add.Url}
              onChange={handleChange}
            />
            <br></br>

            <input
              placeholder="Add content"
              name="Content"
              value={add.Content}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="btnnn">
          <Button variant="success" size="lg" onClick={handleSubmit}>
            UPDATE
          </Button>
        </div>
      </div>
    </>
  );
};
export default EditPage;
