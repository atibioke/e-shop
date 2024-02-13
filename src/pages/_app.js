import Layout from '@/components/layout';
import '@/styles/globals.css';
import React, {useEffect, useState, createContext} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CountContext = createContext();

export default function App({Component, pageProps}) {
  const [cartCount, setCartCount] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) || null;
    if (!items || !items?.length) {
      setCartCount(0);
      return;
    } else {
      setCartCount(items?.length);
    }
  }, [render]);

  return (
    <CountContext.Provider value={{setRender: setRender, render: render}}>
      <Layout cartCount={cartCount}>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </CountContext.Provider>
  );
}
