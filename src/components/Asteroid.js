import React from 'react'
import AsteroidImg from '../img/asteroid.png'
import './Asteroid.css'

class Asteroid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			x:props.x,
			y:-20,
			id:props.id,
			display:"inline",
			reference:null,
			request: null
		}
	}


	render() {
		let myStyle = {
			top: this.state.y + '%',
			left: this.state.x + '%',
			display:this.state.display
		}
		return <img src = {AsteroidImg} alt ='asteroid' className = 'asteroid' style = {myStyle} id = {this.state.id}/>
	}

	componentDidMount() {
		requestAnimationFrame(this.fall)
		this.setState({reference:document.getElementById(this.state.id)})
	}

	fall = () => {
		this.setState({request:requestAnimationFrame(this.fall)})
		this.setState(prevState => {
			if(prevState.y >= 105) {
				this.remove()
				cancelAnimationFrame(this.state.request)
			}
			else if(this.state.display != "none"){
				let rect1 = this.props.spaceship.getBoundingClientRect()
				let rect2 = this.state.reference.getBoundingClientRect()
				let overlap = !(rect1.right < rect2.left || 
                				rect1.left > rect2.right || 
                				rect1.bottom < rect2.top || 
                				rect1.top > rect2.bottom)
				if(overlap){
					this.props.crash()
					return {
						display:"none"
					}
				}
			}
			return {
				y:prevState.y + 1
			}
		})
	}

	remove = () => {
		this.props.fell()
	}
	
}

export default Asteroid