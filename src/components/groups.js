import React, { Component } from 'react'
import Simply from '../js/simply'

class Groups extends Component {

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
						<h1>Groups</h1>
					</header>
					<hr />
					<main>
						<em>

						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Default</h3>
					</header>
					<main className="margin-top">
						<div className="group">
							<label className="span-6">First Name</label>
							<input className="span-6" type="text" placeholder="first name" />
						</div>
						<div className="group margin-top-half">
							<label className="span-6">Last Name</label>
							<input className="span-6" type="text" placeholder="last name" />
						</div>
						<div className="group margin-top-half">
							<input className="span-6" type="email" placeholder="email" />
							<input className="span-6" type="tel" placeholder="tel" />
						</div>
						<div className="group margin-top-half">
							<input className="span-4" type="text" placeholder="city" />
							<select className="span-4" defaultValue="" required>
								<option className="color-red" disabled value="">state</option>
								<option value="NSW">New South Wales</option>
								<option value="QLD">Queensland</option>
								<option className="color-red" value="SA">South Australia</option>
								<option value="TAS">Tasmania</option>
								<option value="VIC">Victoria</option>
								<option value="WA">Western Australia</option>
							</select>
							<input className="span-4" type="number" placeholder="zip code" />
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-input">Copy</button>
							<pre className="language-html"><code id="code-input"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Template</h3>
					</header>
					<main className="margin-top">
						<div className="group">
							<label className="span-3">Keyword</label>
							<input className="span-6" type="text" placeholder="text" />
							<button className="span-3 icon icon-left icon-search-dark" type="button">Search</button>
						</div>
						<div className="group margin-top">
							<label className="span-3">Math</label>
							<input className="span-3" type="number" placeholder="number" />
							<input className="span-3" type="number" placeholder="number" />
							<button className="span-1 icon icon-plus-dark" type="button"></button>
							<button className="span-1 icon icon-minus-dark" type="button"></button>
							<button className="span-1 icon icon-divide-dark" type="button"></button>
						</div>
						<div className="group margin-top">
							<label className="span-4 icon icon-right icon-email-dark">Email</label>
							<input className="span-8" type="email" placeholder="email" />
						</div>
						<div className="group margin-top">
							<label className="span-1 icon icon-email-dark"></label>
							<input className="span-5" type="email" placeholder="email" />
							<label className="span-1 icon icon-password-dark"></label>
							<input className="span-5" type="password" placeholder="password" />
						</div>
						<div className="group margin-top">
							<label className="span-1 icon icon-list-dark"></label>
							<select className="span-8">
								<option>Select...</option>
								<option>Option 1</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</select>
							<button className="span-3 icon icon-left icon-download-dark" type="button">Download</button>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-input">Copy</button>
							<pre className="language-html"><code id="code-input"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Theming</h3>
					</header>
					<main className="margin-top">
						<div className="group radius-full">
							<label className="span-4">Keyword</label>
							<input className="span-7" type="text" placeholder="text" />
							<button className="span-1 bg-primary icon icon-search-light" type="button">&nbsp;</button>
						</div>
						<div className="group radius-none margin-top">
							<input className="span-4" type="number" placeholder="number" />
							<input className="span-4" type="number" placeholder="number" />
							<button className="span-1 bg-secondary icon icon-plus-light" type="button">&nbsp;</button>
							<button className="span-1 bg-secondary icon icon-minus-light" type="button">&nbsp;</button>
							<button className="span-1 bg-secondary icon icon-cancel-light" type="button">&nbsp;</button>
							<button className="span-1 bg-secondary icon icon-divide-light" type="button">&nbsp;</button>
						</div>
						<div className="group margin-top">
							<label className="span-4 bg-medium icon icon-right icon-email-dark">Email</label>
							<input className="span-8" type="email" placeholder="email" />
						</div>
						<div className="group margin-top">
							<label className="span-1 bg-green icon icon-email-light"></label>
							<input className="span-5 bg-dark color-light" type="email" placeholder="email" />
							<label className="span-1 bg-green icon icon-password-light"></label>
							<input className="span-5 bg-dark color-light" type="password" placeholder="password" />
						</div>
						<div className="group margin-top">
							<label className="span-1 bg-orange icon icon-list-light"></label>
							<select className="span-8">
								<option>Select...</option>
								<option>Option 1</option>
								<option>Option 2</option>
								<option>Option 3</option>
							</select>
							<button className="span-3 bg-orange icon icon-left icon-download-light" type="button">Download</button>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-input">Copy</button>
							<pre className="language-html"><code id="code-input"></code></pre>
						</figure>
					</main>
				</article>

			</section>
		)
	}
}

export default Groups