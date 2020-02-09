import React from "react"
import styles from "./header-footer.module.css"

function Footer(props) {
    const {address, email} = props.restaurantDetails
    return (
        <footer>
            <span className={styles.details}>{address}</span>
            <span className={styles.details}><a href={`mailto:${email}`}>contact</a></span>
        </footer>
    )
}

export default Footer