import React from 'react'
import Menu from './components/Menu.js'
import Game from './components/Game.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inGame: false
    }
  }

  handleClickPlay = () => {// im basically doing a transition from <Menu/> to <Game/>. Not good looking. I'll change it later
    let body = document.getElementById('body')
    let gameSurface = document.getElementById('gameSurface')
    gameSurface.style.transition = body.style.transition = '2s all linear'
    gameSurface.style.opacity = 0
    body.style.backgroundColor = 'black'
    setTimeout(() => {
      this.setState({inGame:true})
    }, 2500)
  }

  render() {
    return (
      this.state.inGame? <Game/> : <Menu click={this.handleClickPlay}/>
    )
  }
}

export default App;
