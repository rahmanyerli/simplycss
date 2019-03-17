import React, { Component } from 'react'
import Simply from '../js/simply'

class Containers extends Component {

	componentDidMount() {
		Simply.loadSample("../html/container/container-64.xml", null, "code-container-64")
		Simply.loadSample("../html/container/container-80.xml", null, "code-container-80")
		Simply.loadSample("../html/container/container-90.xml", null, "code-container-90")
		Simply.loadSample("../html/container/container-105.xml", null, "code-container-105")
		Simply.loadSample("../html/container/container-120.xml", null, "code-container-120")
		Simply.loadSample("../html/container/container-other.xml", null, "code-container-other")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Container</h1>
					</header>
					<hr />
					<main>
						<em>
							You can use containers to adjust the width of your main content. Simply CSS gives you 5 different container options.
							The names has been adjusted according to the CSS rem measurement unit.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Syntax</h3>
					</header>
					<main className="margin-top">
						<table className="border text-left">
							<thead>
								<tr>
									<th>Class</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><var>.container-64</var></td>
									<td>Centered container with a maximum width of 64rem(1024px).</td>
								</tr>
								<tr>
									<td><var>.container-80</var></td>
									<td>Centered container with a maximum width of 80rem(1280px).</td>
								</tr>
								<tr>
									<td><var>.container-90</var></td>
									<td>Centered container with a maximum width of 90rem(1440px).</td>
								</tr>
								<tr>
									<td><var>.container-105</var></td>
									<td>Centered container with a maximum width of 105rem(1680px).</td>
								</tr>
								<tr>
									<td><var>.container-120</var></td>
									<td>Centered container with a maximum width of 120rem(1920px).</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<figure>
						<button type="button" data-role="clipboard" data-target="code-container-64">Copy</button>
						<pre className="language-html"><code id="code-container-64"></code></pre>
					</figure>

					<figure>
						<button type="button" data-role="clipboard" data-target="code-container-80">Copy</button>
						<pre className="language-html"><code id="code-container-80"></code></pre>
					</figure>

					<figure>
						<button type="button" data-role="clipboard" data-target="code-container-90">Copy</button>
						<pre className="language-html"><code id="code-container-90"></code></pre>
					</figure>

					<figure>
						<button type="button" data-role="clipboard" data-target="code-container-105">Copy</button>
						<pre className="language-html"><code id="code-container-105"></code></pre>
					</figure>

					<figure>
						<button type="button" data-role="clipboard" data-target="code-container-120">Copy</button>
						<pre className="language-html"><code id="code-container-120"></code></pre>
					</figure>
				</article>

				<article className="margin-top-double">
					<h3>Compatibility</h3>
					<main>
						<p>
							The container class is not only compatible with <var>body</var>, you can also use with other elements
							such as <var>article</var>, <var>section</var>, <var>div</var> etc.
						</p>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-container-other">Copy</button>
							<pre className="language-html"><code id="code-container-other"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Containers