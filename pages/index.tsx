import ShopLayout from '@/components/layouts/ShopLayout';
import { Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  return (
    <ShopLayout title="Hola" pageDescription="COmo estas">
      <Typography variant="h1" component={'h1'}>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Tienda
      </Typography>
    </ShopLayout>
  );
}
