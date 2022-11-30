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
        <Button className="btn btn-light btn-outline-dark m-2">
          Seguir comprando
        </Button>
      </Link>
    </>
  );
};

export default InputCount;
