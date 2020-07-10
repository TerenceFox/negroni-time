import React, { createContext } from "react"
import Menu from "./Menu"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"
import Reservations from './Reservations'
import SocialMediaContainer from './SocialMediaContainer'

const Main = ({ name }) => {
  const context = createContext()
  
  return (
    <main>
      <MenuContextProvider Context={context}>
        <SectionContainer>
            <SectionToggle
              eventKey={0}
              context={context}
            >
              <h2>menu</h2>
            </SectionToggle>
          <SectionContent eventKey={0} context={context}>
            <div className="menu">
              <Menu />
            </div>
          </SectionContent>
        </SectionContainer>
        <SectionToggle eventKey={1} context={context}>
          <h1 className="section--main">{name}</h1>
        </SectionToggle>
        <SectionContainer>
          <SectionToggle eventKey={2} context={context}>
            <h2 className="section--main">reservations</h2>
          </SectionToggle>
          <Reservations context={context} eventKey={2} />
        </SectionContainer>
      </MenuContextProvider>
      <SocialMediaContainer />
    </main>
  )
}

export default Main
