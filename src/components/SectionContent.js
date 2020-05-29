import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"

const SectionContent = props => {
  const { children, eventKey, context, html } = props
  const { activeEventKey } = useContext(context)
  const duration = 300
  const isAppearing = true

  const onEnter = (node) => {
    node.style.marginTop = `-${node.offsetHeight}px`
    node.style.marginBottom = `0px`
  }

  const onEntering = (node) => {
    node.style.marginTop = ""
    node.style.marginBottom = ""
  }

  const onExit = (node ) => {
    node.style.marginTop = ""
    node.style.marginBottom = ""
  }

  const onExiting = (node) => {
    node.style.marginTop = `-${node.offsetHeight}px`
    node.style.marginBottom = `0px`
  }

  const content = {};
  if (html) {
    content.dangerouslySetInnerHTML = {__html: html}
  } else {
    content.children = children
  }

  return (
    <CSSTransition
      in={eventKey === activeEventKey}
      appear={true}
      classNames="section"
      timeout={duration}
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div
        className="section--content"
        {...content}
      ></div>
    </CSSTransition>
  )
}

export default SectionContent
