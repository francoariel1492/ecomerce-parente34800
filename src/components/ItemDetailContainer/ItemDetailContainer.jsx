import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { URL } from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = () => {
  const [item,setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();


  useEffect(() => {
    if(productId){
      setTimeout(() =>{
        fetch(URL)
        .then((res) => res.json())
        .then((res) =>
        setItem(res.find((prod) => prod.id === parseInt(productId)))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        },500);
    }else{
      setTimeout(() =>{
        fetch(URL)
        .then((res) => res.json())
        .then((res) =>
        setItem(res.find((prod) => prod.id === parseInt(productId)))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        },500);
  }; [productId]})
  return (
    loading ? (
      " "
    ) :   
    <div className='text-center'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer