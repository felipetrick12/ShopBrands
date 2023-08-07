import { ShopLayout } from '@/components/layouts';
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const address = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Dirección">
      <Typography variant="subtitle2">Dirección</Typography>
      <Grid container sx={{ mt: 2 }} spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label={'Nombre'} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={'Apellido'} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={'Dirección'} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={'Dirección 2 (opcional)'}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={'Código postal'} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={'Ciudad'} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label={'País'} value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Honduras</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
              <MenuItem value={4}>Mexico</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={'Teléfono'} variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display={'flex'} justifyContent={'center'}>
        <Button size="large" color="secondary" className="circular-btn">
          Realizar Pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default address;
