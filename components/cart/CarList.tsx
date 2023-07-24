import { initialData } from '@/database/products';
import { Typography } from '@mui/material';
import React from 'react';

const productsCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CarList = () => {
  return (
    <div>
      {productsCart.map((product) => {
        return <Typography key={product.slug}>{product.slug}</Typography>;
      })}
    </div>
  );
};
