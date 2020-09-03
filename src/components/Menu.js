import React from 'react'
import Background from './Background.js'

class Menu extends React.Component {
	render() {
		return (
			<div id = 'gameSurface'>
				<Background/>
				<div id = 'menu'>
          			<h1 id = 'title'> Space Invaders </h1>
          			<button> Play </button>
        		</div>
        	</div>
		)
	}
}

export default Menu