import React from "react"

const Header = (props) => {
  const { hours, days, address } = props.businessDetails
  return (
    <header>
      <span className="details">
        {hours} {days}
      </span>
      <span className="details">{address}</span>
    </header>
  )
}

export default Header
