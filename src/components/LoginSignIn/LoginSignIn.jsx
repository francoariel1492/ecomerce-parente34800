import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import CartWidget from "../CartWidget/CartWidget";

const LoginSignIn = () => {
  
  const { calcTotal, calcItemQuantity } = useCartContext();

  return (
    <Container className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className="mx-2">Crear Cuenta</div>
        <div>Iniciar Sesion</div>
      </div>
      <div className="d-flex align-items-center">
        <FaSearch />
        {calcItemQuantity() !== 0 && (
          <>
            <Link to="/cart">
              <CartWidget />
            </Link>
            <div className="px-2">
              {calcItemQuantity()} - ${calcTotal()}
            </div>
          </>
        )}
        <a href="https://facebook.com/morowa.indumentaria">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/morowa.indumentaria">
          <FaInstagram />
        </a>
      </div>
    </Container>
  );
};

export default LoginSignIn;
