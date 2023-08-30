import { IProduct } from '@/components/interfaces';
import { ShopLayout } from '@/components/layouts';
import { ProductSlideShow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui';
import { dbProducts } from '@/database';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';

interface Props {
  product: IProduct;
}
const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <ShopLayout title="ABC" pageDescription="hola">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant="h1" component={'h1'}>
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component={'h2'}>
              {`${product.price}`}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SizeSelector selectSize="L" sizes={product.sizes} />
            </Box>
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>
            <Chip label="No hay disponibles" color="error" variant="outlined" />
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
//* SSR it works but we can improve using getStaticProps
// import { GetServerSideProps } from 'next';
// import { dbProducts } from '@/database';

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as { slug: string };

//   const product = await dbProducts.getProductsBySlug(slug);

//   if (!product) {
//     return {
//       props: {
//         redirection: '/',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       product,
//     },
//   };
// };

//\
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlug = await dbProducts.getAllProductsBySlug();

  return {
    paths: productSlug.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const product = await dbProducts.getProductsBySlug(slug);
  if (!slug || !product) {
    return {
      props: {
        redirection: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};

export default ProductPage;
