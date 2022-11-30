import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import CartListItems from "./CartListItems/CartListItems";
import CartForm from "./CartForm/CartForm";
import Order from "./Order/Order";

import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartList, order } = useCartContext();

  return (
    <>
      {order ? (
        <div className="text-center">
          <Order />
        </div>
      ) : (
        <>
          {cartList.length !== 0 ? (
            <div className="text-center">
              <h1>Tus Ordenes</h1>
              <CartListItems />
              <CartForm />
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
      )}
    </>
  );
};

export default Cart;
