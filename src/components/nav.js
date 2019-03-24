import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Accordion from '../js/simply.accordion'

class Nav extends Component {

	componentDidMount() {
		Accordion.init()
	}

	render() {
		return (
			<nav className="padding-y-double">
				<NavLink to="/"><h1 className="logo">Simply CSS</h1></NavLink>
				<hr />
				<NavLink className="nav-link" to="/home">Home</NavLink>
				<NavLink className="nav-link" to="/docs">Documentation</NavLink>
				<div className="accordion toggle">
					<header>
						<button className="nav-title" type="button">Layout</button>
					</header>
					<main>
						<NavLink className="nav-link" to="/semantics">Semantics</NavLink>
						<NavLink className="nav-link" to="/containers">Containers</NavLink>
						<NavLink className="nav-link" to="/grids">Grids</NavLink>
					</main>
				</div>
				<div className="accordion toggle">
					<header>
						<button className="nav-title" type="button">Components</button>
					</header>
					<main>
						<NavLink className="nav-link" to="/accordions">Accordions</NavLink>
						<NavLink className="nav-link" to="/alerts">Alerts</NavLink>
						<NavLink className="nav-link" to="/badges">Badges</NavLink>
						<NavLink className="nav-link" to="/breadcrumbs">Breadcrumbs</NavLink>
						<NavLink className="nav-link" to="/buttons">Buttons</NavLink>
						<NavLink className="nav-link" to="/form-elements">Form Elements</NavLink>
						<NavLink className="nav-link" to="/forms">Forms</NavLink>
						<NavLink className="nav-link" to="/groups">Groups</NavLink>
						<NavLink className="nav-link" to="/heroes">Heroes</NavLink>
						<NavLink className="nav-link" to="/lists">Lists</NavLink>
						<NavLink className="nav-link" to="/ranges">Ranges</NavLink>
						<NavLink className="nav-link" to="/tables">Tables</NavLink>
					</main>
				</div>
				<div className="accordion toggle">
					<header>
						<button className="nav-title" type="button">Utilities</button>
					</header>
					<main>
						<NavLink className="nav-link" to="../comingsoon">Borders</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Clearfix</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Colors</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Display</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Embed</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Flex</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Float</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Icons</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Margin</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Overflow</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Padding</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Shadows</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Sizing</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Text</NavLink>
						<NavLink className="nav-link" to="../comingsoon">Visibity</NavLink>
					</main>
				</div>
				<div className="accordion toggle">
					<header>
						<button className="nav-title" type="button">Builder</button>
					</header>
					<main>
						<NavLink className="nav-link" to="../builder">Page Builder</NavLink>
					</main>
				</div>
			</nav>
		)
	}
}

export default Nav
