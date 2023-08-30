import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import Loading from '@/components/ui/Loading';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import React from 'react';

const WomenPage = () => {
  const { products, isLoading } = useProducts('products?gender=women');
  return (
    <ShopLayout
      title="Teslo-Shop - Home "
      pageDescription="Encuentra los mejores productos de Teslo-shop"
    >
      <Typography variant="h1" component={'h1'}>
        Mujeres
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Porductos para mujeres
      </Typography>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
