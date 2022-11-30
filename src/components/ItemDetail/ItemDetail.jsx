import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Counter from "../Contador/Contador";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart, calcTotal, calcItemQuantity } =
    useCartContext();

  const onAdd = (quantity) => {
    addToCart({ ...item, quantity });
    calcTotal(item, quantity);
    calcItemQuantity(quantity);
  };

  return (
    <div className="px-5 mx-5 p-3 m-3 d-flex flex-row justify-content-center align-items-center">
      <div className="ps-5 ms-5">
        <Card className="card" style={{ width: "22rem" }}>
          <Card.Img variant="top" src={`${item.img}`} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>$ {item.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="p-5 m-5">
        <div className="d-flex justify-content-center flex-row lead">
          <Link className="px-3" to="/">
            Inicio
          </Link>
          /
          <Link className="px-3" to={`/category/${item.category}`}>
            {item.category}
          </Link>
          /<p className="px-3"> {item.name}</p>
        </div>
        <h2 className="display-5">{item.name}</h2>
        <h2 className="display-5">${item.price}</h2>
        <p className="lead fs-3">{item.detail}</p>
        <>
          <Counter stock={10} initial={1} onAdd={onAdd} />
        </>
      </div>
    </div>
  );
};

export default ItemDetail;
