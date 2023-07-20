import { Box, IconButton, Typography } from '@mui/material';
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
} from '@mui/icons-material';
import React, { FC, useState } from 'react';

interface Props {}

export const ItemCounter: FC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <Box display={'flex'} alignItems={'center'}>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>{count}</Typography>
      <IconButton>
        <AddCircleOutlineOutlined />
      </IconButton>
    </Box>
  );
};
