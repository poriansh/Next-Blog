import Header from '@/components/Header';
import React from 'react'

function layoutSlug({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default layoutSlug
