import { memo } from "react";

import Item from "../Item/Item";

const ItemList = memo(({ products }) => {
  
  return (
    <div className="d-flex flex-row flex-wrap justify-content-around align-items-stretch ">
      {products.map((obj) => (
        <Item obj={obj} key={obj.id}/>
      ))}
    </div>
  );
})

export default ItemList;
