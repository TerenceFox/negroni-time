import React, { useReducer } from "react"
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

  const onToggleSection = title => {
    dispatch({type: 'TOGGLE', payload: title})
  }

  return (
    <>
      {menuList.map(menu => (
        <Section
          title={menu.node.frontmatter.title}
          html={menu.node.html}
          state={menu.state}
          onToggleSection={onToggleSection}
        />
      ))}
    </>
  )
}

export default Menu
