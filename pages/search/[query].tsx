import { IProduct } from '@/components/interfaces';
import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import Loading from '@/components/ui/Loading';
import { dbProducts } from '@/database';
import { useProducts } from '@/hooks';
import { Box, Typography } from '@mui/material';
import { NextPage, GetServerSideProps } from 'next';
import React from 'react';

//Hook to Call data from cache

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title="Teslo-Shop - Search "
      pageDescription="Encuentra los mejores productos de Teslo-shop"
    >
      <Typography variant="h1" component={'h1'}>
        Buscar producto
      </Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }}>
          Busqueda : {query}
        </Typography>
      ) : (
        <Box display={'flex'}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto
          </Typography>{' '}
          <Typography variant="h2" sx={{ ml: 1 }} color={'secondary'}>
            {query}
          </Typography>
        </Box>
      )}
      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query } = params as { query: string };

  if (!query || query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);

  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: { products, foundProducts, query },
  };
};

export default SearchPage;
