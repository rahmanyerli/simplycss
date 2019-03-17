import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SideMenu from './components/side-menu'
import MenuButton from './components/menu-button'
import Home from './components/home'
import Docs from './components/docs'
import NotFound from './components/not-found'
import Simply from './js/simply'
import './css/prism.css'
import Accordions from './components/accordions'
import Alerts from './components/alerts'
import Badges from './components/badges'
import Breadcrumbs from './components/breadcrumbs'
import Buttons from './components/buttons'
import Forms from './components/forms';
import Semantics from './components/semantics';
import Containers from './components/containers';
import Grids from './components/grids';
import FormElements from './components/form-elements';
import Heroes from './components/heroes';

class App extends Component {

	componentDidMount() {
		Simply.init()
	}

	render() {
		return (
			<Router>
				<main>
					<MenuButton />
					<section id="sidenav">
						<SideMenu>
						</SideMenu>
					</section>
					<section>
						<header id="header"></header>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route path="/docs" component={Docs} />
							<Route path="/semantics" component={Semantics} />
							<Route path="/containers" component={Containers} />
							<Route path="/grids" component={Grids} />
							<Route path="/accordions" component={Accordions} />
							<Route path="/alerts" component={Alerts} />
							<Route path="/badges" component={Badges} />
							<Route path="/breadcrumbs" component={Breadcrumbs} />
							<Route path="/buttons" component={Buttons} />
							<Route path="/forms" component={Forms} />
							<Route path="/form-elements" component={FormElements} />
							<Route path="/heroes" component={Heroes} />
							<Route component={NotFound} />
						</Switch>
					</section>
				</main>
			</Router>
		)
	}
}

export default App
