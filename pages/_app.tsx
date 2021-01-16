import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Cubo Games</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;
