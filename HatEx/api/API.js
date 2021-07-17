function md5(d){return rstr2hex(binl2rstr(binl_md5(rstr2binl(d),8*d.length)))}function rstr2hex(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function rstr2binl(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function binl2rstr(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function binl_md5(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

function nameInData(name, data) {
	for (let key in data) if (name == data[key].name) return true; return false;
}

function nameIndexData(name, folder) {
	let idx = 0;
	for (let key in folder.data) if (name == folder.data[key].name) return idx; else idx++; return -1;
}

function findChatFolder(name, root) {
	for (let index in root.data) if (root.data[index] == name) return root; else if (typeof(root.data[index]) == "object") {
		let found = findChatFolder(name, root.data[index])
		if (found != false) return found
	}
	return false
}

function linkTo(protocol, type) {
	return "<" + type + ([... arguments].splice(2, arguments.length - 2).join("")) + ">"
}

function resolveLinkAlpha(link) {
	data = link.slice(1)
	if (link.startsWith("c")) { // channel
		return new ChannelLink(data, API.current)
	} else if (link.startsWith("r")) { // private
		return new PrivateChatLink(data, API.current)
	} else if (link.startsWith("b")) { // public
		return new PublicChatLink(data, API.current)
	} else if (link.startsWith("u")) { // user
		
	} else if (link.startsWith("d")) { // developer

	} else if (link.startsWith("b")) { // bot

	} else if (link.startsWith("w")) { // web

	} else if (link.startsWith("y")) { // YouTube

	} else if (link.startsWith("p")) { // image

	} else if (link.startsWith("m")) { // audio

	} else if (link.startsWith("f")) { // file

	} else if (link.startsWith("a")) { // album

	} else if (link.startsWith("i")) { // invitation

	} else return false
}

function resolveLinkBeta(link) {
	if (link.startsWith("c")) { // chat
		link = link.slice(1)
		data = link.slice(1)
		if (link.startsWith("c")) { // channel
			return new ChannelLink(data, API.current)
		} else if (link.startsWith("r")) { // private
			return new PrivateChatLink(data, API.current)
		} else if (link.startsWith("u")) { // public
			return new PublicChatLink(data, API.current)
		} else return false
	} else if (link.startsWith("a")) { // account
		link = link.slice(1)
		data = link.slice(1)
		if (link.startsWith("u")) { // user
		} else if (link.startsWith("d")) { // developer
		} else if (link.startsWith("b")) { // bot
		} else return false
	} else if (link.startsWith("w")) { // web
		link = link.slice(1)
		data = link.slice(1)
		if (link.startsWith("y")) { // YouTube
		} else if (link.startsWith("w")) { // Web
		} else return false
	} else if (link.startsWith("m")) { // media
		link = link.slice(1)
		data = link.slice(1)
		if (link.startsWith("a")) { // album
		} else if (link.startsWith("i")) { // image
		} else if (link.startsWith("m")) { // audio
		} else if (link.startsWith("f")) { // file
		} else return false
	} else if (link.startsWith("i")) { // invitation
		data = link.slice(1)
		return new InvitationLink(data, API.current)
	} else return false
}

function onMessageClick(event) {
	let mesgEl = event.target
	let breaker = 0
	while ((mesgEl.tagName.toLowerCase() != "message") && (breaker < 5)) {
		mesgEl = mesgEl.parentElement
		breaker++
	}
	if (breaker == 5) return
	console.log(mesgEl)
	window.selectedMessage = window.chat.messages[mesgEl.id]
	msgctxmenu.style.left = event.clientX + "px"
	msgctxmenu.style.top  = event.clientY + "px"
	event.preventDefault()
}

function parseMessage(id, user, message) {
	console.log(user)
	let author = user.name
	let pictureURL = user.pictureURL
	let types = message.type.split('/')
	let result = document.createElement("message")
	result.setAttribute("id", id)
	result.addEventListener("contextmenu", onMessageClick, false)
	let result_author = document.createElement("author")
	let result_author_image = document.createElement("img")
	result_author_image.setAttribute("src", pictureURL)
	let result_author_name = document.createElement("name")
	result_author_name.innerHTML = author
	result_author.appendChild(result_author_image)
	result_author.appendChild(result_author_name)
	result.appendChild(result_author)
	if (types.includes("creation")) {
		let creation = document.createElement("event")
		creation.innerHTML = "Chat was created!"
		result.appendChild(creation)
	}
	if (types.includes("text")) {
		let text = document.createElement("text")
		text.innerHTML = message.content.text.replace(">", "&#gt;")
		result.appendChild(text)
	}
	if (types.includes("image")) {
		let images = document.createElement("images")
		for (imageIdx in message.content.images) {
			let image = document.createElement("img")
			image.setAttribute("src", message.content.images[imageIdx].replace(">", "&#gt;"))
			result += `<img src="${message.content.images[imageIdx]}">`
		}
		result.appendChild(images)
	}
	if (types.includes("music")) {
		result += `<input id='${id}m' class='msg' value='and some audios were attached...' disabled>`
	}
	if (types.includes("yt")) {
		result += `<input id='${id}yt' class='msg' value='and YT video is there...' disabled>`
	}
	if (types.includes("document")) {
		result += `<input id='${id}d' class='msg' value='and some files were attached...' disabled>`
	}
	if (types.includes("album")) {
		result += `<input id='${id}a' class='msg' value='and there were albums...' disabled>`
	}
	if (types.includes("kick")) {
		result += `<event>${message.target} was kicked!</event>`
	}
	return result
}

function resolveLink(link) {
	if (!link.startsWith("<") || !link.endsWith(">")) return false
	link = link.slice(1, -1)
	if (link.startsWith("a")) {
		return resolveLinkAlpha(link.slice(1))
	} else if (link.startsWith("b")) {
		return resolveLinkBeta(link.slice(1))
	} else {
		console.error(`No such protocol: [${link.slice(0, 1)}]`)
		return false
	}
}

class API {
	current
	methods = {
		"chat": {
			"ban": async (chat, uid) => {
				if (!(chat instanceof PublicChatLink) || (typeof(uid) != "string")) return false
				await chat.databaseLink.child("users").child(uid).remove(() => {})
				await chat.databaseLink.child("banned").child(uid).set(true)
				return true
			},
			"unban": async (chat, user) => {
				if (!(chat instanceof PublicChatLink) || (typeof(uid) != "string")) return false
				await chat.databaseLink.child("banned").child(uid).remove(() => {})
				return true
			},
			"getlast": async (chat) => {
				console.log(chat)
				let history = resolveLink(chat).databaseLink.child('messages').orderByKey().limitToLast(100)
				return (await history.get()).val()
			},
			"get": async (chat, endkey) => {
				let history = resolveLink(chat).databaseLink.child('messages').orderByKey().endBefore(endkey).limitToLast(100)
				return (await history.get()).val()
			},
			"invite": async (chat, usages, uid) => {
				if (!(chat instanceof PublicChatLink) || typeof(usages) != "number") return false
				if (usages < 1) return false
				let inv = {}
				if (typeof(uid) == "string") {
					inv["foruser"] = uid
					usages = 1
				}
				inv["usages"] = usages
				if (chat instanceof PublicChatLink) {
					let invitation = new InvitationLink(chat.uid + chat.chatid + "|" + Date.now().toString(16), this)
					console.log(inv)
					invitation.databaseLink.set(inv)
					return "<bi" + chat.uid + chat.chatid + "|" + invitation.id + ">"
				} else return false
			},
			"kick": async (chat, user) => {
				if (!(chat instanceof IChat) || !(user instanceof IProfile)) return false
				await chat.databaseLink.child("users").child(uid).remove(() => {})
				return true
			},
			"update": {
				"name": async (chat, name) => {
					if ((typeof(chat) != "string") || (typeof(name) != "string")) return false
					await (resolveLink(chat).storeLink).update({name: name})
					return true
				},
				"picture": async (chat, pictureURL) => {
					if ((typeof(chat) != "string") || (typeof(pictureURL) != "string")) return false
					await (resolveLink(chat).storeLink).update({pictureURL: pictureURL})
					return true
				}
			},
			"write": async (chat, type, message) => {
				if ((typeof(chat) != "string") || (typeof(type) != "string") || (typeof(message) != "object")) return false
				resolveLink(chat).databaseLink.child("messages").push({sender: this.uid, type: type, time: Date.now(), content: message})
				return true
			}
		},
		"picture": {
			"upload": {
				"public": async (file, chat, album) => {
					let filename = md5(this.uid + file.name) + "." + Date.now().toString(16) + "." + Math.round(Math.random() * 100000)
					let storageRef = await (this.storage.ref().child("images").child("public").child(filename)).put(file)
					storageRef.updateMetadata({
						customMetadata: {
							"chat": chat
						}
					})

					if (album === undefined)
						return filename
					else return false
				},
				"private": async (file, receiver) => {
					let filename = [md5(file.name) + "." + Date.now().toString(16) + "." + Math.round(Math.random() * 100000)]
					let storageRef = await (this.storage.ref().child("images").child("private").child(this.uid).child(receiver).child(filename[0])).put(file)
					filename.push(snapshot)

					return filename
				}
			},
			"moreload": { 
				"public": async (files, album) => {
					if (files.length < 2) return false
					if ((album === undefined) && (files.length > 20)) return false
					let filenames = []
					let promises  = []
					for (let i = 0; i < files.length; i++) {
						let filename = [md5(this.uid + files[i].name) + "." + Date.now().toString(16) + "." + Math.round(Math.random() * 100000)]
						filenames.push(filename)
						promises.push(this.storage.ref().child("images").child("public").child(filename[0]).put(files[i]))
					}

					promises.forEach(async (ea) => {filenames.push(await ea)})

					if (album === undefined)
						return filenames
					else return false
				},
				"private": async (files, receiver) => {
					if (files.length < 2) return false
					if ((album === undefined) && (files.length > 20)) return false
					let filenames = []
					let promises  = []
					for (let i = 0; i < files.length; i++) {
						let filename = [md5(this.uid + files[i].name) + "." + Date.now().toString(16) + "." + Math.round(Math.random() * 100000)]
						filenames.push(filename)
						promises.push(this.storage.ref().child("images").child("private").child(this.uid).child(receiver).child(filename[0]).put(files[i]))
					}

					promises.forEach(async (ea) => {filenames.push(await ea)})

					return filenames
				}
			}
		},
		"user": {
			"folder": {
				"create": async (name) => {
					if (typeof(name) != "string") return false
					let userRef = await this.store.collection("users").doc(this.uid)
					let doc = await userRef.get()
					let root = doc.data()["root"]
					root.push({
						name: name,
						pictureURL: "",
						data: []
					})
					userRef.update({root: root})
					return true
				},
				"move": {
					"default": async (folder, dest) => {
						if ((typeof(folder) != "string") || (typeof(dest) != "string")) return false
						if (folder == dest) return false
						if (dest.startsWith(folder)) return false
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await userRef.get()
						let root = doc.data()["root"]
						let f = { name: "root", data: root }
						let d = { name: "root", data: root }
						let parent
						let searching = true
						dest.split("/").forEach((eve) => {
							if (!searching) return;
							if (eve == "") return;
							if ("data" in d) {
								if (nameInData(eve, d.data)) {
									d = d.data[nameIndexData(eve, d)]
								} else {
									searching = false
									d = undefined;
									return;
								}
							} else {
								searching = false
								d = undefined;
								return;
							}
						})
						if (d == undefined) return false
						searching = true
						folder.split("/").forEach((eve) => {
							if (!searching) return;
							if (eve == "") return;
							if ("data" in f) {
								if (nameInData(eve, f.data)) {
									parent = f
									f = f.data[nameIndexData(eve, f)]
								} else {
									searching = false
									f = undefined;
									return;
								}
							} else {
								searching = false
								f = undefined;
								return;
							}
						})
						if (f == undefined) return false
						d.data.push(f)
						parent.data.splice(nameIndexData(f.name, parent), 1)
						console.log(root, f, d)
						return root
					},
					"apply": async (root) => {
						let userRef = this.store.collection("users").doc(this.uid)
						userRef.update({"root": root})
						return true
					},
					"chat": async (chat, dest) => {
						if ((typeof(chat) != "string") || (typeof(dest) != "string")) return false
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await userRef.get()
						let root = doc.data()["root"]
						let d = { name: "root", data: root }
						let searching = true
						dest.split("/").forEach((eve) => {
							if (!searching) return;
							if (eve == "") return;
							if ("data" in d) {
								if (nameInData(eve, d.data)) {
									d = d.data[nameIndexData(eve, d)]
								} else {
									searching = false
									d = undefined;
									return;
								}
							} else {
								searching = false
								d = undefined;
								return;
							}
						})
						let folder = findChatFolder(chat, { name: "root", data: root })
						if (folder == false) return false;
						folder.data.splice(folder.data.indexOf(chat), 1)
						d.data.push(chat)
						userRef.update(root)
						return true
					}
				},
				"set": {
					"name": async (folder, name) => {
						if ((typeof(folder) != "string") || (typeof(name) != "string")) return false
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await userRef.get()
						let root = doc.data()["root"]
						let d = { name: "root", data: root }
						let searching = true
						folder.split("/").forEach((eve) => {
							if (!searching) return;
							if (eve == "") return;
							if ("data" in d) {
								if (nameInData(eve, d.data)) {
									d = d.data[nameIndexData(eve, d)]
								} else {
									searching = false
									d = undefined;
									return;
								}
							} else {
								searching = false
								d = undefined;
								return;
							}
						})
						if (d == undefined) return false;
						if (d == root) return false; 
						d.name = name
						userRef.update({root: root})
						return true
					},
					"picture": async (folder, pictureURL) => {
						if ((typeof(folder) != "string") || (typeof(pictureURL) != "string")) return false
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await userRef.get()
						let root = doc.data()["root"]
						let d = { name: "root", data: root }
						let searching = true
						folder.split("/").forEach((eve) => {
							if (!searching) return;
							if (eve == "") return;
							if ("data" in d) {
								if (nameInData(eve, d.data)) {
									d = d.data[nameIndexData(eve, d)]
								} else {
									searching = false
									d = undefined;
									return;
								}
							} else {
								searching = false
								d = undefined;
								return;
							}
						})
						if (d == undefined) return false;
						if (d == root) return false; 
						d.pictureURL = pictureURL
						userRef.update({root: root})
						return true
					}
				},
				"delete": async (folder) => {
					if (typeof(folder) != "string") return false
					let userRef = this.store.collection("users").doc(this.uid)
					let doc = await userRef.get()
					let root = doc.data()["root"]
					let f = { name: "root", data: root }
					let parent
					let searching = true
					folder.split("/").forEach((eve) => {
						if (!searching) return;
						if (eve == "") return;
						if ("data" in f) {
							if (nameInData(eve, f.data)) {
								parent = f
								f = f.data[nameIndexData(eve, f)]
							} else {
								searching = false
								f = undefined;
								return;
							}
						} else {
							searching = false
							f = undefined;
							return;
						}
					})
					parent.data.splice(nameIndexData(f.name, parent), 1)
					userRef.update({"root": root})
					return true
				}
			},
			"get": async (id, fields) => {
				if (typeof(id) != "string") return false
				let getstatus = []
				let doc = await (this.store.collection("users").doc(id)).get()
				getstatus.push(doc.data())
				if (getstatus[0] == false) return false
				if (fields === undefined) {
					let user = {}
					for (let field in getstatus[0])
						if (getstatus[0].hasOwnProperty(field))
							user[field] = getstatus[0][field]
					return user
				} else if (fields instanceof Array) {
					let user = {}
					for (let index in fields)
						if (getstatus[0].hasOwnProperty(fields[index]))
							user[fields[index]] = getstatus[0][fields[index]]
					return user
				} else return false
			},
			"set": {
				"default": async (fields) => {
					if (typeof(fields) != "object")
						return false
					await this.store.collection("users").doc(this.uid).update(fields)
					return true
				},
				"name": async (name) => {
					if (typeof(name) != "string") return false
					await this.store.collection("users").doc(this.uid).update({"name": name})
					return true
				},
				"picture": async (pictureURL) => {
					if (typeof(pictureURL) != "string") return false
					await this.store.collection("users").doc(this.uid).update({"pictureURL": pictureURL})
					return true
				}
			},
			"join": {
				"chat": {
					"public": async (inv) => {
						if (typeof(inv) != "string") return false
						let i = resolveLink(inv)
						if (!(i instanceof InvitationLink)) return false
						i.databaseLink.update({usages: (await i.databaseLink.get()).val().usages - 1})
						i.chat.databaseLink.child("users").child(this.uid).set({
							role: 0,
							invite: i.id
						})
						return true
					}
				},
				"channel": async (channel) => {
					if (typeof(channel) != "string") return false
					return true
				}
			},
			"new": {
				"channel": async (name) => {
					if (typeof(name) != "string") return false
					let id = this.uid + Date.now().toString(16)
					await this.database.ref("channels/" + id).set({
						name: name
					})
					await this.database.ref("channels/" + id + "/messages").push({
						"type": "creation"
					})
					let docRef = this.store.collection("users").doc(this.uid)
					let doc = await docRef.get()
					let channelList = doc.get("channels")
					channelList.push(name)
					docRef.update({channels: channelList})
					return true
				},
				"chat": {
					"private": async (uid) => {
						if (typeof("uid") != "string") return false
						let chatRef = this.store.collection("privatechats").doc(this.uid + " | " + uid)
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await chatRef.get()
						if (!doc.exists) {
							chatRef = await this.store.collection("privatechats").doc(uid + " | " + this.uid)
							doc = chatRef.get()
						}
						if (doc.exists)
							return false
						await chatRef.set({"name": "New private chat"})
						let user = await userRef.get()
						let rootFolder = user.data()["root"]
						rootFolder.push("private chats:" + this.uid + " | " + uid)
						await userRef.update({root: rootFolder})
						await this.database.ref("private chats/" + this.uid + " | " + uid + "/messages").push({
							"type": "creation"
						})
						return true
					},
					"public": async (name) => {
						if (typeof(name) != "string") return false
						let id = Date.now().toString(16)
						let chatRef = this.store.collection("publicchats").doc(this.uid + id)
						let userRef = this.store.collection("users").doc(this.uid)
						let doc = await chatRef.get()
						await this.database.ref("public chats/" + this.uid + "/" + id).set({
							invite: { create: { usages: 0 } }
						})
						await this.database.ref("public chats/" + this.uid + "/" + id + "/users").set({
							[this.uid]: { role: 100, invite: "create" }
						})
						await this.database.ref("public chats/" + this.uid + "/" + id + "/messages").push({
							type: "creation",
							sender: this.uid,
							time: Date.now()
						})
						await chatRef.set({
							name: name,
							pictureURL: "",
							owner: this.uid
						})
						let user = await userRef.get()
						let rootFolder = user.data()["root"]
						rootFolder.push("public chats:" + this.uid + id)
						await userRef.update({root: rootFolder})
						return true
					}
				}
			},
			"blacklist": {
				"add": async (user) => {
					if (!(user instanceof IProfile)) return false
					return true
				},
				"remove": async (user) => {
					if (!(user instanceof IProfile)) return false
					return true
				}
			}
		}
	}

	async fetchUser(id) {
		let doc = await (this.store.collection("users").doc(id)).get()
		this.users[id] = doc.data()
	}

	async exeqt(method) {
		let parameters = [...arguments].splice(1)
		let cursor = this.methods
		method = method.split(".")
		for (let step in method) 
			cursor = cursor[method[step]]
		if (typeof(cursor) == "object") if("default" in cursor) cursor = cursor["default"]
		let result = await cursor(...parameters)
		console.log(result)
		return await result
	}

	setup() {
		this.store = firebase.firestore()
		this.database = firebase.database()
		this.storage = firebase.storage()
		this.uid = firebase.auth().currentUser.uid
		this.users = {}
		API.current = this
	}

	update() {
		this.setup()
		this.handleUpdate()
	}

	async handleUpdate() {}
}