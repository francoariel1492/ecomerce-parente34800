import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = doc(dbFirestore, "Productos", productId);
    if (productId) {
      getDoc(queryCollection)
        .then((doc) => setItem({ id: doc.id, ...doc.data() }))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDoc(queryCollection)
        .then((doc) => setItem({ id: doc.id, ...doc.data() }))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    [productId];
  });

  return loading ? (
    <div className="d-flex justify-content-center ">
      <Spinner />
    </div>
  ) : (
    <div className="text-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
