import React from 'react'
import { useSelector } from 'react-redux';

export const CookieView = () => {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  return (
    <div>
        <h2>Number of Cookies - {numOfCookies}</h2>
        <button>Order Cookie</button>
        <button>Restock Cookies</button>
    </div>
  )
}
