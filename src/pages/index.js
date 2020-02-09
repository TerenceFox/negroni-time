import React, {useState} from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

import "./index.css"

function App() {
    const [restaurantDetails, setRestaurantDetails] = useState({
        hours: "2pm - 11pm", 
        days: "every day", 
        address: "1234 pizza st.", 
        email: "contact@negronitime.com"
    })

    return (
        <div>
            <Header restaurantDetails={restaurantDetails}/>
            <Main />
            <Footer restaurantDetails={restaurantDetails}/>
        </div>
    )
}
export default App
