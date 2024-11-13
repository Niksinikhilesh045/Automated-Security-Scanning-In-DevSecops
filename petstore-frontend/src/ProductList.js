import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the icon
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Pet Store Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                {/* Add the Button with ShoppingCartIcon */}
                <Button size="small" color="primary" startIcon={<ShoppingCartIcon />}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
