import React, { Component } from 'react'
import Simply from '../js/simply'
import Alert from '../js/simply.alert'

class Alerts extends Component {

	componentDidMount() {
		Alert.init()
		Simply.loadSample("./html/alert/alert.html", null, "code-alert")
		Simply.loadSample("./html/alert/alert-theme.html", null, "code-alert-theme")
		Simply.loadSample("./html/alert/alert-template.html", null, "code-alert-template")
		Simply.loadSample("./html/alert/alert-dismiss.html", null, "code-alert-dismiss")
		Simply.loadSample("./html/alert/alert-js.html", null, "code-alert-js")
		Simply.bindClipboard()
	}

	addAlert = () => {
		let date = new Date();
		let time = date.toLocaleTimeString();
		let alert = document.createElement("div");
		alert.className = "alert bg-primary margin-top-half";
		alert.setAttribute("data-dismiss", "true");
		alert.textContent = `This alert was created at ${time}`;
		// bind alert events
		Alert.bindAlert(alert);
		// append to container
		document.getElementById("alerts").appendChild(alert);
	}

	createAlert = () => {
		let date = new Date();
		let time = date.toLocaleTimeString();
		let alert = Alert.createAlert(`<div class='alert bg-secondary margin-top-half' data-dismiss='true'>${time}</div>`);
		document.getElementById("alerts").appendChild(alert);
	}

	dismiss = (id) => {
		// single
		let alert = document.getElementById(id);
		Alert.dismissAlert(alert);
	}

	dismissFirst = () => {
		// single
		let alert = document.querySelector("#alerts > .alert:first-child");
		Alert.dismissAlert(alert);
	}

	dismissLast = () => {
		// single
		let alert = document.querySelector("#alerts > .alert:last-child");
		Alert.dismissAlert(alert);
	}

	dismissAll = () => {
		// multiple
		let alerts = document.querySelectorAll("#alerts > .alert");
		Alert.dismissAlerts(alerts);
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Alerts</h1>
					</header>
					<hr />
					<main>
						<em>
							Make your application more user-friendly by using alerts. Just add an <var>.alert</var> class to the div
							element. Use different colors and themes for different alerts. Make alerts dismissible by adding the dismiss
							button. You can add/remove alerts dynamically by using JS.
						</em>
						<div className="alert bg-primary">
							JS is required for this component.
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Default
						</h3>
					</header>
					<main className="margin-top">
						<div className="alert">
							Alert default!
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-alert">Copy</button>
							<pre className="language-html"><code id="code-alert"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Syntax
						</h3>
					</header>
					<main className="margin-top">
						<table className="border text-left">
							<thead>
								<tr>
									<th>
										Class
									</th>
									<th>
										Description
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<var>.alert</var>
									</td>
									<td>
										Converts div element into an alert.
									</td>
								</tr>
								<tr>
									<td>
										<var>[data-dismis="true"]</var>
									</td>
									<td>
										Adds dismissible feature to the alert.
									</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Dismiss
						</h3>
					</header>
					<main>
						<p>
							Adding the <var>data-dismiss="true"</var> attribute to the alert component is enough for self-closing.
							If you want to close an alert component with a button, add <var>data-dismiss="true"</var> and <var>data-target="your-alert-id"</var> attributes to your button.
						</p>
						<div className="alert margin-top-half" data-dismiss="true">
							Alert 1!
						</div>
						<div className="alert margin-top-half" data-dismiss="true">
							Alert 2!
						</div>
						<div className="alert margin-top-half" data-dismiss="true">
							Alert 3!
						</div>
						<div className="alert margin-top-half" id="alert-1">
							<h4>Lorem ipsum dolor</h4>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
								labore esse magnam tenetur ab enim, atque, repudiandae.
							</p>
							<div className="cols">
								<button className="span-2 bg-red" type="button" data-dismiss="true" data-target="alert-1">Dismiss</button>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-alert-dismiss">Copy</button>
							<pre className="language-html"><code id="code-alert-dismiss"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Theming
						</h3>
					</header>
					<main>
						<div className="alert bg-primary margin-top-half" data-dismiss="true">
							Alert primary!
						</div>
						<div className="alert bg-secondary margin-top-half" data-dismiss="true">
							Alert secondary!
						</div>
						<div className="alert bg-blue margin-top-half" data-dismiss="true">
							Alert blue!
						</div>
						<div className="alert bg-teal margin-top-half" data-dismiss="true">
							Alert teal!
						</div>
						<div className="alert bg-green margin-top-half" data-dismiss="true">
							Alert green!
						</div>
						<div className="alert bg-yellow margin-top-half" data-dismiss="true">
							Alert yellow!
						</div>
						<div className="alert bg-orange margin-top-half" data-dismiss="true">
							Alert orange!
						</div>
						<div className="alert bg-red margin-top-half" data-dismiss="true">
							Alert red!
						</div>
						<div className="alert bg-purple margin-top-half" data-dismiss="true">
							Alert purple!
						</div>
						<div className="alert bg-light margin-top-half" data-dismiss="true">
							Alert light!
						</div>
						<div className="alert bg-medium margin-top-half" data-dismiss="true">
							Alert medium!
						</div>
						<div className="alert bg-dark margin-top-half" data-dismiss="true">
							Alert dark!
						</div>
					</main>
				</article>

				<article>
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-alert-theme">Copy</button>
							<pre className="language-html"><code id="code-alert-theme"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Template
						</h3>
					</header>
					<main className="margin-top">
						<div className="alert bg-light" data-dismiss="true">
							<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium necessitatibus
								aspernatur tenetur porro.
							</p>
							<hr />
							<p>
								<a href="/">read more...</a>
							</p>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-alert-template">Copy</button>
							<pre className="language-html"><code id="code-alert-template"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							JavaScript
						</h3>
					</header>
					<main className="margin-top">
						<section className="cols gap-half">
							<button className="span-2 bg-primary" type="button" id="button-add" onClick={this.addAlert}>Add Alert</button>
							<button className="span-2 bg-secondary" type="button" id="button-create" onClick={this.createAlert}>Create Alert</button>
							<button className="span-2 bg-blue" type="button" id="button-dismiss-first" onClick={this.dismissFirst}>Dismiss First</button>
							<button className="span-2 bg-teal" type="button" id="button-dismiss-last" onClick={this.dismissLast}>Dismiss Last</button>
							<button className="span-2 bg-purple" type="button" id="button-dismiss-all" onClick={this.dismissAll}>Dismiss All</button>
						</section>
						<div id="alerts" className="margin-top"></div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-alert-js">Copy</button>
							<pre className="language-html"><code id="code-alert-js"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Alerts
