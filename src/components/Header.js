import React from "react"
import styles from "./header-footer.module.css"

function Header(props) {
    const { hours, days } = props.restaurantDetails
    return (
        <header>
            <span className={styles.details}>{hours}</span>
            <span className={styles.details}>{days}</span>
        </header>
    )
}

export default Header