import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={'center'}
      height={'calc(100vh - 200px)'}
      sx={{
        flexDirection: { xs: 'column', sm: 'column' },
      }}
    >
      <Typography
        sx={{ mb: 3 }}
        variant="h1"
        component={'h1'}
        fontSize={20}
        fontWeight={200}
      >
        Cargando..
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};

export default Loading;
