import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [dispatch] = useReducer("");
  const [data, setData] = useState({ firstname: "", Lastname: "", email: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006/users", data)
      .then((response) => {
        dispatch({ type: data, payload: response.data });
        console.log("add", data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/Api");
  };
  return (
    <>
      <form>
        <div className="style">
          <input
            placeholder="Add First_Name"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <br></br>

          <input
            placeholder="Add Last_Name"
            name="Lastname"
            value={data.Lastname}
            onChange={handleChange}
          />
          <br></br>

          <input
            placeholder="Add Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="btn">
        <Button variant="success" size="lg" onClick={handleSubmit}>
          ADD
        </Button>
      </div>
    </>
  );
};
export default Post;
