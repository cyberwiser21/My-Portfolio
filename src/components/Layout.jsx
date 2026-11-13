import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SkipLink from './SkipLink';

export default function Layout() {
  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main-content" style={{ flex: 1 }} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
