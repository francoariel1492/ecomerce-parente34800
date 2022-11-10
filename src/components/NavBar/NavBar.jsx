import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Titulo from "../Titulo/Titulo";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar>
      <Container className="d-flex flex-column">
        <Navbar.Brand className="fs-1">
          <Link to='/'>
            <Titulo/>
          </Link>
        </Navbar.Brand>
        <Nav className="p-5 fs-3 align-items-center">
          <Link to='/'>
            <Nav>Inicio</Nav>
          </Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown" className="text-center px-3">
            <Link to='/categoria/camisas'>
              Camisas
            </Link>
              <NavDropdown.Divider />
            <Link to='/categoria/blusas'>
              Blusas
            </Link>
              <NavDropdown.Divider />
            <Link to='/categoria/pantalones'>
              Pantalones
            </Link>
              <NavDropdown.Divider />
            <Link to='/categoria/remeras'>
              Remeras
            </Link>
              <NavDropdown.Divider />
            <Link to='/categoria/vestidos'>
              Vestidos
            </Link>
          </NavDropdown>
          <Link to='/contacto'>
            Contacto
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
