import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Div100vh from "react-div-100vh"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import anime from "animejs/lib/anime.es.js"
import "../styles/main.scss"

const App = ({ data }) => {
  const { businessDetails } = data.site.siteMetadata

  useEffect(() => {
    anime({
      targets: "#blob",
      d: [
        {
          value:
            "M403.468 48.5735C147.403 115.889 52.9434 301.562 37.8362 430.589C21.2178 643.682 257.389 701.27 292.89 812.934C328.392 924.599 -59.23 1393.04 273.127 1500.74C605.483 1608.45 1234.09 1466.55 1159.92 1202.62C1036.61 763.773 1492.35 582.573 1245.39 333.422C1156.06 243.293 1112.82 325.952 873.935 263.26C739.745 228.044 659.534 -18.7419 403.468 48.5735Z"
        },
        {
          value:
            "M395.415 158.805C147.432 291.539 54.5947 432.814 37.6309 554.52C18.9699 755.521 420.199 721.826 460.064 827.154C499.929 932.482 298.346 1053.18 543.728 1321.14C726.38 1520.6 1127.47 1607.82 1376.93 1470.04C1691.97 1296.04 1552.24 845.197 1274.93 610.185C1174.62 525.17 1260.94 114.135 992.696 55.0001C842.013 21.7823 648.804 23.1772 395.415 158.805Z"
        }
      ],
      duration: 18000,
      direction: "alternate",
      autoplay: true,
      easing: "linear",
      elasticity: 100,
      loop: true,
    })
  }, [])
  return (
    <>
      <Helmet>
          <title>Negroni Time</title>
          <meta name="description" content="Helmet application" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1"
          />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <div className="outer">
        <Div100vh className="container header-footer">
          <Header businessDetails={businessDetails} />
          <Footer businessDetails={businessDetails} />
        </Div100vh>
        <Div100vh className="blob-wrapper">
          <svg
            className="blob"
            width="100%"
            height="100%"
            viewBox="150 0 800 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "mix-blend-mode": "multiply" }}
            opacity="0.8"
            preserveAspectRatio="xMinYMin"
          >
            <path
              id="blob"
              opacity="0.6"
              d="M393.905 326.112C120.96 401.593 17.0959 439.844 0.992976 584.523C-16.721 823.464 207.916 755.909 245.758 881.118C283.6 1006.33 187.787 1349.1 542.052 1469.87C896.318 1590.64 1183.76 1329.56 1169.26 1021.42C1154.77 713.284 1376.19 729.268 1372.97 326.112C1369.74 -77.0441 954.288 -42.3449 818.218 90.7896C707.866 198.762 666.85 250.631 393.905 326.112Z"
              fill="#67190E"
            />
          </svg>
          <svg
            className="blob-xl"
            viewBox="0 0 1000 1200"
            fill="none"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "mix-blend-mode": "multiply" }}
            opacity="0.8"
            preserveAspectRatio="xMinYMin"
          >
            <path
              id="blob"
              opacity="0.6"
              d="M393.905 326.112C120.96 401.593 17.0959 439.844 0.992976 584.523C-16.721 823.464 207.916 755.909 245.758 881.118C283.6 1006.33 187.787 1349.1 542.052 1469.87C896.318 1590.64 1183.76 1329.56 1169.26 1021.42C1154.77 713.284 1376.19 729.268 1372.97 326.112C1369.74 -77.0441 954.288 -42.3449 818.218 90.7896C707.866 198.762 666.85 250.631 393.905 326.112Z"
              fill="#67190E"
            />
          </svg>
        </Div100vh>
        <div className="wrapper container">
          <Main name={businessDetails.name} />
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query businessDetailsQuery {
    site {
      siteMetadata {
        businessDetails {
          name
          hours
          days
          address
          phone
          email
        }
      }
    }
  }
`
export default App
