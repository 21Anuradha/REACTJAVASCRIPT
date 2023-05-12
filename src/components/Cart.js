import React, { useState } from 'react';

const Cart = ({ cart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Cart:', cart);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((game) => (
            <div key={game.id}>
              <h3>{game.name}</h3>
              <p>Price: {game.price}</p>
            </div>
          ))}
          <p>Total Price: {totalPrice}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <button type="submit">Checkout</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
