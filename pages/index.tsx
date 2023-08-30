import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import Loading from '@/components/ui/Loading';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
//Hook to Call data from cache

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts('products');

  return (
    <ShopLayout
      title="Teslo-Shop - Home "
      pageDescription="Encuentra los mejores productos de Teslo-shop"
    >
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

export default HomePage;
