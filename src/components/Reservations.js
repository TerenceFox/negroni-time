import React from 'react'
import SectionContent from "./SectionContent"
import { useStaticQuery, graphql } from "gatsby"

const Reservations = ({context, eventKey}) => {
  const data = useStaticQuery(graphql`
    query ReservationsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "reservations" } } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const html = data.allMarkdownRemark.edges[0].node.html
  console.log(html)
  return (
    <SectionContent
      eventKey={eventKey} 
      context={context}
      html={html}
    /> 
  )
}

export default Reservations