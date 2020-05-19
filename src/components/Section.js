import React, { createRef, useEffect, useState } from 'react'
import Content from "./Content"
import styles from "./section.module.css"

const Section = (props) => {
  const {title, html, state, onToggleSection } = props
  const [height, setHeight] = useState(0)
  const ref = createRef()
 

  useEffect(() => {
    setHeight(state === "OPEN" ? ref.current.scrollHeight : 0)
  }, [state])

  return (
    <>
      <h2 onClick={() => onToggleSection(title)}>{title}</h2>
      <Content html={html} height={height} ref={ref} />
    </>
  )
}

export default Section