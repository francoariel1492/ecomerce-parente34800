import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [sumTotal, setTotal] = useState(0);
  const [cantidadItems, setQuantity] = useState(0);

  const agregarAlCarrito = (newProductCart) => {
    if(!isInCart(newProductCart.id)){
        setCartList([...cartList, newProductCart]);
      }else{
        let itemSelected = cartList.find(el => el.id === newProductCart.id)
        itemSelected.cantidad += newProductCart.cantidad
      }
  };

  const eliminarDelCarrito = (item)=>{
    setQuantity(cantidadItems - item.cantidad)
    setTotal(sumTotal - (item.cantidad * item.price))
    setCartList(cartList.filter(el => el.id !== item.id))
  }
  
  const calcularTotal = (newProductCart, cantidad) => {
    setTotal(newProductCart.price * cantidad + sumTotal);
  };

  const calcularCantidadItems = (cantidad) => {
    setQuantity(cantidad + cantidadItems);
  };

  const isInCart = (id) => {
    return cartList.some(el => el.id === id)
  }

  const borrarCarrito = () => {
    setCartList([]);
    setTotal(0);
    setQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        sumTotal,
        cantidadItems,
        isInCart,
        calcularTotal,
        calcularCantidadItems,
        agregarAlCarrito,
        eliminarDelCarrito,
        borrarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
