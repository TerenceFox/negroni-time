import React from "react"
import SectionToggle from "./SectionToggle"
import SectionContent from "./SectionContent"
import SectionContainer from "./SectionContainer"
import { action } from "@storybook/addon-actions"

export default {
  component: Open,
  title: "Section",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const htmlData = `<h3>the negroni - 12</h3>

<p>gin/campari/vermount</p>

<h3>the other negroni - 12</h3>

<p>gin/campari/vermouth</p>`

export const titleData = "negronis"

export const actionsData = {
  onToggle: action("onToggle"),
}

export const Open = () => (
  <>
  <SectionContainer>
    <SectionToggle title={titleData} eventKey={1} {...actionsData} />
    <SectionContent html={htmlData} eventKey={1} activeEventKey={1} />
  </SectionContainer>
  <SectionContainer>
    <SectionToggle title={titleData} eventKey={1} {...actionsData} />
    <SectionContent html={htmlData} eventKey={2} activeEventKey={1} />
  </SectionContainer>
  </>
)

export const Closed = () => (
  <SectionContainer>
    <SectionToggle title={titleData} eventKey={1} {...actionsData} />
    <SectionContent html={htmlData} eventKey={1} activeEventKey={0} />
  </SectionContainer>
)
