import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ obj }) => {
  return (
    <Link to={`/detail/${obj.id}`} className="p-3 ">
      <Card className="card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src={`${obj.img[0]}`} />
        <Card.Body>
          <Card.Title>{obj.name}</Card.Title>
          <Card.Text>$ {obj.price}</Card.Text>
        </Card.Body>
        <Card.Footer>15% OFF efect y transf</Card.Footer>
      </Card>
    </Link>
  );
};

export default Item;
