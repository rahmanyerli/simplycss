class Alert {

	static init = () => {
		let alerts = document.querySelectorAll(".alert");
		Alert.bindAlerts(alerts);
	}

	static bindAlerts = (alerts) => {
		for (const alert of alerts) {
			if (alert.classList.contains("alert")) {
				Alert.bindAlert(alert)
			}
		}
	}

	static bindAlert = (alert) => {
		try {
			let dataDismiss = alert.getAttribute("data-dismiss")
			if (dataDismiss) {
				// create dismiss button
				let dismisser = document.createElement("span")
				dismisser.classList.add("close")
				dismisser.addEventListener("click", (event) => {
					Alert.dismissAlert(event.target.parentNode)
				})
				alert.appendChild(dismisser)
			}
			// find other dismiss buttons
			let buttons = alert.querySelectorAll("[data-dismiss]");
			if (buttons && buttons.length > 0) {
				for (const button of buttons) {
					let dataTarget = button.getAttribute("data-target");
					if (dataTarget) {
						let target = document.getElementById(dataTarget)
						button.addEventListener("click", () => {
							Alert.dismissAlert(target)
						})
					}
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	static dismissAlerts = (alerts) => {
		try {
			if (alerts) {
				for (const alert of alerts) {
					Alert.dismissAlert(alert)
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	static dismissAlert = (alert) => {
		if (alert) {
			alert.style.opacity = "0";
			setTimeout(() => {
				alert.remove()
			}, 300);
		}
	}

	static createAlert = (html) => {
		var div = document.createElement('div');
		div.innerHTML = html.trim();
		let alert = div.firstChild;
		Alert.bindAlert(alert);
		return alert;
	}
}

export default Alert