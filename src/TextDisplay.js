import React from "react"
import PropTypes from "prop-types"

function TextDisplay(props) {
  return <h1 id="display">{props.text}</h1>
}

TextDisplay.propTypes = {
  text: PropTypes.string.isRequired
}

export default TextDisplay
