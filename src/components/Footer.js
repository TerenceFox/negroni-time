import React from "react"
import styles from "./header-footer.module.css"

const Footer = (props) => {
  const { phone, email } = props.businessDetails
  return (
    <footer>
      <span className={styles.details}>
        <a href={`tel:${phone}`}>call</a>
      </span>
      <span className={styles.details}>
        <a href={`mailto:${email}`}>email</a>
      </span>
    </footer>
  )
}

export default Footer
