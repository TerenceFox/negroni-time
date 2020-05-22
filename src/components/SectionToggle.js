import React from "react"

const SectionToggle = props => {
  const { title, eventKey, onToggle} = props
  return (
    <div className="section section--title">
      <h2 onClick={() => onToggle(eventKey)}>{title}</h2>
    </div>
  )
}

export default SectionToggle
