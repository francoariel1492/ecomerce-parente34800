import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import CartContextProvider from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/inicio" />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </HashRouter>
  );
}

export default App;
