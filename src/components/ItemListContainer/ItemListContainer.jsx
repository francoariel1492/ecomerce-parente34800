import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent";

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
    " "
  ) : (
    <div className="row text-center">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {products.map((obj) => (
          <CardComponent
            obj={obj}
            key={obj.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
