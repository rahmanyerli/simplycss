import React, { Component } from 'react'
import Simply from '../js/simply'

class FormElements extends Component {

	componentDidMount() {
		Simply.loadSample("../html/form-element/input.xml", null, "code-input")
		Simply.loadSample("../html/form-element/input-disabled.xml", null, "code-input-disabled")
		Simply.loadSample("../html/form-element/select.xml", null, "code-select")
		Simply.loadSample("../html/form-element/select-disabled.xml", null, "code-select-disabled")
		Simply.loadSample("../html/form-element/checkbox.xml", null, "code-checkbox")
		Simply.loadSample("../html/form-element/checkbox-disabled.xml", null, "code-checkbox-disabled")
		Simply.loadSample("../html/form-element/radio.xml", null, "code-radio")
		Simply.loadSample("../html/form-element/radio-disabled.xml", null, "code-radio-disabled")
		Simply.loadSample("../html/form-element/textarea.xml", null, "code-textarea")
		Simply.loadSample("../html/form-element/textarea-disabled.xml", null, "code-textarea-disabled")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Form Elements</h1>
					</header>
					<hr />
					<main>
						<em>
							Simply CSS detects inputs by their <var>tag names</var> and <var>type attributes</var>, and shapes them.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Inputs</h3>
					</header>
					<main className="margin-top">
						<label>Text</label>
						<input disabled type="text" placeholder="text..." />
						<label>Number</label>
						<input type="number" placeholder="number..." />
						<label>Search</label>
						<input type="search" placeholder="search..." />
						<label>Email</label>
						<input type="email" placeholder="email..." />
						<label>Password</label>
						<input type="password" placeholder="password..." />
						<label>Date</label>
						<input type="date" placeholder="date..." />
						<label>Date &amp; Time - Local</label>
						<input type="datetime-local" placeholder="datetime local..." />
						<label>Time</label>
						<input type="time" placeholder="time..." />
						<label>Month</label>
						<input type="month" placeholder="month..." />
						<label>Week</label>
						<input type="week" placeholder="week..." />
						<label>File</label>
						<input type="file" placeholder="file..." />
						<label>Url</label>
						<input type="url" placeholder="url..." />
						<label>Tel</label>
						<input type="tel" placeholder="tel..." />
						<label>Color</label>
						<input type="color" defaultValue="#FF6666" />
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
						<h3>Disabled Inputs</h3>
					</header>
					<main className="margin-top">
						<label>Text</label>
						<input type="text" placeholder="text..." defaultValue="Lorem ipsum dolor sit amet" disabled />
						<label>Number</label>
						<input type="number" placeholder="number..." defaultValue="11223344" disabled />
						<label>Search</label>
						<input type="search" placeholder="search..." defaultValue="John Doe" disabled />
						<label>Email</label>
						<input type="search" placeholder="search..." defaultValue="john.doe@example.com" disabled />
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-input-disabled">Copy</button>
							<pre className="language-html"><code id="code-input-disabled"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Selects</h3>
					</header>
					<main className="margin-top">
						<label>Default Options</label>
						<select>
							<option>Select...</option>
							<option defaultValue="1">Option 1</option>
							<option defaultValue="2">Option 2</option>
							<option defaultValue="3">Option 3</option>
						</select>
						<label>Option Groups</label>
						<select>
							<option>Select...</option>
							<optgroup label="Group 1">
								<option defaultValue="1">Option 1</option>
								<option defaultValue="2">Option 2</option>
								<option defaultValue="3">Option 3</option>
							</optgroup>
							<optgroup label="Group 2">
								<option defaultValue="A">Option A</option>
								<option defaultValue="B">Option B</option>
								<option defaultValue="C">Option C</option>
							</optgroup>
						</select>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-select">Copy</button>
							<pre className="language-html"><code id="code-select"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Disabled Selects</h3>
					</header>
					<main className="margin-top">
						<label>Default Options</label>
						<select disabled>
							<option>Select...</option>
							<option defaultValue="1">Option 1</option>
							<option defaultValue="2">Option 2</option>
							<option defaultValue="3">Option 3</option>
						</select>
						<label>Option Groups</label>
						<select disabled>
							<option>Select...</option>
							<optgroup label="Group 1">
								<option defaultValue="1">Option 1</option>
								<option defaultValue="2">Option 2</option>
								<option defaultValue="3">Option 3</option>
							</optgroup>
							<optgroup label="Group 2">
								<option defaultValue="A">Option A</option>
								<option defaultValue="B">Option B</option>
								<option defaultValue="C">Option C</option>
							</optgroup>
						</select>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-select-disabled">Copy</button>
							<pre className="language-html"><code id="code-select-disabled"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Checkboxes</h3>
					</header>
					<main className="margin-top">
						<input type="checkbox" id="checkbox-1" defaultChecked />
						<label htmlFor="checkbox-1">Item 1</label>
						<br />
						<input type="checkbox" id="checkbox-2" />
						<label htmlFor="checkbox-2">Item 2</label>
						<br />
						<input type="checkbox" id="checkbox-3" />
						<label htmlFor="checkbox-3">Item 3</label>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-checkbox">Copy</button>
							<pre className="language-html"><code id="code-checkbox"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Disabled Checkboxes</h3>
					</header>
					<main className="margin-top">
						<input type="checkbox" id="checkbox-4" disabled />
						<label htmlFor="checkbox-4">Disabled</label>
						<br />
						<input checked type="checkbox" id="checkbox-5" disabled />
						<label htmlFor="checkbox-5">Disabled &amp; Checked</label>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-checkbox-disabled">Copy</button>
							<pre className="language-html"><code id="code-checkbox-disabled"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Radios</h3>
					</header>
					<main className="margin-top">
						<input type="radio" name="items" id="radio-1" defaultChecked />
						<label htmlFor="radio-1">Item 1</label>
						<br />
						<input type="radio" name="items" id="radio-2" />
						<label htmlFor="radio-2">Item 2</label>
						<br />
						<input type="radio" name="items" id="radio-3" />
						<label htmlFor="radio-3">Item 3</label>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-radio">Copy</button>
							<pre className="language-html"><code id="code-radio"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Disabled Radios</h3>
					</header>
					<main className="margin-top">
						<input disabled type="radio" name="items-disabled" id="radio-4" />
						<label htmlFor="radio-4">Disabled</label>
						<br />
						<input disabled checked type="radio" name="items-disabled" id="radio-5" />
						<label htmlFor="radio-5">Disabled &amp; Checked</label>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-radio-disabled">Copy</button>
							<pre className="language-html"><code id="code-radio-disabled"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Textarea</h3>
					</header>
					<main className="margin-top">
						<label>Textarea</label>
						<textarea rows="4" placeholder="textarea..."></textarea>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-textarea">Copy</button>
							<pre className="language-html"><code id="code-textarea"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Disabled Textarea</h3>
					</header>
					<main className="margin-top">
						<label>Textarea</label>
						<textarea rows="4" 
							placeholder="textarea..." 
							disabled 
							defaultValue="Donec lobortis, quam vitae rhoncus imperdiet,
							ante mi malesuada justo, eu sagittis lorem elit at justo.
							Quisque ac libero porttitor, lacinia neque id, volutpat odio.
							Donec libero quam, molestie a arcu egestas, euismod convallis metus.
							In porta mollis lectus, vel lobortis justo pretium sit amet.">
						</textarea>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-textarea-disabled">Copy</button>
							<pre className="language-html"><code id="code-textarea-disabled"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default FormElements