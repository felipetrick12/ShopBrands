import { CartList } from '@/components/cart';
import { OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

const CartPage = () => {
  return (
    <ShopLayout
      title="Carrito-3"
      pageDescription="Carrito de compras de la tienda"
    >
      <Typography variant="h1" component={'h1'}>
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className={'summary-card'}>
            <CardContent>
              <Typography variant="h2" component={'h1'}>
                Orden
              </Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color={'secondary'} className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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

export default CartPage;
