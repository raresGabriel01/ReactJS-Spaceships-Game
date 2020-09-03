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


  render() {
    return (
      this.state.inGame? <Game/> : <Menu/>
    )
  }
}

export default App;
