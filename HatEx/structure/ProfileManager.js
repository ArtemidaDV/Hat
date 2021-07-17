class ProfileManager {
	google(uid) {
		return new User()
	}

	github(uid) {
		return new Developer()
	}

	bot(uid, token) {
		return new bot()
	}
}

function loadProfile(data) {
	let result
	if (data.type == "user")
		result = new User(data.name)
	else if (data.type == "dev") 
		result = new Developer()
	else result = new Bot()

	for (var field in data) {
		if (Object.prototype.hasOwnProperty.call(data, field)) {
			result[field] = data[field]
		}
	}
	
	return result
}