import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Div100vh from "react-div-100vh"
import { graphql } from "gatsby"
import "../styles/main.scss"
import blob from "../assets/blob1.svg"

const App = ({ data }) => {
  const { businessDetails } = data.site.siteMetadata
  return (
    <>
      <div className="background">
        <div className="blob" style={{ backgroundImage: `url(${blob})` }}></div>
      </div>
      <Div100vh className="container header-footer">
        <Header businessDetails={businessDetails} />
        <Footer businessDetails={businessDetails} />
      </Div100vh>
      <Div100vh className="wrapper container">
        <Main name={businessDetails.name} />
      </Div100vh>
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
