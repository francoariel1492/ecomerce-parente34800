import { useState } from "react"
import { Button } from "react-bootstrap";

const ContadorHooks = () => {

    const [contador,setContador] = useState(0);
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

  return (
    <div>
        <Button className="mx-2 bg-dark" onClick={sumar}>+</Button>
        <Button className="mx-2 bg-dark" onClick={restar}>-</Button>
        <h4>{contador}</h4>
        <Button className="bg-dark m-2">Agregar al Carrito</Button>
    </div>
  )
}

export default ContadorHooks