import Head from "next/head"
import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"
import { Toaster } from "react-hot-toast"

// import "aos/dist/aos.css"
import "@reach/dialog/styles.css"
import "../styles/globals.css"
import "react-multi-carousel/lib/styles.css"
import "aos/dist/aos.css"

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12_000
  return library
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demole</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Welcome to Demole" />
        <meta property="og:description" content="" />
        {/* <meta property="og:image" content="/images/Thumbnail.jpg" /> */}

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSCFQJR');`,
          }}
        ></script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSCFQJR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
      </Head>

      <Toaster position="bottom-right" />

      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  )
}

export default App
