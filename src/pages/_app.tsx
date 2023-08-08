import type { AppProps } from 'next/app';
import Head from "next/head";
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps):JSX.Element {
  return<>
    <Head>
      <title>SideProjects</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}></link>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Unbounded:wght@500;800&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>;
}
