import React from "react"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const context = React.createContext()
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "menu" } } }) {
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
  const sections = data.allMarkdownRemark.edges
  return (
    <MenuContextProvider Context={context}>
      {sections.map((section, index) => (
        <SectionContainer key={index}>
          <SectionToggle eventKey={index} context={context}>
            <h3>{section.node.frontmatter.title}</h3>
          </SectionToggle>
          <SectionContent
            eventKey={index}
            context={context}
            html={section.node.html}
          ></SectionContent>
        </SectionContainer>
      ))}
    </MenuContextProvider>
  )
}

export default Menu