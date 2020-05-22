import React, { useReducer, useState } from "react"
import SectionContainer from "./SectionContainer"
import Section from "./Section"

const init = (menuData) => {
  return menuData.map(menu => {
    if (!menu.state) {menu.state = "CLOSED"}
    return menu
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      const newArr = state.map(menu => {
        if (menu.node.frontmatter.title === action.payload) {
          menu.state = menu.state === "CLOSED" ? "OPEN" : "CLOSED"
        } else {
          menu.state = "CLOSED"
        }
        return menu
      })
      return newArr
    }
    default:
      throw new Error()
  }
}

const Menu = ({ menuData }) => {
  const [menuList, dispatch ] = useReducer(reducer, menuData, init)
  const [toggle, setToggle ] = useState(false)
  const onToggleSection = title => {
    dispatch({type: 'TOGGLE', payload: title})
  }

  const onClick = () => setToggle(!toggle)

  return (
    <div>
      <h2 onClick={onClick}>Menus</h2>
      {toggle &&
        menuList.map(menu => (

            <SectionContainer
              title={menu.node.frontmatter.title}
              state={menu.state}
              onToggleSection={onToggleSection}
            >
              <Section html={menu.node.html} />
            </SectionContainer>
        ))}
    </div>
  )
}

export default Menu
