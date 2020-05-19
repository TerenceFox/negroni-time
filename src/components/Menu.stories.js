import React from "react"
import Menu from "./Menu"

export default {
  component: Menu,
  title: "Menu",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const menuData = [
  {
    node: {
      html: `<h3>the negroni - 12</h3>\n
      <p>gin/campari/vermount</p>\n
      <h3>the other negroni - 12</h3>\n
      <p>gin/campari/vermouth</p>`,
      frontmatter: {
        title: "not negronis",
      },
    }
  },
  {
    node: {
      html: `<h3>the negroni - 12</h3>\n
      <p>gin/campari/vermount</p>\n
      <h3>the other negroni - 12</h3>\n
      <p>gin/campari/vermouth</p>`,
      frontmatter: {
        title: "negronis",
      },
    }
  }
]

export const someOpenMenuData = [
  {
    node: {
      html: `<h3>the negroni - 12</h3>\n
      <p>gin/campari/vermount</p>\n
      <h3>the other negroni - 12</h3>\n
      <p>gin/campari/vermouth</p>`,
      frontmatter: {
        title: "not negronis",
      },
    },
    state: "OPEN",
  },
  {
    node: {
      html: `<h3>the negroni - 12</h3>\n
      <p>gin/campari/vermount</p>\n
      <h3>the other negroni - 12</h3>\n
      <p>gin/campari/vermouth</p>`,
      frontmatter: {
        title: "negronis",
      },
    },
    state: "CLOSED",
  },
]

export const Closed = () => <Menu menuData={menuData} />

export const SomeOpen = () => <Menu menuData={someOpenMenuData} />