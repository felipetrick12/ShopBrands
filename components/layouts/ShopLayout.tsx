import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar, SideMenu } from '../ui';

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
      <Head>
        {title}
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFulllUrl && <meta property="og:image" content={imageFulllUrl} />}
      </Head>
      <nav>
        <Navbar />
      </nav>

      <SideMenu />
      <main
        style={{
          margin: `80px auto`,
          maxWidth: '1440px',
          padding: `0px 30px`,
        }}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default ShopLayout;
