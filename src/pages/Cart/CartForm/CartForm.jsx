import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { useCartContext } from "../../../context/CartContext";

const CartForm = () => {
  const { cartList, deleteCart, calcTotal, showOrder } = useCartContext();
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    emailCheck: "",
  });
  const createOrder = (evt) => {
    evt.preventDefault();
    let orden = {};
    orden.buyer = { dataForm };
    orden.total = calcTotal();
    orden.items = cartList.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      totalProductPrice: product.quantity * product.price 
    }));

    if (dataForm.email === dataForm.emailCheck) {
      const db = getFirestore();
      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, orden)
        .then((resp) => showOrder(resp.id))
        .catch((err) => console.log(err))
        .finally(() => {
          setDataForm({
            name: "",
            phone: "",
            email: "",
            emailCheck: "",
          });
          deleteCart();
        });
    } else {
      notify();
    }
  };

  const notify = () =>
    toast.warn("La direccion de email fue ingresada incorrectamente", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <Form
      onSubmit={createOrder}
      className="d-flex flex-column justify-content-center align-items-center text-center p-2 m-2"
    >
      <h2>Realizar Pago</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu Nombre</Form.Label>
        <Form.Control
          type="text"
          onChange={handleOnChange}
          name="name"
          value={dataForm.name}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu Email</Form.Label>
        <Form.Control
          type="email"
          onChange={handleOnChange}
          name="email"
          value={dataForm.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa email nuevamente</Form.Label>
        <Form.Control
          type="email"
          onChange={handleOnChange}
          name="emailCheck"
          value={dataForm.emailCheck}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese telefono</Form.Label>
        <Form.Control
          type="text"
          onChange={handleOnChange}
          name="phone"
          value={dataForm.phone}
        />
      </Form.Group>
      <Button
        className="btn btn-dark btn-outline-light border-dark p-2 m-2"
        onClick={createOrder}
        onSubmit={notify}
      >
        Generar orden
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default CartForm;
