import React, { FC } from 'react';
import { ISize } from '../interfaces';
import { Box, Button } from '@mui/material';

interface Props {
  selectSize?: ISize;
  sizes: ISize[];
}
export const SizeSelector: FC<Props> = ({ selectSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => {
        return (
          <Button
            key={size}
            size={'small'}
            color={selectSize === size ? 'primary' : 'info'}
          >
            {size}
          </Button>
        );
      })}
    </Box>
  );
};
