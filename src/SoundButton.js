import React, { Component } from "react"
import PropTypes from "prop-types"
//import Sound from 'react-sound'

class SoundButton extends Component {
  constructor(props) {
    super(props)
    this.sound = React.createRef()
  }

  handleKeyPress = (e) => {
    if (!this.props.power) {
      return
    }

    let keyASCII = this.props.keyLetter.charCodeAt(0)
    if (e.keyCode === keyASCII) {
      this.playAudio()
    }
  }

  playAudio = () => {
    this.sound.current.currentTime = 0
    this.sound.current.volume = this.props.volume
    this.sound.current.play()
    this.props.onKeyPress(this.props.id)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playAudio}>        
        <audio id={this.props.keyLetter} className="clip"
          ref={this.sound} src={this.props.soundSrc}/>
        <p>{this.props.keyLetter}</p>
      </div>
    )
  }
}

SoundButton.propTypes = {
  power: PropTypes.bool.isRequired,
  keyLetter: PropTypes.string.isRequired,
  soundSrc: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
}

export default SoundButton
