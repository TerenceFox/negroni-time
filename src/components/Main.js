import React from "react"
import Menu from "./Menu"
import MenuContextProvider from "./MenuContextProvider"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"


const Main = () => {
  const context = React.createContext()
  return (
    <main>
      <MenuContextProvider Context={context}>
        <SectionContainer>
          <SectionToggle
            title={"Menu"}
            eventKey={1}
            context={context}
          />
          <SectionContent eventKey={1} context={context}>
            <Menu />
          </SectionContent>
        </SectionContainer>
      </MenuContextProvider>
    </main>
  )
}

export default Main