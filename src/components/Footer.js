import React from "react"

function Footer(props) {
    const {address, email} = props.restaurantDetails
    return (
        <footer>
            <span>{address}</span>
            <span>{email}</span>
        </footer>
    )
}

export default Footer