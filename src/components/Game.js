import React from 'react'
import Space from '../img/space.jpg'

import './Game.css'
import Spaceship from './Spaceship.js'
class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div id = 'gameSurface' style = {{backgroundImage:`url(${Space})`}}>
				<div id ='cover'></div>
				<Spaceship/>
			</div>
		)
	}
	
	
}

export default Game