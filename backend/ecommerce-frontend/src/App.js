import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from './context/CartContext';
import Cart from './';  // ou './Cart.js'


function App() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // Fetch products when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;
