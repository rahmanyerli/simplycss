import React, { Component } from 'react'
import Simply from '../js/simply'
import Range from '../js/simply.range'

class Ranges extends Component {

	componentDidMount() {
		Range.init()
		this.rgbChanged()
		this.hslChanged()
		Simply.loadSample("./html/range/range.html", null, "code-range")
		Simply.loadSample("./html/range/range-template.html", null, "code-range-template")
		Simply.bindClipboard()
	}

	rgbChanged = () => {
		const red = document.getElementById("range-red").value
		const green = document.getElementById("range-green").value
		const blue = document.getElementById("range-blue").value
		const rgb = document.getElementById("rgb")
		rgb.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
		rgb.textContent = `rgb(${red}, ${green}, ${blue})`
	}
	hslChanged = () => {
		const hue = document.getElementById("range-hue").value
		const saturation = document.getElementById("range-saturation").value
		const lightness = document.getElementById("range-lightness").value
		const hsl = document.getElementById("hsl")
		hsl.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
		hsl.textContent = `hsl(${hue}, ${saturation}%, ${lightness}%)`
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Ranges</h1>
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
						<label htmlFor="range-1">Range Left</label>
						<div className="range">
							<input type="range" id="range-1" min="0" max="100" step="1" defaultValue="50" />
							<input type="number" data-target="range-1" min="0" max="100" step="1" defaultValue="50" />
						</div>
						<br />
						<label htmlFor="range-2">Range Right</label>
						<div className="range">
							<input type="number" data-target="range-2" min="0" max="100" step="1" defaultValue="50" />
							<input type="range" id="range-2" min="0" max="100" step="1" defaultValue="50" />
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-range">Copy</button>
							<pre className="language-html"><code id="code-range"></code></pre>
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
								<h5>RGB Color</h5>
							</header>
							<hr />
							<main>
								<div id="rgb" className="padding-button border text-center color-white border-radius"></div>
								<br />
								<label htmlFor="range-red">Red</label>
								<div className="range">
									<input type="range" id="range-red" min="0" max="255" step="1" defaultValue="255" onChange={this.rgbChanged} />
									<input type="number" data-target="range-red" min="0" max="255" step="1" defaultValue="255" readOnly />
								</div>
								<label htmlFor="range-green">Green</label>
								<div className="range">
									<input type="range" id="range-green" min="0" max="255" step="1" defaultValue="85" onChange={this.rgbChanged} />
									<input type="number" data-target="range-green" min="0" max="255" step="1" defaultValue="85" readOnly />
								</div>
								<label htmlFor="range-blue">Blue</label>
								<div className="range">
									<input type="range" id="range-blue" min="0" max="255" step="1" defaultValue="102" onChange={this.rgbChanged} />
									<input type="number" data-target="range-blue" min="0" max="255" step="1" defaultValue="102" readOnly />
								</div>
							</main>
						</form>
						<form className="span-6">
							<header>
								<h5>HSL Color</h5>
							</header>
							<hr />
							<main>
								<div id="hsl" className="padding-button border text-center color-white border-radius"></div>
								<br />
								<label htmlFor="range-hue">Hue</label>
								<div className="range">
									<input type="number" data-target="range-hue" min="0" max="360" step="1" defaultValue="180" readOnly />
									<input type="range" id="range-hue" min="0" max="360" step="1" defaultValue="180" onChange={this.hslChanged} />
								</div>
								<label htmlFor="range-saturation">Saturation (%)</label>
								<div className="range">
									<input type="number" data-target="range-saturation" min="0" max="100" step="1" defaultValue="70" readOnly />
									<input type="range" id="range-saturation" min="0" max="100" step="1" defaultValue="70" onChange={this.hslChanged} />
								</div>
								<label htmlFor="range-lightness">Lightness (%)</label>
								<div className="range">
									<input type="number" data-target="range-lightness" min="0" max="100" step="1" defaultValue="45" readOnly />
									<input type="range" id="range-lightness" min="0" max="100" step="1" defaultValue="45" onChange={this.hslChanged} />
								</div>
							</main>
						</form>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-range-template">Copy</button>
							<pre className="language-html"><code id="code-range-template"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Ranges