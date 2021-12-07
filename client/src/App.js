import React from "react";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import './App.css';
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="nav_bar">
        <Link to="/" className="btn btn-outline-warning nav_button">Home</Link>
        <Link to="/add" className="btn btn-outline-primary mx-5 nav_button">Add Contact</Link>
        <Link to="/contactlist" className="btn btn-outline-primary mx-5 nav_button"> Contact List</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/contactlist" element={<ContactList/>} />
        <Route path="/updatecontact/:id" element={<EditContact/>} />
      </Routes>
    </Router>
  );
}

export default App;
