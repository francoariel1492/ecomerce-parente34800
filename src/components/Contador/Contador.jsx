import { useState } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/cart">
        <Button className="btn btn-light btn-outline-dark m-2">
          Ir al Cart
        </Button>
      </Link>
      <Link to="/">
        <Button className="btn btn-light btn-outline-dark m-2">Seguir comprando</Button>
      </Link>
    </>
  );
};

const Contador = ({ initial = 1, stock = 100, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [bool, setBool] = useState(true);
  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const addCantidad = () => {
    onAdd(cantidad);
    setBool(false);
  };
  return (
    <div>
      {bool === true ? (
        <div>
          <Button className="btn bg-dark border-white" onClick={restar}>
            -
          </Button>
          <label>{cantidad}</label>
          <Button className="btn bg-dark border-white" onClick={sumar}>
            +
          </Button>
          <br />
          <Button className="btn bg-dark border-white" onClick={addCantidad}>
            Agregar al carrito
          </Button>
        </div>
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Contador;
