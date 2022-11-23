//------- Componentes
import CartWidget from "../CartWidget/CartWidget";

//------- Librerias
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const LoginSignIn = () => {
  
  const { sumTotal,cantidadItems } = useCartContext();
  return (
    <Container className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className="mx-2">Crear Cuenta</div>
        <div>Iniciar Sesion</div>
      </div>
      <div className="d-flex align-items-center">
        <FaSearch />
        <Link to="/cart">
          <CartWidget />
        </Link>
        <div className="px-2">{cantidadItems}  -  ${sumTotal}</div>
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
