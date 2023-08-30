import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import Loading from '@/components/ui/Loading';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import React from 'react';

const KidPage = () => {
  const { products, isLoading } = useProducts('products?gender=kid');
  return (
    <ShopLayout title="Nińos" pageDescription="Productos para nińos">
      <Typography variant="h1" component={'h1'}>
        Tienda
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
