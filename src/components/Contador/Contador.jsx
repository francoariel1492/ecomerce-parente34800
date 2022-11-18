import { useState } from "react";

import { Button } from "react-bootstrap";

const Contador = ({ initial = 1, stock = 100, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

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
  };
  return (
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
  );
};

export default Contador;
