import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import "../styles/main.scss"
import blob from "../assets/blob1.svg"

const App = ({ data }) => {
  const { businessDetails } = data.site.siteMetadata
  return (
    <>
    <div className="background" style={{ backgroundImage: `url(${blob})` }}></div>
      <Header businessDetails={businessDetails} />
      <Main name={businessDetails.name} />
      <Footer businessDetails={businessDetails} />
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
