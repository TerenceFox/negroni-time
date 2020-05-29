import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Div100vh from "react-div-100vh"
import { graphql } from "gatsby"
import "../styles/main.scss"
import Blob from "../../static/blob.svg"

const App = ({ data }) => {
  const { businessDetails } = data.site.siteMetadata
  return (
    <div>
      <Header businessDetails={businessDetails} />
      <Div100vh className="container">
        <Main name={businessDetails.name}/>
      </Div100vh>
      <Blob className="blob" />
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
