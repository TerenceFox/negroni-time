import React, { useContext } from "react"

const SectionToggle = props => {
  const { title, eventKey, context } = props
  const { activeEventKey, setActiveEventKey } = useContext(context)
  const onClick = eventKey => {
    if (eventKey === activeEventKey) {
      setActiveEventKey(null)
    } else {
      setActiveEventKey(eventKey)
    }
  }
  return (
    <div className="section--title">
      <h2 onClick={() => onClick(eventKey)}>{title}</h2>
    </div>
  )
}

export default SectionToggle
