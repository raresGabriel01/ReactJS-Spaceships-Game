import React from 'react'
import ReactDOM from 'react-dom'
import Space from '../img/space.jpg'
import './Game.css'
import Spaceship from './Spaceship.js'
import Asteroid from './Asteroid.js'
import SpaceshipContext from './SpaceshipContext.js'

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			asteroids:[], // {x, y, ref, key}
			index:0,
			spaceshipReference:null
		}
	}
	render() {
		let asteroidComponents = this.state.asteroids.map(asteroid => <Asteroid ref = {asteroid.ref} 
																				x = {asteroid.x} 
																				y = {asteroid.y}
																				key = {asteroid.key}
																				id = {asteroid.key}
																				remove = {this.remove}/>)
		return (
			<div id = 'gameSurface' style = {{backgroundImage:`url(${Space})`}}>
				<div id ='cover'></div>
				<Spaceship/>
				<SpaceshipContext.Provider value ={{spaceship:this.state.spaceshipReference, color:'green'}}>
					{asteroidComponents}
				</SpaceshipContext.Provider>
			</div>
		)
	}

	componentDidMount() {

		this.setState({spaceshipReference: document.getElementById('spaceship')})



		let timer = 0
		setInterval(() => {
	
			this.setState(prevState => {
				for(let asteroid of prevState.asteroids) {
					asteroid.ref.current.fall()
				}
				if(timer == 0) {
					let x =Math.floor( Math.random() * 100 )
					prevState.asteroids.push({
						x:x,
						y:-20,
						ref:React.createRef(),
						key:(++prevState.index)
					})
					
				}

				return {
					asteroids: prevState.asteroids,
					index: prevState.index
				}
				
			})
			timer = (timer + 10) % 200
			if(this.state.asteroids[0]) {
				if(this.state.asteroids[0].ref.current.state.y > 100)
					this.remove()
			}
			
		},30)
	}
	
	remove = () => {
		this.setState(prevState => {
			prevState.asteroids.shift()
			return {
				asteroids:prevState.asteroids
			}
		})
	}
}

export default Game