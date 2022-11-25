import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, borrarCarrito, eliminarDelCarrito } = useCartContext();

  return (
    <>
      {cartList != "" ? (
        <div className="text-center">
          <h1>Tus Ordenes</h1>
          <ul className="d-flex flex-column justify-content-center align-items-center">
            {cartList.map((product) => (
              <li
                key={product.id}
                className="d-flex flex-row justify-content-center align-items-center"
              >
                <Card className="card" style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={`${product.img[0]}`} />
                </Card>
                <h5 className="lead fs-4">
                  Nombre: {product.name} - Precio: $
                  {product.price * product.cantidad} - Cantidad:{" "}
                  {product.cantidad}
                  <Button
                    className="btn btn-dark btn-outline-light border-dark m-1"
                    onClick={() => eliminarDelCarrito(product)}
                  >
                    X
                  </Button>
                </h5>
              </li>
            ))}
          </ul>
          <Button
            className="btn btn-dark btn-outline-light border-dark"
            onClick={borrarCarrito}
          >
            Vaciar carrito
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <h2>No hay items en el carrito</h2>
          <Link to="/">
            <Button className="btn btn-dark btn-outline-light border-dark m-1">
              Inicio
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
