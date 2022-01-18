import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="btn">
      <Link to="/">
        <Button variant="success">Contact List</Button>
      </Link>

      <Link to="/addContact">
        <Button variant="success">Add Contact</Button>
      </Link>
    </div>
  );
};

export default NavBar;
