import ShopLayout from '@/components/layouts/ShopLayout';
import { ProductList } from '@/components/products';
import { initialData } from '@/database/products';
import { Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  return (
    <ShopLayout
      title="Teslo-Shop - Home "
      pageDescription="Encuentra los mejores productos de Teslo-shop"
    >
      <Typography variant="h1" component={'h1'}>
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        todos los productos
      </Typography>

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
}
