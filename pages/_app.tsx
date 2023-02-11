import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import LayoutWrapper from '@/components/LayoutWrapper';
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from 'react'





export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [progress, setProgress] = useState(0);

  let routeName = router.pathname.substr(1);
  if (routeName.length === 0) { 
    routeName = "Home";
  }

  useEffect(() => { 
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    });
  })

  return (
    <>
      <LoadingBar
        color="#DE1D8D"
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      <Head>
        <title>{`${routeName}`}</title>
        <meta
          name="assesment"
          content="This was made for internship assesment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
