import { useState } from "react";
import { Button } from "react-bootstrap";

import InputCount from "../InputCount/InputCount";

const Counter = ({ initial = 1, stock = 100, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [bool, setBool] = useState(true);
  const add = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addquantity = () => {
    onAdd(quantity);
    setBool(false);
  };
  
  return (
    <div>
      {bool === true ? (
        <div>
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={subtract}>
            -
          </Button>
          <label>{quantity}</label>
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={add}>
            +
          </Button>
          <br />
          <Button className="btn btn-dark btn-outline-light border-dark m-1" onClick={addquantity}>
            Agregar al carrito
          </Button>
        </div>
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Counter;
