import React, { useState } from 'react'

const MenuContextProvider = ({children, Context}) => {
    const [ activeEventKey, setActiveEventKey ] = useState(null)

  return (
    <Context.Provider value={{activeEventKey, setActiveEventKey }}>
      {children}
    </Context.Provider>
  )
}

export default MenuContextProvider
