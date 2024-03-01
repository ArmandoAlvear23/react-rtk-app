import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from "./cookieSlice";

export const CookieView = () => {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  const dispatch = useDispatch();
  
  return (
    <div>
        <h2>Number of Cookies - {numOfCookies}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cookie</button>
        <button onClick={() => dispatch(restocked(1))}>Restock Cookies</button>
    </div>
  )
}
