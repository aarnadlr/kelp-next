/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link
            rel='stylesheet'
            // 👇 USE FOR `NOW` DEPLOYMENT:
            href='/_next/static/style.css'
            // 👇 USE FOR STATIC DEPLOYMENT:
            // href='/lightyear/kelp-helix-5/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
