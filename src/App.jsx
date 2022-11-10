import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import LoginSignIn from "./components/LoginSignIn/LoginSignIn";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Bienvenida />
      <LoginSignIn />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/inicio" />
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/categoria" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
