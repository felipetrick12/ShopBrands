import Head from 'next/head';
import React, { FC } from 'react';

interface Props {
  children: any;
  title?: string;
  pageDescription?: string;
  imageFulllUrl?: string;
}

const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFulllUrl,
}) => {
  return (
    <>
      <Head>{title}</Head>
      <nav></nav>
      <main
        style={{
          margin: `80px auto`,
          maxWidth: '1440px',
          padding: `0px 30p`,
        }}
      >
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

export default ShopLayout;
