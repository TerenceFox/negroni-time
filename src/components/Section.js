import React from 'react'

const Section = (props) => {
  const content = props.content
  return (
    <div>
      <h3>Title</h3>
      <p>{content}</p>
    </div>
  )
}

export default Section