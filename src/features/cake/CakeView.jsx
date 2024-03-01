import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const [numToOrder, setNumToOrder] = useState(1);
  const [numToRestock, setNumToRestock] = useState(1); 

  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <input 
            type="number"
            value={numToOrder}
            onChange={e => setNumToOrder(parseInt(e.target.value))} 
        />
        <button onClick={()=> dispatch(ordered(numToOrder))}>Order cake</button>
        <br />
        <input 
            type="number"
            value={numToRestock}
            onChange={e => setNumToRestock(parseInt(e.target.value))} 
        />
        <button onClick={() => dispatch(restocked(numToRestock))}>Restock cakes</button>
    </div>
  )
}
