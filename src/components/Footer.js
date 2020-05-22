import React from "react"

const Footer = (props) => {
  const { phone, email } = props.businessDetails
  return (
    <footer>
      <span className="details">
        <a href={`tel:${phone}`}>call</a>
      </span>
      <span className="details">
        <a href={`mailto:${email}`}>email</a>
      </span>
    </footer>
  )
}

export default Footer
