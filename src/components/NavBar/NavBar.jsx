import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Titulo from "../Titulo/Titulo";

const NavBar = () => {
  
  return (
    <Navbar>
      <Container className="d-flex flex-column">
        <Navbar.Brand className="fs-1">
          <Link to="/">
            <Titulo />
          </Link>
        </Navbar.Brand>
        <Nav className="p-5 fs-3 align-items-center">
          <Link to="/">
            <Nav>Inicio</Nav>
          </Link>
          <NavDropdown
            title="Productos"
            id="basic-nav-dropdown"
            className="text-center px-3"
          >
            <Link to="/category/camisas">Camisas</Link>
            <NavDropdown.Divider />
            <Link to="/category/blusas">Blusas</Link>
            <NavDropdown.Divider />
            <Link to="/category/pantalones">Pantalones</Link>
            <NavDropdown.Divider />
            <Link to="/category/remeras">Remeras</Link>
            <NavDropdown.Divider />
            <Link to="/category/vestidos">Vestidos</Link>
          </NavDropdown>
          <Link to="/contacto">Contacto</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
