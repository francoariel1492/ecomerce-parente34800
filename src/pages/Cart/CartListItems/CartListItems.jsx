import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";

const CartListItems = () => {
  const { cartList, deleteCart, removeFromCart } = useCartContext();
  return (
    <div>
      <ul className="d-flex flex-column justify-content-center align-items-center">
        {cartList.map((product) => (
          <li
            key={product.id}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <Card className="card" style={{ width: "15rem" }}>
              <Card.Img variant="top" src={`${product.img}`} />
            </Card>
            <h5 className="lead fs-4">
              Nombre: {product.name} - Precio: $
              {product.price * product.quantity} - Cantidad: {product.quantity}
              <Button
                className="btn btn-dark btn-outline-light border-dark m-1"
                onClick={() => removeFromCart(product.id)}
              >
                X
              </Button>
            </h5>
          </li>
        ))}
      </ul>
      <Button
        className="btn btn-dark btn-outline-light border-dark"
        onClick={deleteCart}
      >
        Vaciar carrito
      </Button>
    </div>
  );
};

export default CartListItems;
