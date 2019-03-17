import React, { Component } from 'react'
import Simply from '../js/simply'
import Accordion from '../js/simply.accordion'

class Accordions extends Component {

	componentDidMount() {
		Accordion.init()
		Simply.loadSample("../html/accordion/accordion.xml", null, "code-accordion")
		Simply.loadSample("../html/accordion/accordion-icon.xml", null, "code-accordion-icon")
		Simply.loadSample("../html/accordion/accordion-toggle.xml", null, "code-accordion-toggle")
		Simply.loadSample("../html/accordion/accordion-theme.xml", null, "code-accordion-theme")
		Simply.loadSample("../html/accordion/accordion-js.xml", null, "code-accordion-js")
		Simply.bindClipboard()
	}

	expandAll = () => {
		const accordions = document.querySelectorAll('#accordion-container .accordion')
		accordions.forEach(accordion => {
			Accordion.expandAccordion(accordion)
		})
	}

	collapseAll = () => {
		const accordions = document.querySelectorAll('#accordion-container .accordion')
		accordions.forEach(accordion => {
			Accordion.collapseAccordion(accordion)
		})
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Accordion</h1>
					</header>
					<hr />
					<main>
						<em>
							The usage of the accordion component is quite simple. Add accordion class to the section.
							Use header and main elements for creating the main structure in the section element. In the header element, there
							must be a button element to trigger expand-collapse events. You can customize the main element according to your
							needs. You can expand/collapse accordions dynamically by using Javascript.
						</em>
						<div className="alert bg-primary margin-top">
							Note: JS is required for this component.
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>
							Syntax
						</h3>
					</header>
					<main>
						<table className="margin-top border text-left">
							<thead>
								<tr>
									<th>Class</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><var>.accordion</var></td>
									<td>Converts the section element into the accordion component.</td>
								</tr>
								<tr>
									<td><var>.toggle</var></td>
									<td>Creates toggle feature between the accordions.</td>
								</tr>
								<tr>
									<td><var>[data-icon]</var></td>
									<td>Adds an icon animation feature to the button in the accordion header.</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h4>Default</h4>
					</header>
					<main className="margin-top">
						<div className="accordion">
							<header>
								<button className="text-left">Panel - 1</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
							</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="text-left">Panel - 2</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="text-left">Panel - 3</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-accordion">Copy</button>
							<pre className="language-html"><code id="code-accordion"></code></pre>
						</figure>
					</main>
				</article>


				<article className="margin-top-double">
					<header>
						<h3>Icon Animation</h3>
					</header>
					<main className="margin-top">
						<div className="accordion">
							<header>
								<button className="bg-primary text-left" data-icon>Panel - 1</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="bg-primary text-left" data-icon>Panel - 2</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="bg-primary text-left" data-icon>Panel - 3</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-accordion-icon">Copy</button>
							<pre className="language-html"><code id="code-accordion-icon"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Toggle</h3>
					</header>
					<main className="margin-top">
						<div className="accordion toggle">
							<header>
								<button className="bg-blue text-left">Panel - 1</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion toggle margin-top-half">
							<header>
								<button className="bg-blue text-left">Panel - 2</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion toggle margin-top-half">
							<header>
								<button className="bg-blue text-left">Panel - 3</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-accordion-toggle">Copy</button>
							<pre className="language-html"><code id="code-accordion-toggle"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Theming</h3>
					</header>
					<main className="margin-top">
						<p>
							Add the classes you want to the <var>&lt;button&gt;</var> in the <var>&lt;header&gt;</var> and create your own
						theme. You can add multiple classes to the <var>&lt;button&gt;</var> such as <var>.bg-blue</var>,
						<var>.text-left</var>, <var>.border-none</var> etc.
						</p>
						<div className="accordion toggle margin-top-double">
							<header>
								<button className="bg-blue text-left">Panel - 1</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion toggle margin-top-half">
							<header>
								<button className="bg-orange text-left">Panel - 2</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion toggle margin-top-half">
							<header>
								<button className="bg-green text-left">Panel - 3</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-accordion-theme">Copy</button>
							<pre className="language-html"><code id="code-accordion-theme"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Javascript</h3>
					</header>
					<main id="accordion-container" className="margin-top">
						<div className="cols gap-half">
							<button className="span-2" type="button" onClick={this.expandAll}>Expand All</button>
							<button className="span-2" type="button" onClick={this.collapseAll}>Collapse All</button>
						</div>
						<div className="accordion margin-top">
							<header>
								<button className="bg-teal text-left">Panel - 1</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="bg-teal text-left">Panel - 2</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
						<div className="accordion margin-top-half">
							<header>
								<button className="bg-teal text-left">Panel - 3</button>
							</header>
							<main>
								<p className="padding border margin-top-half">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima distinctio inventore quasi laudantium
									labore esse magnam tenetur ab enim, atque, repudiandae, eos eum ipsum alias vel quod incidunt reiciendis.
								</p>
							</main>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-accordion-js">Copy</button>
							<pre className="language-html"><code id="code-accordion-js"></code></pre>
						</figure>
					</main>
				</article>

			</section>
		)
	}
}

export default Accordions
