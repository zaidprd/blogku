import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Kode favicon yang sudah diperbarui */}
        <link rel="icon" type="image/png" href="/favicon/favicon-jasa.png" />
        
        {/* Anda bisa menambahkan kode untuk ukuran lain jika ada */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-jasa.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-jasa.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-jasa.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}