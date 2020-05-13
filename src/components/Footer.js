import React from "react"
import styles from "./header-footer.module.css"
import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allMarkdownRemark(filter: { frontmatter: { name: { eq: "details" } } }) {
        edges {
          node {
            html
            frontmatter {
              phone
              email
            }
          }
        }
      }
    }
  `)

  const { phone, email } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <footer>
      <span className={styles.details}>
        <a href={`tel:${phone}`}>call</a>
      </span>
      <span className={styles.details}>
        <a href={`mailto:${email}`}>email</a>
      </span>
    </footer>
  )
}

export default Footer
