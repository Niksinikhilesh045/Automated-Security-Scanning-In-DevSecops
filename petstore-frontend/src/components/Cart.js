import React from 'react';
import { useCart } from './CartContext';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      {cartItems.map(item => (
        <Card key={item.id}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography>Price: ${item.price}</Typography>
            <Button onClick={() => removeFromCart(item)}>Remove</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
