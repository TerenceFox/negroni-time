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
    <div className="wrapper" style={{ backgroundImage: `url(${blob})` }}>
      <Header businessDetails={businessDetails} />
      <Div100vh className="container">
        <Main name={businessDetails.name} />
      </Div100vh>
      <Footer businessDetails={businessDetails} />
    </div>
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
