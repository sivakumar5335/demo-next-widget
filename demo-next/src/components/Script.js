import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://js.zohostatic.com/creator/widgets/version/1.0/widgetsdk-min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}