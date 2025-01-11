// src/pages/CartPage.js
import React from "react";
import CartPage from "./CartPage";  // Caso você queira usar CartPage.js


const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>R$ {item.price}</p>
            </div>
          ))}
          <button>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
