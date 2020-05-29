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
          <SectionToggle title={"menu"} eventKey={0} context={context} />
          <SectionContent eventKey={0} context={context}>
            <Menu />
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionToggle title={name} eventKey={1} context={context} />
        </SectionContainer>
        <SectionContainer>
          <SectionToggle title={"reservations"} eventKey={2} context={context} />
          <Reservations context={context} eventKey={2}/>
        </SectionContainer>
      </MenuContextProvider>
    </main>
  )
}

export default Main
