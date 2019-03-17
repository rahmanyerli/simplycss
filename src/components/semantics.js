import React, { Component } from 'react'
import Simply from '../js/simply'

class Semantics extends Component {

	componentDidMount() {
		Simply.loadSample("../html/semantic/semantic.xml", null, "code-semantic")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Semantics</h1>
					</header>
					<hr />
					<main>
						<em>
							Many web sites contain HTML code like:&nbsp;
							<var>&lt;div id="nav"&gt;</var>,&nbsp;
							<var>&lt;div className="header"&gt;</var>,&nbsp;
							<var>&lt;div id="footer"&gt;</var>&nbsp;
							to indicate navigation, header and footer.
							HTML5 offers new semantic elements to define different parts of a web page.
						</em>
						<div>
							<header className="padding border">
								<span>header</span>
								<nav className="padding border margin-top">
									<span>nav</span>
								</nav>
							</header>
							<main className="padding border margin-top">
								<span>main</span>
								<section className="padding border margin-top">
									<span>section</span>
									<div className="cols gap">
										<aside className="span-3 padding border margin-top">
											<span>aside</span>
											<nav className="padding border margin-top">
												<span>nav</span>
												<ul className="mobile-none">
													<li className="padding margin-top">&nbsp;</li>
													<li className="padding margin-top">&nbsp;</li>
												</ul>
											</nav>
										</aside>
										<section className="span-9 padding border margin-top">
											<span>section</span>
											<article className="span-9 padding border margin-top">
												<span>article</span>
											</article>
											<article className="span-9 padding border margin-top">
												<span>article</span>
											</article>
											<article className="span-9 padding border margin-top">
												<span>article</span>
											</article>
										</section>
									</div>
								</section>
							</main>
							<footer className="padding border margin-top">
								<span>footer</span>
							</footer>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-semantic">Copy</button>
							<pre className="language-html"><code id="code-semantic"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h4>Why Semantic Elements?</h4>
					</header>
					<main>
						<p>
							With HTML4, developers used their own id/class names to style elements: header, top, bottom, footer, menu,
							navigation, main, container, content, article, sidebar, topnav, etc.
						</p>
						<p>
							This made it impossible for search engines to identify the correct web page content.
							With the new HTML5 elements (<var>header</var>, <var>main</var>, <var>footer</var>, <var>aside</var>, <var>nav</var>,
							<var>section</var>, <var>article</var> etc.),
							this will become easier. A semantic element clearly describes its meaning to both the browser and the developer.
							HTML5 semantic elements are supported in all modern browsers.
						</p>
						<p>
							According to the W3C, a Semantic Web:
						</p>
						<p className="color-primary">"Allows data to be shared and reused across applications, enterprises and communities."
						</p>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h4>New Semantic Elements</h4>
					</header>
					<main>
						<table className="border text-left">
							<thead>
								<tr>
									<th>Tag</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><var>article</var></td>
									<td>Defines an article in a document</td>
								</tr>
								<tr>
									<td><var>aside</var></td>
									<td>Defines content aside from the page content</td>
								</tr>
								<tr>
									<td><var>bdi</var></td>
									<td>Isolates a part of text that might be formatted in a different direction
									from other text outside it</td>
								</tr>
								<tr>
									<td><var>details</var></td>
									<td>Defines additional details that the user can view or hide</td>
								</tr>
								<tr>
									<td><var>dialog</var></td>
									<td>Defines a dialog box or window</td>
								</tr>
								<tr>
									<td><var>figcaption</var></td>
									<td>Defines a caption for a figure element</td>
								</tr>
								<tr>
									<td><var>figure</var></td>
									<td>Defines self contained content</td>
								</tr>
								<tr>
									<td><var>footer</var></td>
									<td>Defines a footer for a document or section</td>
								</tr>
								<tr>
									<td><var>header</var></td>
									<td>Defines a header for a document or section</td>
								</tr>
								<tr>
									<td><var>main</var></td>
									<td>Defines the main content of a document</td>
								</tr>
								<tr>
									<td><var>mark</var></td>
									<td>Defines marked or highlighted text</td>
								</tr>
								<tr>
									<td><var>meter</var></td>
									<td>Defines a scalar measurement within a known range (a gauge)</td>
								</tr>
								<tr>
									<td><var>nav</var></td>
									<td>Defines navigation links</td>
								</tr>
								<tr>
									<td><var>progress</var></td>
									<td>Represents the progress of a task</td>
								</tr>
								<tr>
									<td><var>rp</var></td>
									<td>Defines what to show in browsers that do not support ruby annotations</td>
								</tr>
								<tr>
									<td><var>rt</var></td>
									<td>Defines an explanation and pronunciation of characters (for East Asian
									typography)</td>
								</tr>
								<tr>
									<td><var>ruby</var></td>
									<td>Defines a ruby annotation (for East Asian typography)</td>
								</tr>
								<tr>
									<td><var>section</var></td>
									<td>Defines a section in a document</td>
								</tr>
								<tr>
									<td><var>summary</var></td>
									<td>Defines a visible heading for a details element</td>
								</tr>
								<tr>
									<td><var>time</var></td>
									<td>Defines a date/time</td>
								</tr>
								<tr>
									<td><var>wbr</var></td>
									<td>Defines a possible line-break</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>
			</section>
		)
	}
}

export default Semantics