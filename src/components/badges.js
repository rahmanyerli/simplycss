import React, { Component } from 'react'
import Simply from '../js/simply'

class Badges extends Component {

	componentDidMount() {
		Simply.loadSample("../html/badge/badge.xml", null, "code-badge")
		Simply.loadSample("../html/badge/badge-theme.xml", null, "code-badge-theme")
		Simply.loadSample("../html/badge/badge-intable.xml", null, "code-badge-intable")
		Simply.loadSample("../html/badge/badge-intext.xml", null, "code-badge-intext")
		Simply.loadSample("../html/badge/badge-inlist.xml", null, "code-badge-inlist")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>
							Badge
						</h1>
					</header>
					<hr />
					<main>
						<em>
							Badges allow you to show some small notifications in your components. You can use it in many different components
							such as buttons, lists, tables, headers etc.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Default
						</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap">
							<button className="span-3">
								<span className="badge">44</span>
								Default Badge
						</button>
							<button className="span-3">
								Default Badge
							<span className="badge">16</span>
							</button>
							<button className="span-3">
								<span className="badge float-left">37</span>
								Left Badge
						</button>
							<button className="span-3">
								<span className="badge float-right">89</span>
								Right Badge
						</button>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-badge">Copy</button>
							<pre className="language-html"><code id="code-badge"></code></pre>
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
						<div className="cols gap">
							<button className="span-3 out-primary">
								<span className="badge float-left bg-primary color-white">A</span>
								Primary
							</button>
							<button className="span-3 out-secondary">
								<span className="badge float-left bg-secondary color-white">B</span>
								Secondary
							</button>
							<button className="span-3 bg-green">
								<span className="badge float-left bg-yellow radius-full">C</span>
								Yellow
							</button>
							<button className="span-3 bg-9">
								<span className="badge float-left bg-orange color-9 radius">D</span>
								Orange
							</button>
							<button className="span-3 bg-primary">
								<span className="badge float-left out-white">E</span>
								Out White
							</button>
							<button className="span-3 out-dark">
								<span className="badge float-left out-primary">F</span>
								Out Primary
							</button>
							<button className="span-3 bg-purple color-yellow">
								<span className="badge float-right out-yellow">G</span>
								Out Yellow
							</button>
							<button className="span-3 out-teal">
								<span className="badge float-right out-dark">H</span>
								Out Yellow
							</button>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-badge-theme">Copy</button>
							<pre className="language-html"><code id="code-badge-theme"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Badge In Table
						</h3>
					</header>
					<main className="margin-top">
						<table className="border text-left">
							<thead>
								<tr>
									<th>
										Product
									</th>
									<th>
										Price
									</th>
									<th className="text-center">
										Stock
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										Eggplant
									</td>
									<td>
										$12.99
									</td>
									<td className="text-center">
										<span className="badge bg-green color-white radius-full">78</span>
									</td>
								</tr>
								<tr>
									<td>
										Pumpkin
									</td>
									<td>
										$9.50
									</td>
									<td className="text-center">
										<span className="badge bg-red color-white radius-full">0</span>
									</td>
								</tr>
								<tr>
									<td>
										Lettuce
									</td>
									<td>
										$4.80
									</td>
									<td className="text-center">
										<span className="badge bg-orange color-white radius-full">2</span>
									</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-badge-intable">Copy</button>
							<pre className="language-html"><code id="code-badge-intable"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Badge In List
						</h3>
					</header>
					<main className="margin-top">
						<h5 className="color-purple">Grand Slam Winners</h5>
						<ul className="list border margin-top-half">
							<li>
								<span className="badge float-left bg-purple color-yellow">20</span>
								Roger Federer
							</li>
							<li>
								<span className="badge float-left bg-purple color-yellow">16</span>
								Rafael Nadal
							</li>
							<li>
								<span className="badge float-left bg-purple color-yellow">15</span>
								Novak Djokovic
							</li>
							<li>
								<span className="badge float-left bg-purple color-yellow">14</span>
								Pete Sampras
							</li>
						</ul>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-badge-inlist">Copy</button>
							<pre className="language-html"><code id="code-badge-inlist"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Badge In Text
						</h3>
					</header>
					<main className="margin-top">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Consequuntur porro ipsum
						<span className="badge bg-yellow">harum</span>
							alias neque delectus totam reprehenderit debitis, rem iure, vero,
						<span className="badge bg-yellow">repellat</span>
							quas perspiciatis quo voluptatibus. Doloremque, dolor quis! Inventore.
						</p>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-badge-intext">Copy</button>
							<pre className="language-html"><code id="code-badge-intext"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Badges
