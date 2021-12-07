import React, { useEffect, useState } from 'react';
import { GrContactInfo } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const ContactList = () => {

    const [contact, setContact] = useState([]);

    const getContact = () => {
        var url = "http://localhost:1234/contactlist";

        axios.get(url).then((response)=>{
            setContact(response.data);
        })
    }

    useEffect(()=>{
        getContact();
        // console.log(contact);
    },[true]);


    const deleteContact = (id, name)=>{
        var url = "http://localhost:1234/deletecontact";
        var input = {"id":id}
        axios.post(url, input).then(response=>{
            toast.error(name + " Deleted Successfully");
            getContact();
        })
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="card shadow">
                        <div className="card-header text-center  bg-warning bg-gradient">
                            <h3><GrContactInfo className="mx-4" />Contact List</h3>
                        </div>
                        <ToastContainer position="top-center" autoClose={5000} />
                        <div className="card-body  main_card">
                            <div className="row">
                                {
                                    contact.map((list, index)=>{
                                        const {id, name, mobile, email} = list;
                                        return(
                                            <div key={id} className="col-lg-3">
                                            <div className="p-3 contact_card">
                                    <div className="card shadow rounded card_list">
                                        <img src="images/1.png" alt="" className="card-img-top shadow" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{name}</h5>
                                        </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <span><b>Mobile : </b></span>
                                                    <span>{mobile}</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <span><b>Email : </b></span>
                                                    <span>{email}</span>
                                                </li>
                                            </ul>
                                            <div className="card-footer d-flex justify-content-evenly edit_delete">
                                                <Link to={`/updatecontact/${id}`} className="mt-2 btn btn-outline-primary btn-sm edit_contact">
                                                    <FaUserEdit/> Edit
                                                </Link>
                                                <button onClick={deleteContact.bind(this, id, name)} className="mt-2 btn btn-outline-danger btn-sm">
                                                    <RiDeleteBin4Fill /> Delete
                                                </button>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactList;
