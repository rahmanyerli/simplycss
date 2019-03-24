import React, { Component } from 'react'
import Simply from '../js/simply'

class Sample extends Component {

	componentDidMount() {
		// Simply.loadSample("./html/button/button.xml", null, "code-button")
		// Simply.loadSample("./html/button/button-out.xml", null, "code-button-out")
		// Simply.loadSample("./html/button/button-out-white.xml", null, "code-button-out-white")
		// Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Forms</h1>
					</header>
					<hr />
					<main>
						<em>

						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Header, Main, Footer</h3>
					</header>
					<main>
					</main>
				</article>

				<article>
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-">Copy</button>
							<pre className="language-html"><code id="code-"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Sample