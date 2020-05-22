import React from "react"
import { CSSTransition } from "react-transition-group"

const SectionContent = props => {
  const { html, eventKey, activeEventKey } = props

  const duration = 400

  const onEnter = node => {
    node.style.marginTop = `-${node.offsetHeight}px`
    node.style.marginBottom = `0px`
  }

  const onEntering = node => {
    node.style.marginTop = ""
    node.style.marginBottom = ""
  }

  const onExit = node => {
    node.style.marginTop = ""
    node.style.marginBottom = ""
  }

  const onExiting = node => {
    node.style.marginTop = `-${node.offsetHeight}px`
    node.style.marginBottom = `0px`
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
      <div className="section--content" dangerouslySetInnerHTML={{ __html: html }}></div>
    </CSSTransition>
  )
}

export default SectionContent
