class Range {

	static init = () => {
		// bind range events
		setTimeout(() => {
			let ranges = document.querySelectorAll("input[type=range]");
			Range.bindRanges(ranges);
		}, 500)
	}

	static bindRanges = (ranges) => {
		for (const range of ranges) {
			const query = `input[data-target=${range.id}`
			const rangeValue = document.querySelector(query)
			rangeValue.classList.add("text-center")
			rangeValue.value = range.value

			range.addEventListener("input", () => {
				rangeValue.value = range.value
			})

			rangeValue.addEventListener("input", (event) => {
				const val = rangeValue.value
				const max = parseInt(rangeValue.getAttribute("max"))
				const min = parseInt(rangeValue.getAttribute("min"))
				if (val > max) {
					rangeValue.value = max
				}
				if (val < min) {
					rangeValue.value = min
				}
				range.value = rangeValue.value
			})
		}
	}
}

export default Range