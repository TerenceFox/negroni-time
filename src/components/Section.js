import React from 'react'

const Section = (props) => {
  const {title, html} = props
  return (
  <>
  <h3>{title}</h3>
  <div
    dangerouslySetInnerHTML={{__html: html}}
    className="content"
  >
  </div>
  </>
  )
}

export default Section