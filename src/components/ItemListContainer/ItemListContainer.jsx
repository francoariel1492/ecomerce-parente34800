import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { collection,getDocs,getFirestore,query,where,} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "Productos");
    let queryFilter = categoryId
      ? query(queryCollection, where("category", "==", categoryId))
      : queryCollection;
    getDocs(queryFilter)
      .then((resp) =>
        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);
  
  return loading ? (
    <div className="d-flex justify-content-center ">
      <Spinner />
    </div>
  ) : (
    <div className="col text-center ">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
