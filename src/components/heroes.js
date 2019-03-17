import React, { Component } from 'react'
import Simply from '../js/simply'

class Heroes extends Component {

	componentDidMount() {
		Simply.loadSample("../html/hero/hero.xml", null, "code-hero")
		Simply.loadSample("../html/hero/hero-template.xml", null, "code-hero-template")
		Simply.loadSample("../html/hero/hero-theme.xml", null, "code-hero-theme")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>

				<article>
					<header>
						<h1>Hero</h1>
					</header>
					<hr />
					<main>
						<em>
							Hero is a large web message component, prominently placed on a web page, generally in the front and center.
							The hero is the first visual element a visitor encounters on the site.
							It presents an overview of the site's most important content.
							A hero often consists of header, image and text.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Default</h3>
					</header>
					<main className="margin-top">
						<div className="hero">
							<header>
								<h1>Hero Title</h1>
							</header>
							<main>
								<em>
									Vestibulum auctor quis dolor eu mattis.
									Nullam vulputate sapien eget dui pretium, auctor viverra augue ultricies.
									In hac habitasse platea dictumst.
									Suspendisse elementum purus vestibulum risus iaculis hendrerit.
								</em>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-hero">Copy</button>
							<pre className="language-html"><code id="code-hero"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Template</h3>
					</header>
					<main className="margin-top">
						<p>
							You can use the standard <var>header-main-footer</var> structure according to your needs.
						</p>
						<div className="hero">
							<header>
								<h1>Nunc Suscipit</h1>
							</header>
							<hr />
							<main className="cols gap-double">
								<section className="span-4">
									<h4>Vestibulum</h4>
									<em>
										Vestibulum auctor quis dolor eu mattis.
										Nullam vulputate sapien eget dui pretium, auctor viverra augue ultricies.
									</em>
								</section>
								<section className="span-4">
									<h4>Maecenas</h4>
									<em>
										Maecenas vehicula erat id congue hendrerit.
										Proin congue mauris ut ipsum rhoncus pharetra.
									</em>
								</section>
								<section className="span-4">
									<h4>Suspendisse</h4>
									<em>
										In hac habitasse platea dictumst.
										Suspendisse elementum purus vestibulum risus iaculis hendrerit.
									</em>
								</section>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-hero-template">Copy</button>
							<pre className="language-html"><code id="code-hero-template"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Theming</h3>
					</header>
					<main className="margin-top">
						<div className="hero bg-secondary">
							<header>
								<h1 className="color-yellow">Hero Title</h1>
							</header>
							<hr />
							<main>
								<em className="color-light">
									Vestibulum auctor quis dolor eu mattis.
									Nullam vulputate sapien eget dui pretium, auctor viverra augue ultricies.
									In hac habitasse platea dictumst.
									Suspendisse elementum purus vestibulum risus iaculis hendrerit.
									&nbsp;<a className="color-orange" href="/">www.example.com</a>
								</em>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-hero-theme">Copy</button>
							<pre className="language-html"><code id="code-hero-theme"></code></pre>
						</figure>
					</main>
				</article>

			</section>
		)
	}
}

export default Heroes