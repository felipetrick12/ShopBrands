import { AuthLayout } from '@/components/layouts';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

const LgoinPage = () => {
  return (
    <AuthLayout title="Ingresar">
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component={'h1'}>
              Iniciar Sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant={'filled'} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type=" password"
              variant={'filled'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className={'circular-btn'}
              fullWidth
              size="large"
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent={'end'}>
            <NextLink href={'/auth/register'} passHref>
              No tienes una cuenta?
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LgoinPage;
