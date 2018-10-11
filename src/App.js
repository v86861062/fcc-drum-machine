import React, { Component } from 'react'
import './App.css'
import SoundButton from './SoundButton.js'
import Switch from './Switch.js'
import TextDisplay from './TextDisplay'

const bankOne = [{
  keyLetter: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyLetter: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyLetter: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyLetter: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyLetter: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyLetter: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyLetter: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyLetter: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyLetter: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},]

const bankTwo = [{
  keyLetter: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyLetter: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyLetter: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyLetter: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyLetter: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyLetter: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyLetter: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyLetter: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyLetter: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}]

class App extends Component {
  constructor(props) {
    super(props)         
    this.state = {
      power: true,
      bank: true,
      text: "",
      volume: 0.5
    }
    this.timer = null
  }

  handlePowerPress = () => {    
    this.setState(prevState => ({ power: !prevState.power }))
    this.setDisplayText(this.state.power ? "power:OFF" : "power:ON")
  }

  handleBankPress = () => {    
    this.setState(prevState => ({ bank: !prevState.bank }))
    this.setDisplayText(this.state.bank ? "Smooth Piano Kit" : "Heater Kit")
  }

  handleVolumeChange = (e) => {
    let v = Number(e.target.value)
    this.setState({ volume: v })
    this.setDisplayText("Volume :" + Math.round(v*100))
  }

  setDisplayText = (str) => {
    this.setState({ text: str })    
    if(this.timer){ 
      /* 這是為了防止新的文字被上次啟動的計時給清除 */
      clearTimeout(this.timer) 
    }
    this.timer = setTimeout(() => this.setState({ text: "" }), 1000)
  }

  render() {
    let nowBank = this.state.bank ? bankOne : bankTwo

    const buttons = nowBank.map(
      (index) => 
        <SoundButton 
          key={index.keyLetter}
          power={this.state.power} 
          keyLetter={index.keyLetter} 
          soundSrc={index.url} 
          volume={this.state.volume}
          id={index.id}
          onKeyPress={this.setDisplayText}/>  
    )

    return (
      <div id="drum-machine">
        <div className="buttons">
          {buttons}
        </div>

        <Switch 
          name="Power"
          onClick={this.handlePowerPress} 
          switchOn={this.state.power} />
        
        <Switch 
          name="Bank"
          onClick={this.handleBankPress} 
          switchOn={this.state.bank} />

        <TextDisplay 
          text={this.state.text} />

        <input type="range" min="0" max="1" step="0.01" 
          value={this.state.volume} 
          onChange={this.handleVolumeChange}/>
      </div>
    )
  }
}

export default App
