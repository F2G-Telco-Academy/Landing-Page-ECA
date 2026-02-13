import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/f2g_logo.png" />
        <link rel="apple-touch-icon" href="/f2g_logo.png" />
        <meta name="theme-color" content="#1e40af" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
