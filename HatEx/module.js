function loadModule(module, files) {
	if (files == undefined) {
		let m = document.createElement("script")
		m.setAttribute("src", module + '.js')
		document.head.appendChild(m)
	} else
		for (let fi in files) {
			let m = document.createElement("script")
			m.setAttribute("src", module + '/' + files[fi] + '.js')
			document.head.appendChild(m)
		}
}