import React from "react"

function Item(props) {
    const content = props.content
    const mdash = String.fromCharCode(8212)
    return (
      <div>
        <h3 className="title">
          {content.name} {mdash} {content.price}
        </h3>
        <p className="description">{content.ingredients}</p>
      </div>
    )
}

export default Item