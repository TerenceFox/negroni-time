import React, { createRef, useEffect, useState } from 'react'
import Content from "./Content"
import styles from "./section.module.css"

const Section = (props) => {
  const [height, setHeight] = useState(0)
  const ref = createRef()
  const {title, html, state} = props
  
  useEffect(() => {
    setHeight(state === "OPEN" ? ref.current.scrollHeight : 0)
  }, [])

  return (
    <>
      <h3>{title}</h3>
      <Content html={html} height={height} ref={ref}/>
    </>
  )
}

export default Section