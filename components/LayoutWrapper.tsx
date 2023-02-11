import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import SectionContainer from './SectionContainer';

function LayoutWrapper({children}:any) {
  return (
    <>
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <Nav />
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  );
}

export default LayoutWrapper