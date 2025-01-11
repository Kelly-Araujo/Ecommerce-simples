import React from 'react';
import { useCart } from './context/CartContext';

function Cart() {
  const { cart } = useCart();

  return (
    <div className="Cart">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h4>{item.name}</h4>
              <p>Preço: R${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
