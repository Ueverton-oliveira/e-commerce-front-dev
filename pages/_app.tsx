import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
toast.configure()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>OneBitGames</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
