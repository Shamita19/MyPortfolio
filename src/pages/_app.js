import '../app/globals.css'; // Ensure the correct path to your global styles
import Layout from '../components/Layout'; // Ensure correct path to Layout
import React, { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; // or a loading indicator
    }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
