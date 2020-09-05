import React from 'react'
import SpaceshipImage from '../img/spaceship.png'
import './Spaceship.css'
class Spaceship extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			left:50,
			hp:100
		}
	}

	render() {
		return (
			<img src = {SpaceshipImage} id ='spaceship' alt = 'spaceship' style={{left:this.state.left + '%'}} />
			
		)
	}

	componentDidMount() {
		console.log('componentDidMount')
		document.addEventListener('keydown', (event) => {
			let value = null
			switch(event.key) {
				case "ArrowLeft":
					value = -5
					break
				case "ArrowRight":
					value = 5
					break
				default:
					value = 0
			}
			this.setState(prevState => {
				let newLeftValue = prevState.left + value
				let isShipOutOfBounds = newLeftValue < 10 || newLeftValue > 90
				return {left: isShipOutOfBounds? prevState.left : newLeftValue}
			})
		})
	}
}

export default Spaceship