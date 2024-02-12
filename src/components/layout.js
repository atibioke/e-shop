import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({children, cartCount}) => {
  return (
    <div>
      <Header cartCount={cartCount} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
