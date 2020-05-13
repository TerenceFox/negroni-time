import React from "react"
import styles from "./header-footer.module.css"


const Header = (props) => {
  const { hours, days, address } = props.businessDetails
  return (
    <header>
      <span className={styles.details}>
        {hours} {days}
      </span>
      <span className={styles.details}>{address}</span>
    </header>
  )
}

export default Header
