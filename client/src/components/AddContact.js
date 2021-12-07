import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

  const addContact = () => {
    var url = "http://localhost:1234/savecontact";
    var data = {
      fname: name,
      mobile: mobile,
      email: email,
    };

    axios.post(url, data).then((response) => {
      toast.success(name + " Added Successfully");
      setName("");
      setMobile("");
      setEmail("");
    });
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4 offset-4">
          <div className="card shadow">
            <div className="card-header text-center bg-dark bg-gradient text-white">
              <h3>Add Contact</h3>
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
                <button
                  className="btn btn-outline-primary shadow"
                  onClick={addContact}
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
