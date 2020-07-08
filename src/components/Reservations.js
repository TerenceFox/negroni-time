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
  return (
    <div className="reservations">
      <SectionContent eventKey={eventKey} context={context} html={html} />
    </div>
  )
}

export default Reservations
