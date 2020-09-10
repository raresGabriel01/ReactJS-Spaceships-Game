import React from 'react'
import AsteroidImg from '../img/asteroid.png'
import './Asteroid.css'

class Asteroid extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			x:props.x,
			y:props.y,
			id:props.id
		}
	}
	
	render() {
		console.log(this.context)
		let myStyle = {
			left: this.state.x + '%',
			top: this.state.y + '%'
		}
		return (
			
			
				<img className='asteroid' src = {AsteroidImg} style = {myStyle} id = {this.state.id}/>
			
			
		)
	}
	fall = () => {
		this.setState(prevState => {
			return {y: prevState.y + 0.8}
		})
	}
}

export default Asteroid