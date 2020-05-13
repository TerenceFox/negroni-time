import React from 'react'

const Content = React.forwardRef((props, ref) => {
  const { html, height } = props
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="content"
      style={{maxHeight: `${height}px`}}
      ref={ref}
    ></div>
  )
})

export default Content
