import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlined from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box>
          <a
            href={'/'}
            style={{
              textDecoration: 'none',
              color: 'red',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {' '}
            <Typography variant="h1">Punto </Typography>
            <Typography variant="h2" marginLeft={1}>
              | Marcas{' '}
            </Typography>
          </a>
        </Box>

        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
            flex: 10,
          }}
        >
          <Box display={'flex'} justifyContent={'center'} gap={1}>
            <a href={'/category/men'}>
              <Button>Hombres</Button>
            </a>
            <a href={'/category/women'}>
              <Button>Mujeres</Button>
            </a>
            <a href={'/category/kid'}>
              <Button>Niños</Button>
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <a href={''}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </a>
          <a href={''}>
            <Button style={{ marginLeft: '10px' }}>Menu</Button>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
