import React from "react"
import Menu from "./Menu"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"

const Main = ({ name }) => {
  const context = React.createContext()
  return (
    <main>
      <MenuContextProvider Context={context}>
        <SectionContainer>
          <SectionToggle title={"Menu"} eventKey={0} context={context} />
          <SectionContent eventKey={0} context={context}>
            <Menu />
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionToggle title={name} eventKey={1} context={context} />
        </SectionContainer>
      </MenuContextProvider>
    </main>
  )
}

export default Main
