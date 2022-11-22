import { createContext, useState, useContext } from "react";
import Item from "../components/Item/Item";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);
  const [sumTotal,setTotal] = useState(0)
  const [cantidadItems,setQuantity] = useState(0)

  const agregarAlCarrito = (newProductCart) => {
    setCartList([...cartList, newProductCart]);
  };

  const calcularTotal = (newProductCart,cantidad) =>{
    setTotal((newProductCart.price * cantidad) + sumTotal)
  };

  const calcularCantidadItems = (cantidad) =>{
    setQuantity(cantidad + cantidadItems)
  }



  const borrarCarrito = () => {
    setCartList([]);
    setTotal(0)
  };
  
  return (
    <CartContext.Provider
      value={{
        cartList,
        sumTotal,
        cantidadItems,
        calcularTotal,
        calcularCantidadItems,
        agregarAlCarrito,
        borrarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
