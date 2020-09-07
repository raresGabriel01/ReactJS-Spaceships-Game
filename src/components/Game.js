import React from 'react'
import ReactDOM from 'react-dom'
import Space from '../img/space.jpg'
import './Game.css'
import Spaceship from './Spaceship.js'
import Asteroid from './Asteroid.js'

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			asteroidCoord: [],
			totalAsteroids: 0,
			spaceshipReference:null
		}
	}
	render() {
		let coords = this.state.asteroidCoord
		let asteroids = coords.map(coord => <Asteroid x = {coord[0]}
													  y = {coord[1]} 
													  key = {coord[2]} 
													  id = {coord[2]} 
													  fell = {this.handleFell} 
													  spaceship = {this.state.spaceshipReference}
													  crash = {this.crash}/>)
		return (
			<div id = 'gameSurface' style = {{backgroundImage:`url(${Space})`}}>
				<div id ='cover'></div>
				<Spaceship/>
				{asteroids}
			</div>
		)
	}
	
	componentDidMount() {
		console.log('test')
		this.setState({spaceshipReference:document.getElementById('spaceship')})
		this.generateAsteroids()	
	}

	generateAsteroids = () => {
		let timer = setInterval(() => {
			let x = Math.random() * 100
			this.setState(prevState => {
				let ast  = prevState.asteroidCoord.map(coords => [coords[0]+1, coords[1], coords[2]])
				ast.push([x,-20,prevState.totalAsteroids + 1])
				return {asteroidCoord:ast, totalAsteroids: prevState.totalAsteroids + 1}
			})
		}, 1000)
	}

	handleFell = () => {
		this.setState(prevState => {
			let ast = prevState.asteroidCoord
			ast.shift()
			return {asteroidCoord:ast}
		})
	}

	crash = () => {
		
		console.log('CRAAAAAASH')
	}
}

export default Game