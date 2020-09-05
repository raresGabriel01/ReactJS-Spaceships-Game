import React from "react"
import BackgroundVideo from '../img/background.mp4'
import './Background.css'
class Background extends React.Component {


	render() {
		return (
			
			<video autoPlay muted loop id = 'background' >
				<source src= {`${BackgroundVideo}`} type='video/mp4' />
			</video>
		)
	}
}


export default Background
