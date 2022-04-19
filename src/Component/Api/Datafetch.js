import React, { useReducer, useEffect,} from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Action = {
  Get: "get",
  Delete: "delete",
  Edit: "edit",
  Add: "add",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Action.Get:
      return [...state, ...action.payload];

    case Action.Delete:
      return state.filter((remove) => remove.id !== action.payload);

      case Action.Add:
        return [...action.payload];

    default:
      return state;
  }
};
const Datafetch = () => {
  const [states, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:3006/users")
      .then((response) => {
        dispatch({ type: Action.Get, payload: response.data });
      })
      .catch((error) => {
        toast("Error While Loading");
        console.log(error);
      });
  }, []);

  const handleDelete = (e, user) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3006/users/${user}`)
      .then(() => {
        dispatch({ type: Action.Delete, payload: user });
      })
      .catch((error) => {
        toast.error("Request Failed");
        console.log(error);
      });
  };
  const handleEdit = (e, user) => {
    e.preventDefault();
    navigate(`/Edit/${user}`);
  };

  let navigate = useNavigate();
  const handleMove = () => {
    navigate("/Post");
  };
  return (
    <>
      <ToastContainer></ToastContainer>

      <div className="add">
        <Button variant="primary" size="lg" onClick={handleMove}>
          ADD USER
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {states.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.Lastname}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => handleDelete(e, user.id)}
                  >
                    DELETE
                  </Button>
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={(e) => handleEdit(e, user.id)}
                  >
                    EDIT
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Datafetch;
