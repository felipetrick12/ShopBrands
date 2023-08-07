import Head from 'next/head';
import React, { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: any;
  title: string;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: '90vh',
          }}
        >
          {children}
        </Box>
      </main>
    </>
  );
};
