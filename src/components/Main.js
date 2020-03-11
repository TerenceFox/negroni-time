import React from "react"
import Accordion from "./Accordion"
import styles from "./main.module.css"
import data from "../services/data"

function Main() {

  return (
    <main className={styles.main}>
      <Accordion title="menu" content={data} />
    </main>
  )
}

export default Main