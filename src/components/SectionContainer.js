import React, { useState } from 'react'

const SectionContainer = ({ children }) => {
  const [activeEventKey, setActiveEventKey] = useState(0)
  return (
    <div className="section container">
      {children}
    </div>
  )
}

export default SectionContainer
