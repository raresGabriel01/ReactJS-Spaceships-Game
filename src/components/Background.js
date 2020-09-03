import React from "react";

class Background extends React.Component {


	render() {
		return (
			
			<video autoPlay muted loop id = 'background' >
				<source src="/img/background.mp4" type="video/mp4" />
			</video>
		)
	}
}


export default Background
