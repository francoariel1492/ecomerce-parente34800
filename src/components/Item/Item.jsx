import { memo } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Item.css"

const Item = memo(({ obj }) => {
  
  return (
    <Link to={`/detail/${obj.id}`} className="p-3">
      <Card className="card ">
        <Card.Img className="cardImg " variant="top" src={`${obj.img}`}/>
        <Card.Body>
          <Card.Title>{obj.name}</Card.Title>
          <Card.Text>$ {obj.price}</Card.Text>
        </Card.Body>
        <Card.Footer>15% OFF efect y transf</Card.Footer>
      </Card>
    </Link>
  );
});

export default Item;
