import React, { Component } from 'react'
import Simply from '../js/simply'

class Forms extends Component {

	componentDidMount() {
		Simply.loadSample("../html/form/form.xml", null, "code-form")
		Simply.loadSample("../html/form/form-theme.xml", null, "code-form-theme")
		Simply.loadSample("../html/form/form-template.xml", null, "code-form-template")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Form</h1>
					</header>
					<hr />
					<main>
						<em>
							Design your form component with standart <var>header-main-footer</var> structure.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Default</h3>
					</header>
					<main className="margin-top">
						<form>
							<header>
								<h5>Login</h5>
							</header>
							<hr />
							<main>
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="email..." />
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="password..." />
								<div className="margin-y-half">
									<input type="checkbox" name="remember" id="remember" />
									<label htmlFor="remember">Remember me?</label>
								</div>
							</main>
							<hr />
							<footer className="cols gap-half">
								<button className="span-3" type="button">Login</button>
							</footer>
						</form>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-form">Copy</button>
							<pre className="language-html"><code id="code-form"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Theming</h3>
					</header>
					<main className="margin-top">
						<form className="bg-light">
							<header>
								<h5>Login</h5>
							</header>
							<hr />
							<main>
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="email..." />
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="password..." />
								<div className="margin-y-half">
									<input type="checkbox" name="remember2" id="remember2" />
									<label htmlFor="remember2">Remember me?</label>
								</div>
							</main>
							<hr />
							<footer className="cols gap-half">
								<button className="bg-primary span-3" type="button">Login</button>
								<button className="bg-secondary span-3" type="button">Password Reset</button>
							</footer>
						</form>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-form-theme">Copy</button>
							<pre className="language-html"><code id="code-form-theme"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Template</h3>
					</header>
					<main className="margin-top cols gap-double">
						<form className="span-6">
							<header>
								<h5>Contact Info</h5>
							</header>
							<hr />
							<main>
								<label htmlFor="title">Title</label>
								<input type="text" placeholder="title..." />
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="email..." />
								<label htmlFor="phone">Phone</label>
								<input type="tel" placeholder="phone..." />
								<label htmlFor="mobile">Mobile</label>
								<input type="tel" placeholder="mobile..." />
							</main>
							<hr />
							<footer className="cols gap-half">
								<button className="bg-teal span-6" type="button">Save</button>
							</footer>
						</form>

						<form className="span-6">
							<header>
								<h5>Address</h5>
							</header>
							<hr />
							<main>
								<label htmlFor="street">Street</label>
								<input type="text" placeholder="street..." />
								<label htmlFor="city">City</label>
								<input type="text" placeholder="city..." />
								<label htmlFor="state">State</label>
								<input type="text" placeholder="state..." />
								<label htmlFor="postalcode">Postal Code</label>
								<input type="text" placeholder="postal code..." />
							</main>
							<hr />
							<footer className="cols gap-half">
								<button className="bg-teal span-6" type="button">Save</button>
							</footer>
						</form>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-form-template">Copy</button>
							<pre className="language-html"><code id="code-form-template"></code></pre>
						</figure>
					</main>
				</article>

			</section>
		)
	}
}

export default Forms