import React, { Component } from 'react'
import Simply from '../js/simply'

class Breadcrumbs extends Component {

	componentDidMount() {
		Simply.loadSample("../html/breadcrumb/breadcrumb.xml", null, "code-breadcrumb")
		Simply.loadSample("../html/breadcrumb/breadcrumb-separator.xml", null, "code-breadcrumb-separator")
		Simply.loadSample("../html/breadcrumb/breadcrumb-theme.xml", null, "code-breadcrumb-theme")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Breadcrumb</h1>
					</header>
					<hr />
					<main>
						<em>
							Use breadcrumbs to show users their current position in the application hierarchically. This allows users to
							easily access their previous pages. Also, you can customize breadcrumbs by changing link separators and colors.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Default</h3>
					</header>
					<main className="margin-top">
						<ul className="breadcrumb">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-breadcrumb">Copy</button>
							<pre className="language-html"><code id="code-breadcrumb"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Separators
					</h3>
					</header>
					<main className="margin-top">
						<ul className="breadcrumb slash">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>
						<ul className="breadcrumb pipe margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb dash margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb arrow margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb tilde margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-breadcrumb-separator">Copy</button>
							<pre className="language-html"><code id="code-breadcrumb-separator"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Theming
					</h3>
					</header>
					<main className="margin-top">
						<ul className="breadcrumb slash bg-primary color-1">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb slash bg-purple color-yellow margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb slash bg-3 color-8 margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb slash bg-yellow color-red margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>

						<ul className="breadcrumb slash bg-dark color-medium margin-top">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Components</a>
							</li>
							<li>
								<a href="/">Breadcrumbs</a>
							</li>
						</ul>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-breadcrumb-theme">Copy</button>
							<pre className="language-html"><code id="code-breadcrumb-theme"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Breadcrumbs
