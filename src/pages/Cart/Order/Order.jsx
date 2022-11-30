import { Alert } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";

const Order = () => {
  const { orderId } = useCartContext();
  return (
    <Alert variant="success">
      Este es tu numero de orden {orderId}.
      <br />
      Te agradecemos por tu compra nos vemos la proxima
    </Alert>
  );
};

export default Order;
