import React from "react"
import styles from "./header-footer.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark(filter: { frontmatter: { name: { eq: "details" } } }) {
        edges {
          node {
            html
            frontmatter {
              hours
              days
              address
            }
          }
        }
      }
    }
  `)
  const {hours, days, address } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <header>
      <span className={styles.details}>
        {hours} {days}
      </span>
      <span className={styles.details}>{address}</span>
    </header>
  )
}

export default Header
