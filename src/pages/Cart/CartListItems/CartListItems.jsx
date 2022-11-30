import { Button } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartListItems = () => {
  const { cartList, deleteCart } = useCartContext();
  return (
    <div>
      <ul className="d-flex flex-column justify-content-center align-items-center">
        {cartList.map((product) => (
          <CartItem product={product} key={product.id} />
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
