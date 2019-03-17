import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {

	// componentDidMount() {
	// 	document.getElementById("sidenav").style.display = "none"
	// 	document.getElementById("menu-button").style.display = "none"
	// }

	// componentWillUnmount() {
	// 	document.getElementById("sidenav").style.display = "inline-block"
	// 	document.getElementById("menu-button").style.display = "inline-block"
	// }

	render() {
		return (
			<section>
				<h1>
					Simply CSS
				</h1>
				<hr />
				<main>
					<section>
						<article>
							<header>
								<h3 className="color-primary">"Simplicity is the ultimate sophistication."</h3>
							</header>
							<main>
								<em>
									Build your web projects with minimum effort by using Simply CSS. Customize your template easily just using LESS or
									SASS variables and mixins. Use or extend the prebuilt grid-systems and components.
								</em>
							</main>
						</article>
						<article>
							<main>
								<section className="cols gap">
									<section className="span-3 padding-y text-center">
										<h5>Modern</h5>
										<p>CSS3 Less/Sass</p>
										<div className="padding">
											<img src="../images/modern.svg" alt="Modern" />
										</div>
									</section>
									<section className="span-3 padding-y text-center">
										<h5>Responsive</h5>
										<p>Mobile First</p>
										<div className="padding">
											<img src="../images/responsive.svg" alt="Responsive" />
										</div>
									</section>
									<section className="span-3 padding-y text-center">
										<h5>Open Source</h5>
										<p>GitHub</p>
										<div className="padding">
											<img src="../images/github.svg" alt="GitHub" />
										</div>
									</section>
									<section className="span-3 padding-y text-center">
										<h5>Modular</h5>
										<p>Partial CSS</p>
										<div className="padding">
											<img src="../images/modular.svg" alt="Modular" />
										</div>
									</section>
								</section>
							</main>
							<hr />
							<footer className="cols gap">
								<NavLink className="span-3 button bg-primary" to="/docs">Documentation</NavLink>
								<a className="span-3 button bg-secondary"
									href="https://github.com/rahmanyerli/simplycss"
									target="_blank"
									rel="noopener noreferrer">Download</a>
							</footer>
						</article>
					</section>
				</main>
			</section>
		)
	}
}

export default Home
