import { ShopLayout } from '@/components/layouts';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Carrito vació"
      pageDescription="No hay articulos seleccionados"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems={'center'}
        height={'calc(100vh - 200px)'}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <RemoveShoppingCartOutlined />
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography marginLeft={2}>
            No hay ningun item seleccionado
          </Typography>
          <NextLink href={'/'} passHref>
            <Typography variant="h4" color={'secondary'}>
              Regresar
            </Typography>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
