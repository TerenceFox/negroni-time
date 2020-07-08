import React, { useContext } from "react"

const SectionToggle = props => {
  const { eventKey, context, children } = props
  const { activeEventKey, setActiveEventKey } = useContext(context)
  
  const onClick = eventKey => {
    if (eventKey === activeEventKey) {
      setActiveEventKey(null)
    } else {
      setActiveEventKey(eventKey)
    }
  }
  return (
    <div
      className={`section--title ${
        eventKey === activeEventKey ? "section--title-active" : ""
      }`}
      onClick={() => onClick(eventKey)}
    >
      {children}
    </div>
  )
}

export default SectionToggle
