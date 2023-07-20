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
import NextLink from 'next/link';
export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box>
          <NextLink
            href={'/'}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {' '}
            <Typography variant="h1" component={'h1'} color={'primary'}>
              Punto{' '}
            </Typography>
            <Typography variant="h2" marginLeft={1} color={'primary'}>
              | Marcas{' '}
            </Typography>
          </NextLink>
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
            <NextLink href={'/category/men'}>
              <Button>Hombres</Button>
            </NextLink>
            <NextLink href={'/category/women'}>
              <Button>Mujeres</Button>
            </NextLink>
            <NextLink href={'/category/kid'}>
              <Button>Niños</Button>
            </NextLink>
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
          <NextLink href={''}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NextLink>
          <NextLink href={''}>
            <Button style={{ marginLeft: '10px' }}>Menu</Button>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
