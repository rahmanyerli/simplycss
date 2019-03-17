import React, { Component } from 'react'
import Simply from '../js/simply'

class Grids extends Component {

	componentDidMount() {
		Simply.loadSample("../html/grid/cols.xml", null, "code-cols")
		Simply.loadSample("../html/grid/cols-sum.xml", null, "code-cols-sum")
		Simply.loadSample("../html/grid/rows.xml", null, "code-rows")
		Simply.loadSample("../html/grid/gap.xml", null, "code-gap")
		Simply.loadSample("../html/grid/gap-quarter.xml", null, "code-gap-quarter")
		Simply.loadSample("../html/grid/gap-half.xml", null, "code-gap-half")
		Simply.loadSample("../html/grid/gap-one-half.xml", null, "code-gap-one-half")
		Simply.loadSample("../html/grid/gap-double.xml", null, "code-gap-double")
		Simply.loadSample("../html/grid/gap-none.xml", null, "code-gap-none")
		Simply.bindClipboard()
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Grid</h1>
					</header>
					<hr />
					<main>
						<em>
							You can create responsive and adaptive layouts by using the grid structure, which is designed vertically and
							horizontally according to the 12 fraction system.
						</em>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Columns Syntax</h3>
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
									<td><var>.cols</var></td>
									<td>The container class for grid columns.</td>
								</tr>
								<tr>
									<td><var>.cols</var></td>
									<td>The container class to always show items as desktop mode.</td>
								</tr>
								<tr>
									<td><var>.cols-fit</var></td>
									<td>Fits the currently available columns into space by expanding them.</td>
								</tr>
								<tr>
									<td><var>.cols-fill</var></td>
									<td>Fills the row with as many columns as it can fit.</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Span Syntax</h3>
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
									<td><var>.span-1</var></td>
									<td>Spans 1 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-2</var></td>
									<td>Spans 2 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-3</var></td>
									<td>Spans 3 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-4</var></td>
									<td>Spans 4 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-5</var></td>
									<td>Spans 5 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-6</var></td>
									<td>Spans 6 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-7</var></td>
									<td>Spans 7 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-8</var></td>
									<td>Spans 8 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-9</var></td>
									<td>Spans 9 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-10</var></td>
									<td>Spans 10 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-11</var></td>
									<td>Spans 11 fractions of 12 fractions in the grid.</td>
								</tr>
								<tr>
									<td><var>.span-12</var></td>
									<td>Spans all fractions of 12 fractions in the grid.</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<div className="cols gap">
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-11 padding-vertical border text-center">
							<p>11</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-10 padding-vertical border text-center">
							<p>10</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
						<div className="span-9 padding-vertical border text-center">
							<p>9</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-4 padding-vertical border text-center">
							<p>4</p>
						</div>
						<div className="span-8 padding-vertical border text-center">
							<p>8</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-5 padding-vertical border text-center">
							<p>5</p>
						</div>
						<div className="span-7 padding-vertical border text-center">
							<p>7</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-6 padding-vertical border text-center">
							<p>6</p>
						</div>
						<div className="span-6 padding-vertical border text-center">
							<p>6</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-7 padding-vertical border text-center">
							<p>7</p>
						</div>
						<div className="span-5 padding-vertical border text-center">
							<p>5</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-8 padding-vertical border text-center">
							<p>8</p>
						</div>
						<div className="span-4 padding-vertical border text-center">
							<p>4</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-9 padding-vertical border text-center">
							<p>9</p>
						</div>
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-10 padding-vertical border text-center">
							<p>10</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-11 padding-vertical border text-center">
							<p>11</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-4 padding-vertical border text-center">
							<p>4</p>
						</div>
						<div className="span-4 padding-vertical border text-center">
							<p>4</p>
						</div>
						<div className="span-4 padding-vertical border text-center">
							<p>4</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
						<div className="span-3 padding-vertical border text-center">
							<p>3</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
						<div className="span-2 padding-vertical border text-center">
							<p>2</p>
						</div>
					</div>
					<div className="cols gap margin-top">
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
						<div className="span-1 padding-vertical border text-center">
							<p>1</p>
						</div>
					</div>
				</article>

				<article className="margin-top-double">
					<main>
						<p>
							Each grid container is divided into 12 standard fractions. Grid columns(<var>.cols</var>) and rows(<var>.rows</var>)
							work with the same logic.
						</p>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-cols">Copy</button>
							<pre className="language-html"><code id="code-cols"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<p>
							The sum of the spans(<var>.span-*</var>) must be 12. As shown in the following example: 3 + 4 + 5 = 12
						</p>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-cols-sum">Copy</button>
							<pre className="language-html"><code id="code-cols-sum"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Row Syntax</h3>
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
									<td><var>.rows</var></td>
									<td>The container class for grid rows.</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<div className="cols gap">
							<div className="rows gap">
								<div className="span-1 padding-vertical-half border text-center">
									<p>1</p>
								</div>
								<div className="span-11 padding-vertical-half border text-center">
									<p>11</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-2 padding-vertical-half border text-center">
									<p>2</p>
								</div>
								<div className="span-10 padding-vertical-half border text-center">
									<p>10</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-3 padding-vertical-half border text-center">
									<p>3</p>
								</div>
								<div className="span-9 padding-vertical-half border text-center">
									<p>9</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-4 padding-vertical-half border text-center">
									<p>4</p>
								</div>
								<div className="span-8 padding-vertical-half border text-center">
									<p>8</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-5 padding-vertical-half border text-center">
									<p>5</p>
								</div>
								<div className="span-7 padding-vertical-half border text-center">
									<p>7</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-6 padding-vertical-half border text-center">
									<p>6</p>
								</div>
								<div className="span-6 padding-vertical-half border text-center">
									<p>6</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-7 padding-vertical-half border text-center">
									<p>7</p>
								</div>
								<div className="span-5 padding-vertical-half border text-center">
									<p>5</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-8 padding-vertical-half border text-center">
									<p>8</p>
								</div>
								<div className="span-4 padding-vertical-half border text-center">
									<p>4</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-9 padding-vertical-half border text-center">
									<p>9</p>
								</div>
								<div className="span-3 padding-vertical-half border text-center">
									<p>3</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-10 padding-vertical-half border text-center">
									<p>10</p>
								</div>
								<div className="span-2 padding-vertical-half border text-center">
									<p>2</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-11 padding-vertical-half border text-center">
									<p>11</p>
								</div>
								<div className="span-1 padding-vertical-half border text-center">
									<p>1</p>
								</div>
							</div>
							<div className="rows gap">
								<div className="span-12 padding-vertical-half border text-center">
									<p>12</p>
								</div>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<p>
							The usage is similar, just type <var>rows</var> insted of <var>cols</var>.
						</p>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-rows">Copy</button>
							<pre className="language-html"><code id="code-rows"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Gap Syntax</h3>
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
									<td><var>.gap</var></td>
									<td>Default gap (1rem) between grid fractions.</td>
								</tr>
								<tr>
									<td><var>.gap-quarter</var></td>
									<td>Quarter gap (0.25rem) between grid fractions.</td>
								</tr>
								<tr>
									<td><var>.gap-half</var></td>
									<td>Half gap (0.5rem) between grid fractions.</td>
								</tr>
								<tr>
									<td><var>.gap-one-half</var></td>
									<td>One and a half gap (1.5rem) between grid fractions.</td>
								</tr>
								<tr>
									<td><var>.gap-double</var></td>
									<td>Double gap (1rem) between grid fractions.</td>
								</tr>
							</tbody>
						</table>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Default Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap">Copy</button>
							<pre className="language-html"><code id="code-gap"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Quarter Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-quarter">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap-quarter">Copy</button>
							<pre className="language-html"><code id="code-gap-quarter"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Half Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-half">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap-half">Copy</button>
							<pre className="language-html"><code id="code-gap-half"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>One &amp; Half Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-one-half">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap-one-half">Copy</button>
							<pre className="language-html"><code id="code-gap-one-half"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>Double Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-double">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap-double">Copy</button>
							<pre className="language-html"><code id="code-gap-double"></code></pre>
						</figure>
					</main>
				</article>

				<article className="margin-top-double">
					<header>
						<h3>No Gap</h3>
					</header>
					<main className="margin-top">
						<div className="cols gap-none">
							<div className="span-3 padding-vertical border text-center">
								<p>1</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>2</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>3</p>
							</div>
							<div className="span-3 padding-vertical border text-center">
								<p>4</p>
							</div>
						</div>
					</main>
				</article>

				<article className="margin-top-double">
					<main>
						<figure>
							<button type="button" data-role="clipboard" data-target="code-gap-none">Copy</button>
							<pre className="language-html"><code id="code-gap-none"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Grids