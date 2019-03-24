import React, { Component } from 'react'
import Simply from '../js/simply'

class Buttons extends Component {

	componentDidMount() {
		Simply.loadSample("./html/button/button.html", null, "code-button")
		Simply.loadSample("./html/button/button-out.html", null, "code-button-out")
		Simply.loadSample("./html/button/button-out-white.html", null, "code-button-out-white")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Buttons</h1>
					</header>
					<hr />
					<main className="margin-top-double">
						<div className="cols gap-half">
							<div className="span-2">
								<button type="button">default</button>
							</div>
							<div className="span-2">
								<button className="bg-primary" type="button">bg-primary</button>
							</div>
							<div className="span-2">
								<button className="bg-secondary" type="button">bg-secondary</button>
							</div>
							<div className="span-2">
								<button className="bg-blue" type="button">bg-blue</button>
							</div>
							<div className="span-2">
								<button className="bg-teal" type="button">bg-teal</button>
							</div>
							<div className="span-2">
								<button className="bg-green" type="button">bg-green</button>
							</div>
							<div className="span-2">
								<button className="bg-yellow" type="button">bg-yellow</button>
							</div>
							<div className="span-2">
								<button className="bg-orange" type="button">bg-orange</button>
							</div>
							<div className="span-2">
								<button className="bg-red" type="button">bg-red</button>
							</div>
							<div className="span-2">
								<button className="bg-purple" type="button">bg-purple</button>
							</div>
							<div className="span-2">
								<button className="bg-white" type="button">bg-white</button>
							</div>
							<div className="span-2">
								<button className="bg-dark" type="button">bg-dark</button>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-button">Copy</button>
							<pre className="language-html"><code id="code-button"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Outline Buttons</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-half">
							<div className="span-2">
								<button className="out-primary" type="button">out-primary</button>
							</div>
							<div className="span-2">
								<button className="out-secondary" type="button">out-secondary</button>
							</div>
							<div className="span-2">
								<button className="out-blue" type="button">out-blue</button>
							</div>
							<div className="span-2">
								<button className="out-teal" type="button">out-teal</button>
							</div>
							<div className="span-2">
								<button className="out-green" type="button">out-green</button>
							</div>
							<div className="span-2">
								<button className="out-yellow" type="button">out-yellow</button>
							</div>
							<div className="span-2">
								<button className="out-orange" type="button">out-orange</button>
							</div>
							<div className="span-2">
								<button className="out-red" type="button">out-red</button>
							</div>
							<div className="span-2">
								<button className="out-purple" type="button">out-purple</button>
							</div>
							<div className="span-2">
								<button className="out-dark" type="button">out-dark</button>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-button-out">Copy</button>
							<pre className="language-html"><code id="code-button-out"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Outline White</h3>
					</header>
					<main className="margin-top">
						<div className="cols">
							<div className="span-3 padding bg-primary">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-secondary">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-blue">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-teal">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-green">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-yellow">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-orange">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-red">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-purple">
								<button className="out-white" type="button">out-white</button>
							</div>
							<div className="span-3 padding bg-dark">
								<button className="out-white" type="button">out-white</button>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-button-out-white">Copy</button>
							<pre className="language-html"><code id="code-button-out-white"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Buttons