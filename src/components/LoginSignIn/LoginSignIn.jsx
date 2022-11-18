//------- Componentes
import CartWidget from "../CartWidget/CartWidget";

//------- Librerias
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginSignIn = () => {
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
        <div>0 - $0.00</div>
        <FaFacebookF />
        <FaInstagram />
      </div>
    </Container>
  );
};

export default LoginSignIn;
