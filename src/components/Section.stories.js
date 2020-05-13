import React from "react"
import { action } from "@storybook/addon-actions"

import Section from "./Section"

export default {
  component: Section,
  title: "Section",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}


export const Default = () => <Section />
