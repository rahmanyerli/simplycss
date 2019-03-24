import React, { Component } from 'react'

class MenuButton extends Component {

	componentDidMount() {
		this.toggleMenuButton()
	}

	render() {
		return (
			<input type="checkbox" id="menu-button" className="icon icon-menu" />
		)
	}

	//Show or hide the menu button by window scroll position
	toggleMenuButton = () => {
		// Initial state
		var scrollPos = 0
		// adding scroll event
		window.addEventListener('scroll', function () {
			setTimeout(() => {
				// detects new state and compares it with the new one
				let menuButton = document.getElementById("menu-button")
				let clientRect = document.body.getBoundingClientRect()

				if (clientRect.top < scrollPos) {
					setTimeout(() => {
						menuButton.classList.remove("scale-1")
						menuButton.classList.add("scale-0")
					}, 100)
				}
				else {
					setTimeout(() => {
						menuButton.classList.remove("scale-0")
						menuButton.classList.add("scale-1")
					}, 100)
				}
				// saves the new position for iteration.
				scrollPos = clientRect.top
			}, 100)
		})
	}
}

export default MenuButton