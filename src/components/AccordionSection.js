import React, { useState, useRef, useEffect } from "react"
import Item from "./Item"

function AccordionSection(props) {
  const { title, items } = props.content
  const toggle = props.toggle
  const index = props.index
  const active = props.active
  const [height, setHeight] = useState("0px")
  const content = useRef(null)

  function toggleAccordion() {
    setHeight(active === "active" ? `${content.current.scrollHeight}px` : "0px")
  }

  useEffect(toggleAccordion, [active])
  
  return (
    <div className="accordion__section">
      <h3 className={`title ${active}`} onClick={() => toggle(title, index)}>
        {title}
      </h3>
      <div ref={content} style={{ maxHeight: `${height}` }} className="content">
        <ul>
          {items.map((item, key) => (
            <Item content={item} key={key} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccordionSection
