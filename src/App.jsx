//------- Componentes
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import CartContextProvider from "./context/CartContext";
//------- CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//------- Librerias
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/inicio" />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
