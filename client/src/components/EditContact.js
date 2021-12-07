import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const update = () => {
    var data = {
      name : name,
      mobile:mobile,
      email:email,
      id:id
    }
    var url = "http://localhost:1234/updatecontact";

    axios.post(url,data).then(response => {
      toast.success(name + " Updated Successfully");
    })
  };

  const getData = () => {
    var input = {id:id};
    var url = "http://localhost:1234/getcontact";
    axios.post(url, input).then((response)=>{
      setName(response.data[0].name);
      setMobile(response.data[0].mobile);
      setEmail(response.data[0].email);
    })
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4 offset-4">
          <div className="card shadow">
            <div className="card-header text-center bg-warning bg-gradient text-white">
              <h3>Edit Contact</h3>
            </div>
            <div className="card-body">
              <ToastContainer position="top-center" autoClose={5000} />
              <div className="mb-4 input-group">
                <label className="input-group-text bg-dark text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-4 input-group">
                <label className="input-group-text bg-dark text-white">
                  Mobile No.
                </label>
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  className="form-control"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </div>
              <div className="mb-4 input-group">
                <label className="input-group-text bg-dark text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mt-3 text-center d-grid">
                <Link to="/contactlist"
                  className="btn btn-outline-warning shadow"
                  onClick={update}
                >
                  Update Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
