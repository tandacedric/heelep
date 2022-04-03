import '../css/style.css'
import '../css/form.css'

import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react';
import AppToolbar from '../components/AppToolbar';


import { unstable_createMuiStrictModeTheme, ThemeProvider, createTheme } from '@mui/material/styles';
const theme = unstable_createMuiStrictModeTheme();



function MyApp({ Component, pageProps }) {



  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
    <>
      <Head>
        <title>AJOUT DUN UTILISATEUR</title>
      </Head>
      <AppToolbar />
      <div style={{marginTop:'60px'}}>
        <div className="nav">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/new">
              <a>Add Pet</a>
            </Link>
          </div>
        <div className="grid wrapper">
          <Component {...pageProps} />
        </div>
      </div>



    </>
    </ThemeProvider>
    </React.StrictMode>

  );
}

export default MyApp
