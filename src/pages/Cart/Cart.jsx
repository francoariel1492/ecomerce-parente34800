import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, borrarCarrito } = useCartContext();

  return (
    <div className="text-center">
      <h1>Tus Ordenes</h1>
      <ul>
        {cartList.map((product) => (
          <li
            key={product.id}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <Card className="card" style={{ width: "15rem" }}>
              <Card.Img variant="top" src={`${product.img[0]}`} />
            </Card>
            <h5 className="lead fs-4">
              Nombre: {product.name} - Precio: ${product.price} - Cantidad:{" "}
              {product.cantidad}
            </h5>
          </li>
        ))}
      </ul>
      <Button className="bg-dark border-white" onClick={borrarCarrito}>
        Vaciar carrito
      </Button>
    </div>
  );
};

export default Cart;
