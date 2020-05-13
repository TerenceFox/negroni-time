import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Div100vh from 'react-div-100vh'

import "./index.css"

function App() {

    return (
        <div>
            <Header />
            <Div100vh className="container">
            <Main />
            </Div100vh>
            <Footer />
        </div>
    )
}
export default App
