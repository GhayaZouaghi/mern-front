import React from "react";

import Delete from "../../assets/Delete btn.jpg";
import Edit from "../../assets/Edit btn.jpg";
import Avatar from "../../assets/avatar.png";
import { Card } from "react-bootstrap";
import "./ContactCard.css";

const contactCard = () => {
  return (
    <div>
      <Card border="dark" style={{ width: "18rem" }}>
        <img src={Avatar} alt="Avatar" />
        <Card.Body>
          <Card.Title>Contact Card</Card.Title>
          <Card.Text>
            <h2>name</h2>
            <h2>email</h2>
            <h2>phone</h2>
          </Card.Text>
          <div className="btn">
            <img src={Delete} alt="delete button" />
            <img src={Edit} alt="edit button" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default contactCard;
