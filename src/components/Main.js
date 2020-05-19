import React from "react"
import styles from "./main.module.css"
import Menu from "./Menu"
import { menuData } from "./Menu.stories"

const Main = () => {
  return <main className={styles.main}>
    <Menu menuData={menuData} />
  </main>
}

export default Main