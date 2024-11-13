// src/App.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import ProductList from './ProductList'; // Import the product list component

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Store
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container style={{ marginTop: '20px' }}>
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
