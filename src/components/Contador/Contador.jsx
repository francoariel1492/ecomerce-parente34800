import InputCount from "../InputCount/InputCount";

import { useState } from "react";

import { Button } from "react-bootstrap";

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
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={restar}>
            -
          </Button>
          <label>{cantidad}</label>
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={sumar}>
            +
          </Button>
          <br />
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={addCantidad}>
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
