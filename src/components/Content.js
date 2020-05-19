import React from 'react'

const Content = React.forwardRef((props, ref) => {
  const { html, height } = props
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ maxHeight: `${height}px`, overflow: "hidden" }}
      className="content"
      ref={ref}
    ></div>
  )
})

export default Content
