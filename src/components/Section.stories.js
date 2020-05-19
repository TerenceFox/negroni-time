import React from "react"

import Section from "./Section"
import { action } from "@storybook/addon-actions"

export default {
  component: Section,
  title: "Section",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const htmlData = `<h3>the negroni - 12</h3>

<p>gin/campari/vermount</p>

<h3>the other negroni - 12</h3>

<p>gin/campari/vermouth</p>`

export const titleData = "negronis"

export const openStateData = "OPEN"

export const closedStateData = "CLOSED"

export const actionsData = {
  onToggleSection: action("onToggleSection"),
}

export const Closed = () => (
  <Section
    title={titleData}
    html={htmlData}
    state={closedStateData}
    {...actionsData}
  />
)

export const Open = () => (
  <Section
    title={titleData}
    html={htmlData}
    state={openStateData}
    {...actionsData}
  />
)
