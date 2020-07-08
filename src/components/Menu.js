import React, { useState, useEffect } from "react"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"
import { useStaticQuery, graphql } from "gatsby"

const Menu = ({ onClick }) => {
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    setWindowSize(window.innerWidth)
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 90)
    }
    // set resize listener
    window.addEventListener("resize", resizeListener)
  }, [])

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

  const mobileSections = (
    <>
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
    </>
  )

  const desktopSections = (
    <>
      {sections.map((section, index) => (
        <div className="section container" key={index}>
          <div className="section--title active">
            <h3>{section.node.frontmatter.title}</h3>
          </div>
          <div
            className="section--content"
            dangerouslySetInnerHTML={{ __html: section.node.html }}
          ></div>
        </div>
      ))}
    </>
  )

  return (
    <MenuContextProvider Context={context}>
      {windowSize > 768 ? desktopSections : mobileSections }
    </MenuContextProvider>
  )
}

export default Menu
