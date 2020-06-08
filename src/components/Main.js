import React from "react"
import Menu from "./Menu"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"
import Reservations from './Reservations'

const Main = ({ name }) => {
  const context = React.createContext()
  return (
    <main>
      <MenuContextProvider Context={context}>
        <SectionContainer>
          <SectionToggle eventKey={0} context={context}>
            <h2>menus</h2>
          </SectionToggle>
          <SectionContent eventKey={0} context={context}>
            <Menu />
          </SectionContent>
        </SectionContainer>
        <SectionToggle eventKey={1} context={context}>
          <h1>{name}</h1>
        </SectionToggle>
        <SectionContainer>
          <SectionToggle eventKey={2} context={context}>
            <h2>reservations</h2>
          </SectionToggle>
          <Reservations context={context} eventKey={2} />
        </SectionContainer>
      </MenuContextProvider>
    </main>
  )
}

export default Main
