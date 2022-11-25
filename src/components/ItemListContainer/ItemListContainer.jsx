//------- Componentes
import ItemList from "../ItemList/ItemList";
//------- Hooks
import { useState, useEffect } from "react";
//------- Librerias
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export let URL = "/productos.json";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      setTimeout(() => {
        fetch(URL)
          .then((res) => res.json())
          .then((res) =>
            setProducts(res.filter((prod) => prod.category === categoriaId))
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, 500);
    } else {
      setTimeout(() => {
        fetch(URL)
          .then((res) => res.json())
          .then((resp) => setProducts(resp))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, 500);
    }
  }, [categoriaId]);

  return loading ? (
    <div className="d-flex justify-content-center "><Spinner/></div>
  ) : (
    <div className="col text-center">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
