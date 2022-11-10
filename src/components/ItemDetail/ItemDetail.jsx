import React from "react";
import { Card } from "react-bootstrap";
import ContadorHooks from "../ContadorHooks/ContadorHooks";

const ItemDetail = ({ item }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <Card className="card" style={{ width: "22rem" }}>
          <Card.Img variant="top" src={`${item.img[0]}`} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>$ {item.price}</Card.Text>
          </Card.Body>
          <ContadorHooks />
        </Card>
      </div>
      <div className="p-5 m-5">
        <h2 className="display-5">{item.name}</h2>
        <p className="lead fs-3">{item.detail}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
