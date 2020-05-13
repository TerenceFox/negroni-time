import React, { useState } from "react"
import AccordionSection from "./AccordionSection"
import "./accordion.css"

function Accordion(props) {
  const menus = props.content.menus
  const isOpen = []
  menus.forEach(menu => isOpen.push({ title: menu.title, active: "" }))
  const [menuState, setMenuState] = useState(isOpen)

  function toggle(title, index) {
    let newArr = [...isOpen]
    let toggledValue = menuState[index].active === "" ? "active" : ""
    newArr[index] = { title: title, active: toggledValue }
    setMenuState(newArr)
  }

  return (
    <div className="accordion">
      <h1>{props.title}</h1>
      {menus.map((menu, index) => (
        <AccordionSection
          key={index}
          content={menu}
          toggle={toggle}
          index={index}
          active={menuState[index].active}
        />
      ))}
    </div>
  )
}

export default Accordion
