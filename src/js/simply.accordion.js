class Accordion {

	static init = () => {
		// bind accordion events
		setTimeout(() => {
			let accordions = document.querySelectorAll(".accordion > header > button");
			Accordion.bindAccordions(accordions);
		}, 500);
	}

	static bindAccordions = (accordions) => {
		for (const accordion of accordions) {
			accordion.addEventListener("click", Accordion.toggleAccordion);
		}
	}

	static toggleAccordion = (event) => {
		event.stopPropagation();
		let currentAccordion = event.target.parentNode.parentNode;
		Accordion.collapseOtherAccordions(currentAccordion);
		event.target.classList.toggle("active");
		Accordion.toggleAccordionPanel(currentAccordion);
	}

	static toggleAccordionPanel = (currentAccordion) => {
		if (currentAccordion) {
			let currentPanel = currentAccordion.querySelector("main");
			if (currentPanel.style.maxHeight) {
				currentPanel.style.maxHeight = null;
			} else {
				currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
			}
		}
	}

	static collapseOtherAccordions = (currentAccordion) => {
		if (currentAccordion && currentAccordion.classList.contains("toggle")) {
			// close other accordion panels
			let accordions = currentAccordion.parentNode.querySelectorAll(".accordion");
			if (accordions) {
				for (const accordion of accordions) {
					// exclude current accordion
					if (accordion !== currentAccordion) {
						accordion.classList.remove("active");
					}
				}
			}
			let panels = currentAccordion.parentNode.querySelectorAll(".accordion > main");
			if (panels) {
				for (const panel of panels) {
					// exclude current accordion panel
					if (panel !== currentAccordion.querySelector("main")) {
						panel.style.maxHeight = null;
					}
				}
			}
		}
	}

	static expandAccordion = (currentAccordion) => {
		if (!currentAccordion) {
			return false;
		}
		Accordion.collapseOtherAccordions(currentAccordion);
		//currentAccordion.classList.add("active");
		let currentPanel = currentAccordion.querySelector("main");
		currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
	}

	static collapseAccordion = (currentAccordion) => {
		if (!currentAccordion) {
			return false;
		}
		//currentAccordion.classList.remove("active");
		let currentPanel = currentAccordion.querySelector("main");
		currentPanel.style.maxHeight = null;
	}
}

export default Accordion